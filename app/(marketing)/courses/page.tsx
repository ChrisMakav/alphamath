import React from "react";
import { CourseExplorer } from "./CourseExplorer";
import { createClient } from "../../../lib/supabase/server";
import type { Database } from "../../../lib/supabase/types";
import { getAccessibleLevels, type SchoolLevel } from "../../../lib/seed-data";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export default async function CoursesPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  let accessibleLevels: SchoolLevel[] | "all" = "all";
  if (user) {
    const { data: profileRaw } = await supabase
      .from("profiles")
      .select("school_level, role, is_premium")
      .eq("id", user.id)
      .single();
    const profile = profileRaw as Pick<Profile, "school_level" | "role" | "is_premium"> | null;
    accessibleLevels = getAccessibleLevels({
      role: profile?.role ?? null,
      school_level: profile?.school_level ?? null,
      is_premium: profile?.is_premium ?? null,
    });
  }

  return <CourseExplorer accessibleLevels={accessibleLevels} />;
}
