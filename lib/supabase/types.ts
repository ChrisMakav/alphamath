export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          role: "student" | "teacher" | "parent" | "admin";
          name: string | null;
          school_level: string | null;
          xp: number;
          streak: number;
          streak_last_date: string | null;
          avatar_url: string | null;
          created_at: string;
        };
        Insert: {
          id: string;
          role?: "student" | "teacher" | "parent" | "admin";
          name?: string | null;
          school_level?: string | null;
          xp?: number;
          streak?: number;
          streak_last_date?: string | null;
          avatar_url?: string | null;
        };
        Update: {
          role?: "student" | "teacher" | "parent" | "admin";
          name?: string | null;
          school_level?: string | null;
          xp?: number;
          streak?: number;
          streak_last_date?: string | null;
          avatar_url?: string | null;
        };
      };
      enrollments: {
        Row: { user_id: string; course_slug: string; enrolled_at: string };
        Insert: { user_id: string; course_slug: string };
        Update: Record<string, never>;
      };
      user_progress: {
        Row: {
          id: string;
          user_id: string;
          course_slug: string;
          lesson_slug: string;
          completed: boolean;
          score: number | null;
          time_spent_seconds: number;
          attempts: number;
          completed_at: string | null;
        };
        Insert: {
          user_id: string;
          course_slug: string;
          lesson_slug: string;
          completed?: boolean;
          score?: number | null;
          time_spent_seconds?: number;
          attempts?: number;
          completed_at?: string | null;
        };
        Update: {
          completed?: boolean;
          score?: number | null;
          time_spent_seconds?: number;
          attempts?: number;
          completed_at?: string | null;
        };
      };
      daily_activity: {
        Row: {
          user_id: string;
          date: string;
          minutes_studied: number;
          exercises_done: number;
          xp_earned: number;
        };
        Insert: {
          user_id: string;
          date: string;
          minutes_studied?: number;
          exercises_done?: number;
          xp_earned?: number;
        };
        Update: {
          minutes_studied?: number;
          exercises_done?: number;
          xp_earned?: number;
        };
      };
    };
  };
}
