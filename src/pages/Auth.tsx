
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Auth() {
  const [view, setView] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    if (view === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setError(error.message);
      else nav("/dashboard", { replace: true });
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) setError(error.message);
      else setView("login");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form onSubmit={handleAuth} className="bg-white p-8 rounded shadow w-80 space-y-5">
        <h2 className="text-xl font-bold">{view === "login" ? "Login" : "Register"}</h2>
        {error && <div className="text-red-500">{error}</div>}
        <Input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Loading..." : view === "login" ? "Login" : "Register"}
        </Button>
        <div className="text-sm text-center">
          {view === "login" ? (
            <>
              No account?{" "}
              <button type="button" className="underline" onClick={() => setView("register")}>
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button type="button" className="underline" onClick={() => setView("login")}>
                Login
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
