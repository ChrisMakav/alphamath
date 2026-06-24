"use client";
import React, { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CourseCard } from "../../components/ui/CourseCard";
import { FilterBar } from "../../components/ui/FilterBar";
import { SearchInput } from "../../components/ui/SearchInput";
import {
  COURSES,
  type SchoolLevel,
  type Subject,
  type LevelCategory,
  getSubjectLabel,
  LEVEL_LABELS,
  LEVEL_CATEGORIES,
  LEVEL_CATEGORY_LABELS,
} from "../../../lib/seed-data";

const LEVEL_OPTIONS = [
  { id: "all", label: "Tous les niveaux" },
  { id: "6eme", label: "6ème" },
  { id: "5eme", label: "5ème" },
  { id: "4eme", label: "4ème" },
  { id: "3eme", label: "3ème" },
  { id: "2nde", label: "2nde" },
  { id: "1ere", label: "1ère" },
  { id: "terminale", label: "Terminale" },
  { id: "L1", label: "Licence 1" },
  { id: "L2", label: "Licence 2" },
  { id: "L3", label: "Licence 3" },
];

const SUBJECT_OPTIONS = [
  { id: "all",           label: "Tous les sujets" },
  { id: "geometrie",     label: "Géométrie" },
  { id: "algebre",       label: "Algèbre" },
  { id: "analyse",       label: "Analyse" },
  { id: "probabilites",  label: "Probabilités" },
  { id: "arithmetique",  label: "Arithmétique" },
  { id: "informatique",  label: "Informatique" },
  { id: "statistiques",  label: "Statistiques" },
];

function CoursesContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const category: LevelCategory | null =
    categoryParam && categoryParam in LEVEL_CATEGORIES ? (categoryParam as LevelCategory) : null;

  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("all");
  const [subject, setSubject] = useState("all");

  const filtered = useMemo(() => {
    return COURSES.filter((c) => {
      const matchSearch = search === "" ||
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase());
      const matchLevel = level === "all" || c.schoolLevel === level;
      const matchSubject = subject === "all" || c.subject === subject;
      const matchCategory = !category || LEVEL_CATEGORIES[category].includes(c.schoolLevel);
      return matchSearch && matchLevel && matchSubject && matchCategory;
    });
  }, [search, level, subject, category]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--am-purple)" }}>
          CATALOGUE
        </p>
        <h1 className="text-4xl font-black text-[var(--am-text)] mb-3">Course Explorer</h1>
        <p className="text-[var(--am-text-secondary)] max-w-xl">
          Découvrez des parcours d'apprentissage structurés pour la maîtrise. De l'arithmétique fondamentale
          à l'analyse avancée, construisez votre fondation mathématique avec précision académique.
        </p>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col gap-4 mb-8">
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Rechercher un cours (ex : intégrales, Pythagore...)"
          className="max-w-lg"
        />
        <FilterBar
          label="Niveau"
          options={LEVEL_OPTIONS}
          value={level}
          onChange={setLevel}
        />
        <FilterBar
          label="Sujet"
          options={SUBJECT_OPTIONS}
          value={subject}
          onChange={setSubject}
        />
      </div>

      {/* Results count */}
      <p className="text-sm mb-6" style={{ color: "var(--am-text-muted)" }}>
        {filtered.length} cours{filtered.length !== 1 ? "s" : ""}
        {category && ` · ${LEVEL_CATEGORY_LABELS[category]}`}
        {level !== "all" && ` en ${LEVEL_LABELS[level as SchoolLevel]}`}
        {subject !== "all" && ` · ${getSubjectLabel(subject as Subject)}`}
        {search && ` · Recherche : "${search}"`}
      </p>

      {/* Course grid */}
      {filtered.length === 0 ? (
        <div
          className="py-20 text-center rounded-[var(--am-radius-2xl)]"
          style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
        >
          <p className="text-4xl mb-4">🔍</p>
          <p className="font-bold text-[var(--am-text)] mb-2">Aucun cours trouvé</p>
          <p className="text-sm text-[var(--am-text-muted)]">
            Essayez un autre mot-clé ou changez les filtres.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((course) => (
            <a key={course.id} href={`/courses/${course.slug}`} className="block group">
              <CourseCard
                title={course.title}
                description={course.description}
                level={course.schoolLevel as any}
                subject={course.subject as any}
                difficulty={course.difficulty}
                lessons={course.lessons.length}
                icon={course.thumbnailEmoji}
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={null}>
      <CoursesContent />
    </Suspense>
  );
}
