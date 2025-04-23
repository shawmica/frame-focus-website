
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Image, Upload, Delete } from "lucide-react";
import { useNavigate } from "react-router-dom";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface GalleryImage {
  id: string;
  url: string;
  name: string;
}

export default function Dashboard() {
  const nav = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(res => {
      if (res.data.user) setUser(res.data.user);
      else nav("/auth");
    });
  }, [nav]);

  useEffect(() => {
    if (user) fetchImages();
    // eslint-disable-next-line
  }, [user]);

  async function fetchImages() {
    setLoading(true);
    const { data, error } = await supabase
      .storage
      .from("gallery")
      .list(user.id + "/", { limit: 100 });
    if (data) {
      setImages(data.filter(f => f.metadata).map(f => ({
        id: f.id,
        url: supabase.storage.from("gallery").getPublicUrl(user.id + `/${f.name}`).data.publicUrl,
        name: f.name,
      })));
    }
    setLoading(false);
  }

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!file || !user) return;
    setLoading(true);
    const filePath = user.id + "/" + file.name;
    const { error } = await supabase.storage.from("gallery").upload(filePath, file);
    if (!error) {
      fetchImages();
      setFile(null);
    }
    setLoading(false);
  }

  async function handleDelete(name: string) {
    if (!user) return;
    setLoading(true);
    await supabase.storage.from("gallery").remove([user.id + "/" + name]);
    fetchImages();
    setLoading(false);
  }

  function logout() {
    supabase.auth.signOut().then(() => nav("/auth"));
  }

  if (!user) return null;
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gallery Management</h1>
        <Button variant="outline" onClick={logout}>Logout</Button>
      </div>
      <form onSubmit={handleUpload} className="flex space-x-2 mb-8">
        <Input type="file" accept="image/*" onChange={e => setFile(e.target.files?.[0] || null)} />
        <Button type="submit" disabled={!file || loading}>
          <Upload className="mr-2" /> Upload
        </Button>
      </form>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.length === 0 ? (
              <div>No images uploaded yet.</div>
            ) : (
              images.map(img => (
                <div key={img.id} className="relative group border rounded p-2 flex flex-col items-center">
                  <img src={img.url} alt={img.name} className="max-h-56 object-contain mb-2 rounded" />
                  <div className="flex justify-between w-full">
                    <span className="truncate">{img.name}</span>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(img.name)}
                      className="ml-2"
                    >
                      <Delete size={16} />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
