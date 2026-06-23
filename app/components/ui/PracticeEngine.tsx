"use client";
import React, { useState, useTransition, useMemo } from "react";
import { submitExerciseAnswer } from "../../actions/exercise";
import { MathContent } from "./MathContent";
import type { FlatExercise } from "../../../lib/seed-data";

const DIFFICULTIES = [
  { id: "all",           label: "Tous",          xp: null },
  { id: "debutant",      label: "Débutant",      xp: 10 },
  { id: "intermediaire", label: "Intermédiaire", xp: 25 },
  { id: "expert",        label: "Expert",        xp: 50 },
] as const;

const DIFF_COLORS: Record<string, { color: string; bg: string; border: string }> = {
  debutant:      { color: "var(--am-green)",  bg: "var(--am-green-muted)",  border: "var(--am-green-dim)" },
  intermediaire: { color: "var(--am-amber)",  bg: "var(--am-amber-muted)",  border: "rgba(245,158,11,0.3)" },
  expert:        { color: "#f87171",           bg: "rgba(239,68,68,0.1)",    border: "rgba(239,68,68,0.25)" },
};

interface Session {
  correct: number;
  wrong: number;
  xpEarned: number;
  answeredIds: Set<string>;
}

interface Props {
  exercises: FlatExercise[];
  isAuthenticated: boolean;
}

export function PracticeEngine({ exercises, isAuthenticated }: Props) {
  const [diffFilter,    setDiffFilter]    = useState<string>("all");
  const [levelFilter,   setLevelFilter]   = useState<string>("all");
  const [currentIndex,  setCurrentIndex]  = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [openText,      setOpenText]      = useState("");
  const [isRevealed,    setIsRevealed]    = useState(false);
  const [session, setSession] = useState<Session>({
    correct: 0, wrong: 0, xpEarned: 0, answeredIds: new Set(),
  });
  const [isPending, startTransition] = useTransition();

  const filtered = useMemo(() => {
    return exercises.filter((ex) => {
      if (diffFilter !== "all" && ex.difficulty !== diffFilter) return false;
      if (levelFilter !== "all" && ex.schoolLevel !== levelFilter) return false;
      return true;
    });
  }, [exercises, diffFilter, levelFilter]);

  const levels   = Array.from(new Set(exercises.map((e) => e.schoolLevel)));

  const safeIndex  = Math.min(currentIndex, filtered.length - 1);
  const exercise   = filtered[safeIndex];
  const isAnswered = exercise ? session.answeredIds.has(exercise.id) : false;
  const isCorrect  = exercise && isAnswered && exercise.type !== "open"
    ? selectedAnswer === exercise.correctId
    : null;

  function resetAnswerState() {
    setSelectedAnswer(null);
    setOpenText("");
    setIsRevealed(false);
  }

  function handleChangeFilter(setter: (v: string) => void, value: string) {
    setter(value);
    setCurrentIndex(0);
    resetAnswerState();
  }

  function handleMCQAnswer(optionId: string) {
    if (!exercise || isAnswered) return;
    const correct = optionId === exercise.correctId;
    setSelectedAnswer(optionId);
    setSession((prev) => ({
      correct:     prev.correct  + (correct ? 1 : 0),
      wrong:       prev.wrong    + (correct ? 0 : 1),
      xpEarned:    prev.xpEarned + (correct ? exercise.xpReward : 0),
      answeredIds: new Set([...prev.answeredIds, exercise.id]),
    }));
    if (isAuthenticated) startTransition(() => submitExerciseAnswer(correct, exercise.difficulty));
  }

  function handleRevealOpen() {
    if (!exercise || isAnswered) return;
    setIsRevealed(true);
    setSession((prev) => ({
      correct:     prev.correct + 1,
      wrong:       prev.wrong,
      xpEarned:    prev.xpEarned + exercise.xpReward,
      answeredIds: new Set([...prev.answeredIds, exercise.id]),
    }));
    if (isAuthenticated) startTransition(() => submitExerciseAnswer(true, exercise.difficulty));
  }

  function goNext() {
    if (safeIndex < filtered.length - 1) { setCurrentIndex(safeIndex + 1); resetAnswerState(); }
  }
  function goPrev() {
    if (safeIndex > 0) { setCurrentIndex(safeIndex - 1); resetAnswerState(); }
  }

  const accuracy = session.correct + session.wrong > 0
    ? Math.round((session.correct / (session.correct + session.wrong)) * 100)
    : null;

  const diff = exercise ? DIFF_COLORS[exercise.difficulty] : null;

  const TYPE_LABEL: Record<string, string> = {
    mcq: "QCM", true_false: "Vrai / Faux", open: "Réponse libre",
  };

  return (
    <div>
      {/* ── XP per difficulty ── */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {DIFFICULTIES.filter((d) => d.id !== "all").map((d) => {
          const count = exercises.filter((e) => e.difficulty === d.id).length;
          const colors = DIFF_COLORS[d.id];
          const isActive = diffFilter === d.id;
          return (
            <button
              key={d.id}
              onClick={() => handleChangeFilter(setDiffFilter, isActive ? "all" : d.id)}
              className="rounded-[var(--am-radius-xl)] p-4 flex flex-col gap-1 text-left transition-all hover:-translate-y-0.5"
              style={{
                background: colors.bg,
                border: `1px solid ${isActive ? colors.color : colors.border}`,
                boxShadow: isActive ? `0 0 0 1px ${colors.color}` : "none",
              }}
            >
              <span className="text-xs font-bold" style={{ color: colors.color }}>{d.label}</span>
              <span className="text-xl font-black" style={{ color: colors.color }}>+{d.xp} XP</span>
              <span className="text-xs" style={{ color: colors.color, opacity: 0.7 }}>{count} exercices</span>
            </button>
          );
        })}
      </div>

      {/* ── Session stats ── */}
      {(session.correct + session.wrong > 0) && (
        <div
          className="flex flex-wrap items-center gap-4 px-5 py-3 rounded-[var(--am-radius-xl)] mb-6 text-sm font-semibold"
          style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)" }}
        >
          <span style={{ color: "var(--am-green)" }}>✓ {session.correct} correcte{session.correct !== 1 ? "s" : ""}</span>
          <span style={{ color: "#f87171" }}>✗ {session.wrong} erreur{session.wrong !== 1 ? "s" : ""}</span>
          {accuracy !== null && <span style={{ color: "var(--am-text-muted)" }}>{accuracy}% précision</span>}
          {session.xpEarned > 0 && (
            <span className="ml-auto px-3 py-1 rounded-full text-xs"
              style={{ background: "var(--am-amber-muted)", color: "var(--am-amber)", border: "1px solid rgba(245,158,11,0.3)" }}>
              ⭐ +{session.xpEarned} XP
            </span>
          )}
        </div>
      )}

      {/* ── Filters ── */}
      <div className="flex flex-wrap gap-3 mb-6">
        {/* Difficulty */}
        <div className="flex gap-1.5 flex-wrap">
          {DIFFICULTIES.map((d) => (
            <button key={d.id} onClick={() => handleChangeFilter(setDiffFilter, d.id)}
              className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
              style={{
                background: diffFilter === d.id ? (d.id !== "all" ? DIFF_COLORS[d.id]?.bg : "var(--am-bg-elevated)") : "var(--am-bg-card)",
                color: diffFilter === d.id ? (d.id !== "all" ? DIFF_COLORS[d.id]?.color : "var(--am-text)") : "var(--am-text-muted)",
                border: diffFilter === d.id
                  ? `1px solid ${d.id !== "all" ? DIFF_COLORS[d.id]?.border : "var(--am-border-strong)"}`
                  : "1px solid var(--am-border)",
              }}>
              {d.label}{d.xp !== null ? ` +${d.xp}XP` : ""}
            </button>
          ))}
        </div>
        {/* Level */}
        <div className="flex gap-1.5 flex-wrap">
          <button onClick={() => handleChangeFilter(setLevelFilter, "all")}
            className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
            style={{
              background: levelFilter === "all" ? "var(--am-bg-elevated)" : "var(--am-bg-card)",
              color:      levelFilter === "all" ? "var(--am-text)" : "var(--am-text-muted)",
              border:     levelFilter === "all" ? "1px solid var(--am-border-strong)" : "1px solid var(--am-border)",
            }}>
            Tous niveaux
          </button>
          {levels.map((lvl) => (
            <button key={lvl} onClick={() => handleChangeFilter(setLevelFilter, lvl)}
              className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
              style={{
                background: levelFilter === lvl ? "var(--am-purple-muted)" : "var(--am-bg-card)",
                color:      levelFilter === lvl ? "var(--am-purple)" : "var(--am-text-muted)",
                border:     levelFilter === lvl ? "1px solid rgba(139,92,246,0.3)" : "1px solid var(--am-border)",
              }}>
              {lvl.replace("eme", "ème").replace("ere", "ère")}
            </button>
          ))}
        </div>
      </div>

      {/* ── Empty state ── */}
      {filtered.length === 0 && (
        <div className="rounded-[var(--am-radius-xl)] p-12 text-center"
          style={{ background: "var(--am-bg-card)", border: "1px dashed var(--am-border)" }}>
          <p className="text-3xl mb-3">🔍</p>
          <p className="font-bold text-[var(--am-text)]">Aucun exercice trouvé</p>
          <p className="text-sm mt-1" style={{ color: "var(--am-text-muted)" }}>Modifiez les filtres pour voir des exercices.</p>
        </div>
      )}

      {/* ── Exercise card ── */}
      {exercise && (
        <div>
          {/* Counter + meta */}
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ background: diff?.bg, color: diff?.color, border: `1px solid ${diff?.border}` }}>
                {exercise.difficulty === "debutant" ? "Débutant" : exercise.difficulty === "intermediaire" ? "Intermédiaire" : "Expert"}
                {" · "}+{exercise.xpReward} XP
              </span>
              <span className="text-xs px-2 py-1 rounded-full font-medium"
                style={{ background: "var(--am-bg-elevated)", color: "var(--am-text-muted)", border: "1px solid var(--am-border)" }}>
                {TYPE_LABEL[exercise.type] ?? exercise.type}
              </span>
              <span className="text-xs" style={{ color: "var(--am-text-muted)" }}>
                {exercise.courseTitle} · {exercise.lessonTitle}
              </span>
            </div>
            <span className="text-xs font-semibold tabular-nums" style={{ color: "var(--am-text-muted)" }}>
              {safeIndex + 1} / {filtered.length}
            </span>
          </div>

          {/* Question card */}
          <div className="rounded-[var(--am-radius-xl)] p-6 mb-4"
            style={{
              background: "var(--am-bg-card)",
              border: `1px solid ${isAnswered
                ? (exercise.type === "open" ? "var(--am-purple)" : isCorrect ? "var(--am-green-dim)" : "rgba(239,68,68,0.3)")
                : "var(--am-border)"}`,
              transition: "border-color 0.3s",
            }}>
            <div className="text-[var(--am-text)] font-medium leading-relaxed mb-6">
              <MathContent content={exercise.question} />
            </div>

            {/* ── MCQ options ── */}
            {exercise.type === "mcq" && exercise.options && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {exercise.options.map((opt) => {
                  const isSelected   = selectedAnswer === opt.id;
                  const isCorrectOpt = opt.id === exercise.correctId;
                  let optStyle: React.CSSProperties = {
                    background: "var(--am-bg-elevated)",
                    border:     "1px solid var(--am-border)",
                    color:      "var(--am-text-secondary)",
                    cursor:     isAnswered ? "default" : "pointer",
                  };
                  if (isAnswered) {
                    if (isCorrectOpt)    optStyle = { ...optStyle, background: "var(--am-green-muted)", border: "1px solid var(--am-green-dim)", color: "var(--am-green)", cursor: "default" };
                    else if (isSelected) optStyle = { ...optStyle, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", color: "#f87171", cursor: "default" };
                    else                 optStyle = { ...optStyle, opacity: 0.35, cursor: "default" };
                  }
                  return (
                    <button key={opt.id} onClick={() => handleMCQAnswer(opt.id)} disabled={isAnswered}
                      className="rounded-[var(--am-radius-lg)] p-4 text-left flex items-center gap-3 transition-all duration-200 hover:border-[var(--am-border-strong)] disabled:cursor-default"
                      style={optStyle}>
                      <span className="size-8 rounded-[var(--am-radius-md)] flex items-center justify-center text-sm font-bold flex-shrink-0"
                        style={{ background: "var(--am-bg-overlay)", color: "var(--am-text-secondary)" }}>
                        {opt.id}
                      </span>
                      <span className="text-sm font-medium"><MathContent content={opt.text} /></span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* ── Vrai / Faux ── */}
            {exercise.type === "true_false" && exercise.options && (
              <div className="grid grid-cols-2 gap-4">
                {exercise.options.map((opt) => {
                  const isSelected   = selectedAnswer === opt.id;
                  const isCorrectOpt = opt.id === exercise.correctId;
                  let style: React.CSSProperties = {
                    padding: "1.25rem",
                    borderRadius: "var(--am-radius-lg)",
                    border: "2px solid var(--am-border)",
                    background: "var(--am-bg-elevated)",
                    color: "var(--am-text-secondary)",
                    fontSize: "1rem",
                    fontWeight: "700",
                    cursor: isAnswered ? "default" : "pointer",
                    transition: "all 0.2s",
                  };
                  if (isAnswered) {
                    if (isCorrectOpt)    style = { ...style, background: "var(--am-green-muted)", border: "2px solid var(--am-green)", color: "var(--am-green)" };
                    else if (isSelected) style = { ...style, background: "rgba(239,68,68,0.1)", border: "2px solid rgba(239,68,68,0.5)", color: "#f87171" };
                    else                 style = { ...style, opacity: 0.3 };
                  }
                  const icon = opt.id === "vrai" ? "✓" : "✗";
                  return (
                    <button key={opt.id} onClick={() => handleMCQAnswer(opt.id)} disabled={isAnswered} style={style}>
                      <span className="text-2xl block mb-1">{icon}</span>
                      {opt.text}
                    </button>
                  );
                })}
              </div>
            )}

            {/* ── Réponse libre ── */}
            {exercise.type === "open" && (
              <div className="flex flex-col gap-4">
                <textarea
                  value={openText}
                  onChange={(e) => setOpenText(e.target.value)}
                  disabled={isAnswered}
                  placeholder="Écris ta réponse ici…"
                  rows={4}
                  className="w-full rounded-[var(--am-radius-lg)] p-4 text-sm resize-none transition-all"
                  style={{
                    background: "var(--am-bg-elevated)",
                    border: "1px solid var(--am-border)",
                    color: "var(--am-text)",
                    outline: "none",
                    opacity: isAnswered ? 0.6 : 1,
                  }}
                />
                {!isAnswered && (
                  <button onClick={handleRevealOpen}
                    className="self-start px-5 py-2.5 rounded-[var(--am-radius-md)] text-sm font-semibold transition-all hover:opacity-90"
                    style={{ background: "var(--am-purple)", color: "#fff" }}>
                    Voir la correction → +{exercise.xpReward} XP
                  </button>
                )}
              </div>
            )}

            {/* ── Feedback ── */}
            {isAnswered && (
              <div className="mt-5 pt-5 flex flex-col gap-3"
                style={{ borderTop: "1px solid var(--am-border-subtle)" }}>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  {exercise.type === "open" ? (
                    <p className="text-sm font-bold" style={{ color: "var(--am-purple)" }}>
                      📖 Correction révélée · +{exercise.xpReward} XP
                    </p>
                  ) : (
                    <p className="text-sm font-bold"
                      style={{ color: isCorrect ? "var(--am-green)" : "#f87171" }}>
                      {isCorrect ? `✓ Bonne réponse ! +${exercise.xpReward} XP` : "✗ Incorrect — la bonne réponse est surlignée."}
                    </p>
                  )}
                  {isPending && <span className="text-xs" style={{ color: "var(--am-text-muted)" }}>Enregistrement…</span>}
                </div>

                {/* Model answer for open questions */}
                {exercise.type === "open" && exercise.modelAnswer && (
                  <div className="rounded-[var(--am-radius-md)] p-4 text-sm"
                    style={{ background: "rgba(139,92,246,0.06)", border: "1px solid rgba(139,92,246,0.2)", color: "var(--am-text-secondary)" }}>
                    <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--am-purple)" }}>
                      Corrigé complet
                    </p>
                    <MathContent content={exercise.modelAnswer} />
                  </div>
                )}

                {/* Explanation */}
                {exercise.explanation && (
                  <div className="rounded-[var(--am-radius-md)] px-4 py-3 text-sm"
                    style={{ background: "var(--am-bg-elevated)", border: "1px solid var(--am-border)", color: "var(--am-text-secondary)" }}>
                    <span className="font-semibold" style={{ color: "var(--am-text)" }}>
                      {exercise.type === "open" ? "💡 Astuce : " : "Explication : "}
                    </span>
                    <MathContent content={exercise.explanation} />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-4">
            <button onClick={goPrev} disabled={safeIndex === 0}
              className="flex items-center gap-2 px-4 py-2 rounded-[var(--am-radius-md)] text-sm font-medium transition-all disabled:opacity-30"
              style={{ background: "var(--am-bg-card)", border: "1px solid var(--am-border)", color: "var(--am-text-secondary)" }}>
              ← Précédent
            </button>

            {safeIndex < filtered.length - 1 ? (
              <button onClick={goNext}
                className="flex items-center gap-2 px-5 py-2 rounded-[var(--am-radius-md)] text-sm font-semibold transition-all hover:opacity-90"
                style={{
                  background: isAnswered ? "var(--am-green)" : "var(--am-bg-elevated)",
                  color:      isAnswered ? "var(--am-text-inverse)" : "var(--am-text-secondary)",
                  border:     isAnswered ? "none" : "1px solid var(--am-border)",
                  boxShadow:  isAnswered ? "0 0 14px rgba(74,254,138,0.3)" : "none",
                }}>
                {isAnswered ? "Exercice suivant →" : "Passer →"}
              </button>
            ) : (
              <div className="flex items-center gap-2 px-4 py-2 rounded-[var(--am-radius-md)] text-sm font-semibold"
                style={{ background: "var(--am-green-muted)", color: "var(--am-green)", border: "1px solid var(--am-green-dim)" }}>
                ✓ Fin de la série
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── End of session ── */}
      {filtered.length > 0 && session.answeredIds.size === filtered.length && (
        <div className="mt-6 rounded-[var(--am-radius-xl)] p-8 text-center"
          style={{ background: "linear-gradient(135deg, var(--am-green-muted), var(--am-bg-card))", border: "1px solid var(--am-green-dim)" }}>
          <p className="text-4xl mb-3">🎉</p>
          <h3 className="text-xl font-black text-[var(--am-text)] mb-1">Session terminée !</h3>
          <p className="text-sm mb-4" style={{ color: "var(--am-text-secondary)" }}>
            {session.correct} / {filtered.length} correctes · {accuracy}% précision
            {session.xpEarned > 0 && ` · +${session.xpEarned} XP gagnés`}
          </p>
          <button
            onClick={() => { setCurrentIndex(0); resetAnswerState(); setSession({ correct: 0, wrong: 0, xpEarned: 0, answeredIds: new Set() }); }}
            className="px-6 py-2.5 rounded-[var(--am-radius-md)] text-sm font-semibold transition-all hover:opacity-90"
            style={{ background: "var(--am-green)", color: "var(--am-text-inverse)" }}>
            Recommencer →
          </button>
        </div>
      )}
    </div>
  );
}
