"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
import { createClient } from "../../../lib/supabase/client";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

const schema = z
  .object({
    password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });
type FormData = z.infer<typeof schema>;

export default function ResetPasswordPage() {
  const router = useRouter();
  const [sessionReady, setSessionReady] = useState<boolean | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSessionReady(!!session);
    });
  }, []);

  async function onSubmit(data: FormData) {
    setLoading(true);
    setServerError(null);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password: data.password });
    if (error) {
      setServerError("Impossible de mettre à jour le mot de passe. Réessayez.");
      setLoading(false);
      return;
    }
    await supabase.auth.signOut();
    router.push("/login?reset=success");
  }

  if (sessionReady === null) {
    return <p className="text-sm text-center py-4" style={{ color: "var(--am-text-secondary)" }}>Chargement…</p>;
  }

  if (!sessionReady) {
    return (
      <div className="text-center py-4">
        <h2 className="text-xl font-black text-[var(--am-text)] mb-2">Lien invalide ou expiré</h2>
        <p className="text-sm text-[var(--am-text-secondary)] mb-6">
          Ce lien de réinitialisation n'est plus valide. Demandez-en un nouveau.
        </p>
        <Link href="/forgot-password">
          <Button variant="outline" size="sm" full>Demander un nouveau lien</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-black text-[var(--am-text)] mb-1">Nouveau mot de passe</h1>
        <p className="text-sm text-[var(--am-text-secondary)]">
          Choisissez un nouveau mot de passe pour votre compte.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          label="Nouveau mot de passe"
          type="password"
          placeholder="Au moins 8 caractères"
          autoComplete="new-password"
          icon={<Lock size={15} />}
          hint="Minimum 8 caractères"
          error={errors.password?.message}
          {...register("password")}
        />
        <Input
          label="Confirmer le mot de passe"
          type="password"
          placeholder="••••••••"
          autoComplete="new-password"
          icon={<Lock size={15} />}
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
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
          Mettre à jour le mot de passe
        </Button>
      </form>
    </>
  );
}
