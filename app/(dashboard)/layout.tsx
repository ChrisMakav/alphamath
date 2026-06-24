import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase/server";
import { Navbar } from "../components/ui/Navbar";
import { Sidebar } from "../components/ui/Sidebar";
import type { Database } from "../../lib/supabase/types";
import { LEVEL_LABELS } from "../../lib/seed-data";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profileRaw } = await supabase
    .from("profiles")
    .select("name, school_level, role")
    .eq("id", user.id)
    .single();

  const profile = profileRaw as Pick<Profile, "name" | "school_level" | "role"> | null;
  const userName = profile?.name ?? user.email?.split("@")[0] ?? "Étudiant";
  const schoolLevel = profile?.school_level;
  const userLevel = schoolLevel
    ? (LEVEL_LABELS[schoolLevel as keyof typeof LEVEL_LABELS] ?? schoolLevel)
    : undefined;
  const isAdmin = profile?.role === "admin";

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar isAuthenticated />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar userName={userName} userLevel={userLevel} isAdmin={isAdmin} />
        <main className="flex-1 overflow-y-auto" style={{ background: "var(--am-bg)" }}>
          {children}
        </main>
      </div>
    </div>
  );
}
