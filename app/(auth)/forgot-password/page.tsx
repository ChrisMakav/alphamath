"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Mail } from "lucide-react";
import { createClient } from "../../../lib/supabase/client";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

const schema = z.object({
  email: z.string().email("Adresse e-mail invalide"),
});
type FormData = z.infer<typeof schema>;

export default function ForgotPasswordPage() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setLoading(true);
    setServerError(null);
    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
    });
    if (error) {
      setServerError("Une erreur est survenue. Réessayez plus tard.");
      setLoading(false);
      return;
    }
    setSuccess(true);
    setLoading(false);
  }

  if (success) {
    return (
      <div className="text-center py-4">
        <div
          className="size-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4"
          style={{ background: "var(--am-green-muted)", border: "2px solid var(--am-green-dim)" }}
        >
          ✉️
        </div>
        <h2 className="text-xl font-black text-[var(--am-text)] mb-2">Vérifiez votre e-mail !</h2>
        <p className="text-sm text-[var(--am-text-secondary)] mb-6">
          Si un compte existe avec cette adresse, un lien de réinitialisation vient de vous être envoyé.
        </p>
        <Link href="/login">
          <Button variant="outline" size="sm" full>Retour à la connexion</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-black text-[var(--am-text)] mb-1">Mot de passe oublié</h1>
        <p className="text-sm text-[var(--am-text-secondary)]">
          Entrez votre e-mail pour recevoir un lien de réinitialisation.
        </p>
      </div>

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

        {serverError && (
          <p
            className="text-sm px-3 py-2 rounded-[var(--am-radius-md)]"
            style={{ color: "#f87171", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}
          >
            {serverError}
          </p>
        )}

        <Button type="submit" variant="primary" size="lg" full loading={loading}>
          Envoyer le lien
        </Button>
      </form>

      <p className="text-center text-sm mt-5" style={{ color: "var(--am-text-muted)" }}>
        <Link href="/login" className="font-semibold hover:text-[var(--am-green)] transition-colors" style={{ color: "var(--am-text-secondary)" }}>
          Retour à la connexion
        </Link>
      </p>
    </>
  );
}
