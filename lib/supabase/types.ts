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
          stripe_customer_id: string | null;
          stripe_subscription_id: string | null;
          is_premium: boolean;
          premium_status: string | null;
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
          stripe_customer_id?: string | null;
          stripe_subscription_id?: string | null;
          is_premium?: boolean;
          premium_status?: string | null;
        };
        Update: {
          role?: "student" | "teacher" | "parent" | "admin";
          name?: string | null;
          school_level?: string | null;
          xp?: number;
          streak?: number;
          streak_last_date?: string | null;
          avatar_url?: string | null;
          stripe_customer_id?: string | null;
          stripe_subscription_id?: string | null;
          is_premium?: boolean;
          premium_status?: string | null;
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
      evaluations: {
        Row: {
          id: string;
          user_id: string;
          school_level: string;
          title: string;
          course_slugs: string[];
          notions: string[];
          content: Json;
          model: string;
          created_at: string;
        };
        Insert: {
          user_id: string;
          school_level: string;
          title: string;
          course_slugs: string[];
          notions: string[];
          content: Json;
          model?: string;
        };
        Update: Record<string, never>;
      };
      contact_requests: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          subject: string;
          message: string;
          status: "new" | "treated";
          created_at: string;
        };
        Insert: {
          name: string;
          email: string;
          phone?: string | null;
          subject: string;
          message: string;
        };
        Update: {
          status?: "new" | "treated";
        };
      };
    };
  };
}
