"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { createClient } from "../../lib/supabase/client";
import { useRouter } from "next/navigation";

// Durée d'inactivité avant déconnexion (15 min)
const INACTIVITY_TIMEOUT_MS = 15 * 60 * 1000;
// Avertissement avant déconnexion (2 min avant)
const WARNING_BEFORE_MS = 2 * 60 * 1000;

const ACTIVITY_EVENTS = ["mousemove", "mousedown", "keydown", "touchstart", "scroll", "click"];

export function SessionGuard() {
  const router = useRouter();
  const supabase = createClient();
  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const warningTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [showWarning, setShowWarning] = useState(false);
  const [countdown, setCountdown] = useState(WARNING_BEFORE_MS / 1000);
  const countdownInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimers = useCallback(() => {
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    if (warningTimer.current) clearTimeout(warningTimer.current);
    if (countdownInterval.current) clearInterval(countdownInterval.current);
  }, []);

  const signOut = useCallback(async () => {
    clearTimers();
    setShowWarning(false);
    await supabase.auth.signOut();
    router.push("/login?reason=inactivity");
  }, [supabase, router, clearTimers]);

  const resetTimers = useCallback(() => {
    clearTimers();
    setShowWarning(false);

    warningTimer.current = setTimeout(() => {
      setShowWarning(true);
      setCountdown(WARNING_BEFORE_MS / 1000);

      countdownInterval.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            if (countdownInterval.current) clearInterval(countdownInterval.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }, INACTIVITY_TIMEOUT_MS - WARNING_BEFORE_MS);

    inactivityTimer.current = setTimeout(signOut, INACTIVITY_TIMEOUT_MS);
  }, [clearTimers, signOut]);

  const stayConnected = useCallback(() => {
    resetTimers();
  }, [resetTimers]);

  useEffect(() => {
    resetTimers();

    const handleActivity = () => {
      if (!showWarning) resetTimers();
    };

    ACTIVITY_EVENTS.forEach((event) =>
      window.addEventListener(event, handleActivity, { passive: true })
    );

    return () => {
      clearTimers();
      ACTIVITY_EVENTS.forEach((event) =>
        window.removeEventListener(event, handleActivity)
      );
    };
  }, [resetTimers, clearTimers, showWarning]);

  if (!showWarning) return null;

  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;
  const countdownLabel = minutes > 0
    ? `${minutes}m ${seconds.toString().padStart(2, "0")}s`
    : `${seconds}s`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="session-warning-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4 text-center">
        <div className="text-4xl mb-4">⏱️</div>
        <h2
          id="session-warning-title"
          className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2"
        >
          Session inactive
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-1 text-sm">
          Vous allez être déconnecté automatiquement dans
        </p>
        <p className="text-3xl font-bold text-red-500 mb-6 tabular-nums">
          {countdownLabel}
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={stayConnected}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-xl transition-colors"
          >
            Rester connecté
          </button>
          <button
            onClick={signOut}
            className="flex-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium py-2.5 px-4 rounded-xl transition-colors"
          >
            Se déconnecter
          </button>
        </div>
      </div>
    </div>
  );
}
