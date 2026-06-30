"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Mail, Lock } from "lucide-react";
import { createClient } from "../../../lib/supabase/client";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

const schema = z.object({
  email: z.string().email("Adresse e-mail invalide"),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});
type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const inactivityLogout = searchParams.get("reason") === "inactivity";
  const [serverError, setServerError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setLoading(true);
    setServerError(null);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
    if (error) {
      setServerError("E-mail ou mot de passe incorrect.");
      setLoading(false);
      return;
    }
    router.push("/dashboard");
    router.refresh();
  }

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-black text-[var(--am-text)] mb-1">Connexion</h1>
        <p className="text-sm text-[var(--am-text-secondary)]">
          Bon retour ! Continuez votre progression.
        </p>
      </div>

      {inactivityLogout && (
        <div
          className="mb-4 text-sm px-3 py-2 rounded-[var(--am-radius-md)]"
          style={{ color: "#f59e0b", background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)" }}
        >
          Vous avez été déconnecté automatiquement après une période d'inactivité.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          label="Adresse e-mail"
          type="email"
          placeholder="alex@exemple.com"
          autoComplete="email"
          icon={<Mail size={15} />}
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          label="Mot de passe"
          type="password"
          placeholder="••••••••"
          autoComplete="current-password"
          icon={<Lock size={15} />}
          error={errors.password?.message}
          {...register("password")}
        />

        {serverError && (
          <p
            className="text-sm px-3 py-2 rounded-[var(--am-radius-md)]"
            style={{ color: "#f87171", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}
          >
            {serverError}
          </p>
        )}

        <div className="flex justify-end">
          <Link href="#" className="text-xs text-[var(--am-text-muted)] hover:text-[var(--am-green)] transition-colors">
            Mot de passe oublié ?
          </Link>
        </div>

        <Button type="submit" variant="primary" size="lg" full loading={loading}>
          Se connecter
        </Button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 h-px" style={{ background: "var(--am-border)" }} />
        <span className="text-xs" style={{ color: "var(--am-text-muted)" }}>ou continuer avec</span>
        <div className="flex-1 h-px" style={{ background: "var(--am-border)" }} />
      </div>

      {/* Google OAuth */}
      <Button
        variant="outline"
        size="md"
        full
        onClick={async () => {
          const supabase = createClient();
          await supabase.auth.signInWithOAuth({
            provider: "google",
            options: { redirectTo: `${window.location.origin}/auth/callback` },
          });
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Google
      </Button>

      <p className="text-center text-sm mt-5" style={{ color: "var(--am-text-muted)" }}>
        Pas encore de compte ?{" "}
        <Link href="/register" className="font-semibold hover:text-[var(--am-green)] transition-colors" style={{ color: "var(--am-text-secondary)" }}>
          S'inscrire gratuitement
        </Link>
      </p>
    </>
  );
}
