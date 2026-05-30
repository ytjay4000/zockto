export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      admins: {
        Row: {
          created_at: string | null
          email: string
          id: string
          is_active: boolean | null
          name: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          is_active?: boolean | null
          name: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          is_active?: boolean | null
          name?: string
          user_id?: string | null
        }
        Relationships: []
      }
      ai_settings: {
        Row: {
          ai_enabled: boolean | null
          cooldown_until: string | null
          created_at: string | null
          followups_enabled: boolean | null
          id: string
          last_ai_reply_at: string | null
          lead_id: string | null
        }
        Insert: {
          ai_enabled?: boolean | null
          cooldown_until?: string | null
          created_at?: string | null
          followups_enabled?: boolean | null
          id?: string
          last_ai_reply_at?: string | null
          lead_id?: string | null
        }
        Update: {
          ai_enabled?: boolean | null
          cooldown_until?: string | null
          created_at?: string | null
          followups_enabled?: boolean | null
          id?: string
          last_ai_reply_at?: string | null
          lead_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_settings_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: true
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      call_records: {
        Row: {
          admin_id: string | null
          created_at: string
          id: string
          lead_id: string
          notes: string | null
          screenshot_url: string
        }
        Insert: {
          admin_id?: string | null
          created_at?: string
          id?: string
          lead_id: string
          notes?: string | null
          screenshot_url: string
        }
        Update: {
          admin_id?: string | null
          created_at?: string
          id?: string
          lead_id?: string
          notes?: string | null
          screenshot_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "call_records_admin_id_fkey"
            columns: ["admin_id"]
            isOneToOne: false
            referencedRelation: "admins"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "call_records_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      conversations: {
        Row: {
          created_at: string | null
          id: string
          is_open: boolean | null
          last_message_id: string | null
          lead_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_open?: boolean | null
          last_message_id?: string | null
          lead_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_open?: boolean | null
          last_message_id?: string | null
          lead_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "conversations_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      demo_bookings: {
        Row: {
          booking_link: string | null
          created_at: string | null
          id: string
          lead_id: string | null
          meeting_date: string | null
          meeting_status: string | null
        }
        Insert: {
          booking_link?: string | null
          created_at?: string | null
          id?: string
          lead_id?: string | null
          meeting_date?: string | null
          meeting_status?: string | null
        }
        Update: {
          booking_link?: string | null
          created_at?: string | null
          id?: string
          lead_id?: string | null
          meeting_date?: string | null
          meeting_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "demo_bookings_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_status_history: {
        Row: {
          changed_by: string
          created_at: string | null
          id: string
          lead_id: string | null
          new_status: string
          note: string | null
          old_status: string | null
        }
        Insert: {
          changed_by: string
          created_at?: string | null
          id?: string
          lead_id?: string | null
          new_status: string
          note?: string | null
          old_status?: string | null
        }
        Update: {
          changed_by?: string
          created_at?: string | null
          id?: string
          lead_id?: string | null
          new_status?: string
          note?: string | null
          old_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lead_status_history_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          ai_enabled: boolean | null
          assigned_admin_id: string | null
          assigned_to: string | null
          call_count: number
          core_memory: string | null
          country_code: string | null
          created_at: string | null
          demo_sent: boolean
          followup_step: number | null
          id: string
          last_message_at: string | null
          lead_type: string
          lead_type_confidence: string
          phone_number: string
          source: string | null
          state: Json | null
          tutorial_sent: boolean
          website_sent: boolean
        }
        Insert: {
          ai_enabled?: boolean | null
          assigned_admin_id?: string | null
          assigned_to?: string | null
          call_count?: number
          core_memory?: string | null
          country_code?: string | null
          created_at?: string | null
          demo_sent?: boolean
          followup_step?: number | null
          id?: string
          last_message_at?: string | null
          lead_type?: string
          lead_type_confidence?: string
          phone_number: string
          source?: string | null
          state?: Json | null
          tutorial_sent?: boolean
          website_sent?: boolean
        }
        Update: {
          ai_enabled?: boolean | null
          assigned_admin_id?: string | null
          assigned_to?: string | null
          call_count?: number
          core_memory?: string | null
          country_code?: string | null
          created_at?: string | null
          demo_sent?: boolean
          followup_step?: number | null
          id?: string
          last_message_at?: string | null
          lead_type?: string
          lead_type_confidence?: string
          phone_number?: string
          source?: string | null
          state?: Json | null
          tutorial_sent?: boolean
          website_sent?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "leads_assigned_admin_id_fkey"
            columns: ["assigned_admin_id"]
            isOneToOne: false
            referencedRelation: "admins"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          content: string | null
          conversation_id: string | null
          created_at: string | null
          direction: string
          id: string
          media_url: string | null
          merge: boolean | null
          message_type: string
          sender_admin_id: string | null
          sender_type: string
          whatsapp_message_id: string | null
        }
        Insert: {
          content?: string | null
          conversation_id?: string | null
          created_at?: string | null
          direction: string
          id?: string
          media_url?: string | null
          merge?: boolean | null
          message_type?: string
          sender_admin_id?: string | null
          sender_type: string
          whatsapp_message_id?: string | null
        }
        Update: {
          content?: string | null
          conversation_id?: string | null
          created_at?: string | null
          direction?: string
          id?: string
          media_url?: string | null
          merge?: boolean | null
          message_type?: string
          sender_admin_id?: string | null
          sender_type?: string
          whatsapp_message_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_sender_admin_id_fkey"
            columns: ["sender_admin_id"]
            isOneToOne: false
            referencedRelation: "admins"
            referencedColumns: ["id"]
          },
        ]
      }
      sample_video_data: {
        Row: {
          category: string | null
          country: string | null
          created_at: string
          description: string | null
          duration: number | null
          id: number
          language: string | null
          link: string | null
          type: string | null
        }
        Insert: {
          category?: string | null
          country?: string | null
          created_at?: string
          description?: string | null
          duration?: number | null
          id?: number
          language?: string | null
          link?: string | null
          type?: string | null
        }
        Update: {
          category?: string | null
          country?: string | null
          created_at?: string
          description?: string | null
          duration?: number | null
          id?: number
          language?: string | null
          link?: string | null
          type?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "agent"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "agent"],
    },
  },
} as const
