"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, User } from "lucide-react";
import { createClient } from "../../../lib/supabase/client";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { LevelBadge } from "../../components/ui/Badge";

const LEVELS = [
  { id: "6eme",      label: "6ème" },
  { id: "5eme",      label: "5ème" },
  { id: "4eme",      label: "4ème" },
  { id: "3eme",      label: "3ème" },
  { id: "2nde",      label: "2nde" },
  { id: "1ere",      label: "1ère" },
  { id: "terminale", label: "Terminale" },
  { id: "L1",        label: "Licence 1" },
  { id: "L2",        label: "Licence 2" },
  { id: "L3",        label: "Licence 3" },
];

const schema = z.object({
  name: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse e-mail invalide"),
  password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères"),
  level: z.string().min(1, "Choisissez votre niveau"),
});
type FormData = z.infer<typeof schema>;

export default function RegisterPage() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const selectedLevel = watch("level");

  async function onSubmit(data: FormData) {
    setLoading(true);
    setServerError(null);
    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: { name: data.name, school_level: data.level },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) {
      setServerError(error.message);
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
          Nous avons envoyé un lien de confirmation à votre adresse. Cliquez dessus pour activer votre compte.
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
        <h1 className="text-2xl font-black text-[var(--am-text)] mb-1">Créer un compte</h1>
        <p className="text-sm text-[var(--am-text-secondary)]">
          Gratuit · Pas de carte bancaire
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          label="Prénom"
          type="text"
          placeholder="Alex"
          autoComplete="given-name"
          icon={<User size={15} />}
          error={errors.name?.message}
          {...register("name")}
        />
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
          placeholder="Au moins 8 caractères"
          autoComplete="new-password"
          icon={<Lock size={15} />}
          hint="Minimum 8 caractères"
          error={errors.password?.message}
          {...register("password")}
        />

        {/* Level picker */}
        <div>
          <p className="text-sm font-medium mb-2" style={{ color: "var(--am-text-secondary)" }}>
            Votre niveau actuel
          </p>
          <div className="flex flex-wrap gap-2">
            {LEVELS.map((lvl) => (
              <button
                key={lvl.id}
                type="button"
                onClick={() => setValue("level", lvl.id, { shouldValidate: true })}
                className="transition-all"
                style={{ opacity: selectedLevel === lvl.id ? 1 : 0.55 }}
              >
                <LevelBadge
                  level={lvl.id}
                  className={selectedLevel === lvl.id ? "ring-2 ring-offset-1 ring-offset-[var(--am-bg-card)]" : ""}
                />
              </button>
            ))}
          </div>
          {errors.level && (
            <p className="text-xs mt-1" style={{ color: "#f87171" }}>{errors.level.message}</p>
          )}
          <input type="hidden" {...register("level")} />
        </div>

        {serverError && (
          <p
            className="text-sm px-3 py-2 rounded-[var(--am-radius-md)]"
            style={{ color: "#f87171", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}
          >
            {serverError}
          </p>
        )}

        <Button type="submit" variant="primary" size="lg" full loading={loading}>
          Créer mon compte
        </Button>
      </form>

      <p className="text-center text-xs mt-4" style={{ color: "var(--am-text-muted)" }}>
        En vous inscrivant, vous acceptez nos{" "}
        <Link href="#" className="underline hover:text-[var(--am-green)] transition-colors">CGU</Link>
        {" "}et notre{" "}
        <Link href="#" className="underline hover:text-[var(--am-green)] transition-colors">politique de confidentialité</Link>.
      </p>

      <p className="text-center text-sm mt-4" style={{ color: "var(--am-text-muted)" }}>
        Déjà inscrit ?{" "}
        <Link href="/login" className="font-semibold hover:text-[var(--am-green)] transition-colors" style={{ color: "var(--am-text-secondary)" }}>
          Se connecter
        </Link>
      </p>
    </>
  );
}
