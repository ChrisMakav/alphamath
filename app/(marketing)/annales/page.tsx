"use client";
import React, { useMemo, useState } from "react";
import { ExamCard } from "../../components/ui/ExamCard";
import { FilterBar } from "../../components/ui/FilterBar";
import { SearchInput } from "../../components/ui/SearchInput";
import {
  EXAM_PAPERS,
  EXAM_TYPE_LABELS,
  INSTITUTION_LABELS,
  getExamYears,
  getInstitutionsForType,
  type ExamType,
  type Institution,
} from "../../../lib/exams-data";

const TYPE_OPTIONS = [
  { id: "all", label: "Tous les types" },
  ...(Object.keys(EXAM_TYPE_LABELS) as ExamType[]).map((id) => ({ id, label: EXAM_TYPE_LABELS[id] })),
];

export default function AnnalesPage() {
  const [search, setSearch] = useState("");
  const [examType, setExamType] = useState<"all" | ExamType>("all");
  const [year, setYear] = useState("all");
  const [institution, setInstitution] = useState<"all" | Institution>("all");

  const yearOptions = useMemo(
    () => [{ id: "all", label: "Toutes les années" }, ...getExamYears().map((y) => ({ id: String(y), label: String(y) }))],
    []
  );

  const institutionOptions = useMemo(
    () => [
      { id: "all", label: "Toutes les écoles" },
      ...getInstitutionsForType("concours").map((id) => ({ id, label: INSTITUTION_LABELS[id] })),
    ],
    []
  );

  function handleTypeChange(id: string) {
    setExamType(id as "all" | ExamType);
    if (id !== "concours") setInstitution("all");
  }

  const filtered = useMemo(() => {
    return EXAM_PAPERS.filter((exam) => {
      const matchSearch =
        search === "" ||
        exam.title.toLowerCase().includes(search.toLowerCase()) ||
        Boolean(exam.epreuve?.toLowerCase().includes(search.toLowerCase())) ||
        Boolean(exam.tags?.some((t) => t.toLowerCase().includes(search.toLowerCase())));
      const matchType = examType === "all" || exam.examType === examType;
      const matchYear = year === "all" || String(exam.year) === year;
      const matchInstitution =
        examType !== "concours" || institution === "all" || exam.institution === institution;
      return matchSearch && matchType && matchYear && matchInstitution;
    });
  }, [search, examType, year, institution]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--am-purple)" }}>
          ANNALES
        </p>
        <h1 className="text-4xl font-black text-[var(--am-text)] mb-3">Sujets d&apos;examens</h1>
        <p className="text-[var(--am-text-secondary)] max-w-xl">
          Brevet, Baccalauréat et concours de grandes écoles : consultez et imprimez de vrais sujets de
          mathématiques des années précédentes, avec leurs corrigés.
        </p>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col gap-4 mb-8">
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Rechercher un sujet (ex : fonctions, probabilités...)"
          className="max-w-lg"
        />
        <FilterBar label="Type" options={TYPE_OPTIONS} value={examType} onChange={handleTypeChange} />
        <FilterBar label="Année" options={yearOptions} value={year} onChange={setYear} />
        {examType === "concours" && (
          <FilterBar
            label="École"
            options={institutionOptions}
            value={institution}
            onChange={(v) => setInstitution(v as "all" | Institution)}
          />
        )}
      </div>

      {/* Results count */}
      <p className="text-sm mb-6" style={{ color: "var(--am-text-muted)" }}>
        {filtered.length} sujet{filtered.length !== 1 ? "s" : ""}
        {examType !== "all" && ` · ${EXAM_TYPE_LABELS[examType]}`}
        {year !== "all" && ` · ${year}`}
        {institution !== "all" && ` · ${INSTITUTION_LABELS[institution]}`}
        {search && ` · Recherche : "${search}"`}
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div
          className="py-20 text-center rounded-[var(--am-radius-2xl)]"
          style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
        >
          <p className="text-4xl mb-4">🔍</p>
          <p className="font-bold text-[var(--am-text)] mb-2">Aucun sujet trouvé</p>
          <p className="text-sm text-[var(--am-text-muted)]">Essayez un autre mot-clé ou changez les filtres.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((exam) => (
            <a key={exam.id} href={`/annales/${exam.id}`} className="block group">
              <ExamCard exam={exam} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
