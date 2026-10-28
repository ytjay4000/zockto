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
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
      ad_generation_events: {
        Row: {
          details: Json
          event: string
          id: string
          occurred_at: string
          request_id: string
          stage: string
          status: string
        }
        Insert: {
          details?: Json
          event: string
          id?: string
          occurred_at?: string
          request_id: string
          stage: string
          status: string
        }
        Update: {
          details?: Json
          event?: string
          id?: string
          occurred_at?: string
          request_id?: string
          stage?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "ad_generation_events_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "ad_generation_jobs"
            referencedColumns: ["request_id"]
          },
        ]
      }
      ad_generation_jobs: {
        Row: {
          attempts: number
          available_at: string
          context: Json
          created_at: string
          cursor: number
          data: Json
          diagnostic: Json | null
          error: string | null
          kind: string
          lease_expires_at: string | null
          lease_id: string | null
          payload: Json
          request_id: string
          result: Json | null
          retries: number
          stage: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          attempts?: number
          available_at?: string
          context: Json
          created_at?: string
          cursor?: number
          data?: Json
          diagnostic?: Json | null
          error?: string | null
          kind: string
          lease_expires_at?: string | null
          lease_id?: string | null
          payload: Json
          request_id: string
          result?: Json | null
          retries?: number
          stage: string
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          attempts?: number
          available_at?: string
          context?: Json
          created_at?: string
          cursor?: number
          data?: Json
          diagnostic?: Json | null
          error?: string | null
          kind?: string
          lease_expires_at?: string | null
          lease_id?: string | null
          payload?: Json
          request_id?: string
          result?: Json | null
          retries?: number
          stage?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      ad_generation_prompt_versions: {
        Row: {
          content: string
          created_at: string
          created_by: string | null
          key: string
          version: number
        }
        Insert: {
          content: string
          created_at?: string
          created_by?: string | null
          key: string
          version: number
        }
        Update: {
          content?: string
          created_at?: string
          created_by?: string | null
          key?: string
          version?: number
        }
        Relationships: []
      }
      ad_generation_prompts: {
        Row: {
          key: string
          updated_at: string
          updated_by: string | null
          version: number
        }
        Insert: {
          key: string
          updated_at?: string
          updated_by?: string | null
          version: number
        }
        Update: {
          key?: string
          updated_at?: string
          updated_by?: string | null
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "ad_generation_prompts_key_version_fkey"
            columns: ["key", "version"]
            isOneToOne: false
            referencedRelation: "ad_generation_prompt_versions"
            referencedColumns: ["key", "version"]
          },
        ]
      }
      ad_generation_worker_config: {
        Row: {
          enabled: boolean
          function_url: string
          id: boolean
          max_concurrency: number
          token_hash: string
        }
        Insert: {
          enabled?: boolean
          function_url: string
          id?: boolean
          max_concurrency?: number
          token_hash: string
        }
        Update: {
          enabled?: boolean
          function_url?: string
          id?: boolean
          max_concurrency?: number
          token_hash?: string
        }
        Relationships: []
      }
      admin_feedback: {
        Row: {
          added_by: string | null
          category: string
          created_at: string
          id: string
          notes: string
          priority: string
          problem_id: string | null
          reported_user_id: string | null
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          added_by?: string | null
          category?: string
          created_at?: string
          id?: string
          notes?: string
          priority?: string
          problem_id?: string | null
          reported_user_id?: string | null
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          added_by?: string | null
          category?: string
          created_at?: string
          id?: string
          notes?: string
          priority?: string
          problem_id?: string | null
          reported_user_id?: string | null
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      admin_problems: {
        Row: {
          action_notes: string
          affected_users_count: number
          assigned_to: string | null
          created_at: string
          created_by: string | null
          description: string
          id: string
          severity: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          action_notes?: string
          affected_users_count?: number
          assigned_to?: string | null
          created_at?: string
          created_by?: string | null
          description?: string
          id?: string
          severity?: string
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          action_notes?: string
          affected_users_count?: number
          assigned_to?: string | null
          created_at?: string
          created_by?: string | null
          description?: string
          id?: string
          severity?: string
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      admin_product_logs: {
        Row: {
          change_type: string
          created_at: string
          feedback_id: string | null
          id: string
          impact: string
          made_by: string | null
          problem_id: string | null
          release_date: string
          title: string
          updated_at: string
          what_changed: string
          why_changed: string
        }
        Insert: {
          change_type?: string
          created_at?: string
          feedback_id?: string | null
          id?: string
          impact?: string
          made_by?: string | null
          problem_id?: string | null
          release_date?: string
          title: string
          updated_at?: string
          what_changed?: string
          why_changed?: string
        }
        Update: {
          change_type?: string
          created_at?: string
          feedback_id?: string | null
          id?: string
          impact?: string
          made_by?: string | null
          problem_id?: string | null
          release_date?: string
          title?: string
          updated_at?: string
          what_changed?: string
          why_changed?: string
        }
        Relationships: []
      }
      admin_user_notes: {
        Row: {
          created_at: string
          id: string
          note: string
          updated_at: string
          updated_by: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          note?: string
          updated_at?: string
          updated_by?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          note?: string
          updated_at?: string
          updated_by?: string | null
          user_id?: string
        }
        Relationships: []
      }
      admin_video_actions: {
        Row: {
          action: string
          created_at: string
          id: string
          performed_by: string | null
          video_id: string
        }
        Insert: {
          action: string
          created_at?: string
          id?: string
          performed_by?: string | null
          video_id: string
        }
        Update: {
          action?: string
          created_at?: string
          id?: string
          performed_by?: string | null
          video_id?: string
        }
        Relationships: []
      }
      ai_brain_reports: {
        Row: {
          ai_brain_report: string | null
          brand_identity_report: string | null
          chat_history: Json | null
          created_at: string
          id: string
          is_completed: boolean | null
          super_consumer_profile: string | null
          updated_at: string
        }
        Insert: {
          ai_brain_report?: string | null
          brand_identity_report?: string | null
          chat_history?: Json | null
          created_at?: string
          id: string
          is_completed?: boolean | null
          super_consumer_profile?: string | null
          updated_at?: string
        }
        Update: {
          ai_brain_report?: string | null
          brand_identity_report?: string | null
          chat_history?: Json | null
          created_at?: string
          id?: string
          is_completed?: boolean | null
          super_consumer_profile?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      app_settings: {
        Row: {
          key: string
          updated_at: string
          value: string
        }
        Insert: {
          key: string
          updated_at?: string
          value: string
        }
        Update: {
          key?: string
          updated_at?: string
          value?: string
        }
        Relationships: []
      }
      bgmusic_dataset: {
        Row: {
          id: number | null
          music_type: string | null
          prompt: string | null
          urls: string | null
        }
        Insert: {
          id?: number | null
          music_type?: string | null
          prompt?: string | null
          urls?: string | null
        }
        Update: {
          id?: number | null
          music_type?: string | null
          prompt?: string | null
          urls?: string | null
        }
        Relationships: []
      }
      brand_memories: {
        Row: {
          ai_analysis: Json
          asset_urls: string[]
          business_name: string | null
          business_type: string | null
          category: string | null
          city: string | null
          contact_channels: Json
          created_at: string
          differentiators: string[]
          id: string
          logo_url: string | null
          onboarding_completed: boolean
          onboarding_skipped: boolean
          target_audiences: string[]
          tone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          ai_analysis?: Json
          asset_urls?: string[]
          business_name?: string | null
          business_type?: string | null
          category?: string | null
          city?: string | null
          contact_channels?: Json
          created_at?: string
          differentiators?: string[]
          id?: string
          logo_url?: string | null
          onboarding_completed?: boolean
          onboarding_skipped?: boolean
          target_audiences?: string[]
          tone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          ai_analysis?: Json
          asset_urls?: string[]
          business_name?: string | null
          business_type?: string | null
          category?: string | null
          city?: string | null
          contact_channels?: Json
          created_at?: string
          differentiators?: string[]
          id?: string
          logo_url?: string | null
          onboarding_completed?: boolean
          onboarding_skipped?: boolean
          target_audiences?: string[]
          tone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "brand_memories_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_rewards: {
        Row: {
          campaign_id: string
          created_at: string
          id: string
          original_phone: string
          redeemed_at: string | null
          reward_status: string
          user_id: string | null
        }
        Insert: {
          campaign_id: string
          created_at?: string
          id?: string
          original_phone: string
          redeemed_at?: string | null
          reward_status?: string
          user_id?: string | null
        }
        Update: {
          campaign_id?: string
          created_at?: string
          id?: string
          original_phone?: string
          redeemed_at?: string | null
          reward_status?: string
          user_id?: string | null
        }
        Relationships: []
      }
      campaigns: {
        Row: {
          active: boolean
          campaign_id: string
          created_at: string
          id: string
          name: string
          reward_amount: number
          reward_type: string
          slug: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          campaign_id: string
          created_at?: string
          id?: string
          name: string
          reward_amount?: number
          reward_type: string
          slug: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          campaign_id?: string
          created_at?: string
          id?: string
          name?: string
          reward_amount?: number
          reward_type?: string
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      competitors: {
        Row: {
          created_at: string
          id: string
          project_id: string
          username: string
        }
        Insert: {
          created_at?: string
          id?: string
          project_id: string
          username: string
        }
        Update: {
          created_at?: string
          id?: string
          project_id?: string
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "competitors_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      coupon_codes: {
        Row: {
          code: string
          created_at: string | null
          created_by: string | null
          credit: number
          id: string
          status: boolean | null
          used_at: string | null
          used_by: string | null
        }
        Insert: {
          code: string
          created_at?: string | null
          created_by?: string | null
          credit: number
          id?: string
          status?: boolean | null
          used_at?: string | null
          used_by?: string | null
        }
        Update: {
          code?: string
          created_at?: string | null
          created_by?: string | null
          credit?: number
          id?: string
          status?: boolean | null
          used_at?: string | null
          used_by?: string | null
        }
        Relationships: []
      }
      credit_transactions: {
        Row: {
          amount: number
          created_at: string | null
          description: string | null
          id: string
          metadata: Json | null
          reference_id: string | null
          type: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          reference_id?: string | null
          type: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          reference_id?: string | null
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      credits: {
        Row: {
          billing_interval: string | null
          created_at: string
          current_plan: string | null
          id: string
          next_billing_date: string | null
          pending_plan_change: string | null
          razorpay_subscription_id: string | null
          subscription_id: string | null
          subscription_provider: string | null
          subscription_status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          billing_interval?: string | null
          created_at?: string
          current_plan?: string | null
          id?: string
          next_billing_date?: string | null
          pending_plan_change?: string | null
          razorpay_subscription_id?: string | null
          subscription_id?: string | null
          subscription_provider?: string | null
          subscription_status?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          billing_interval?: string | null
          created_at?: string
          current_plan?: string | null
          id?: string
          next_billing_date?: string | null
          pending_plan_change?: string | null
          razorpay_subscription_id?: string | null
          subscription_id?: string | null
          subscription_provider?: string | null
          subscription_status?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      dumbewebsiteurl: {
        Row: {
          created_at: string
          id: string
          status: string | null
          time: number | null
          websiteurl: string | null
        }
        Insert: {
          created_at?: string
          id: string
          status?: string | null
          time?: number | null
          websiteurl?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          status?: string | null
          time?: number | null
          websiteurl?: string | null
        }
        Relationships: []
      }
      email_otps: {
        Row: {
          created_at: string
          email: string
          expires_at: string
          id: string
          otp_code: string
          type: string
          used: boolean
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          expires_at?: string
          id?: string
          otp_code: string
          type: string
          used?: boolean
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          expires_at?: string
          id?: string
          otp_code?: string
          type?: string
          used?: boolean
          user_id?: string | null
        }
        Relationships: []
      }
      first_ad_entitlements: {
        Row: {
          amount: number
          consumed_at: string | null
          created_at: string
          failed_video_ids: string[]
          free_images_total: number
          free_images_used: number
          id: string
          last_restored_at: string | null
          payment_order_id: string | null
          provider: string | null
          purchased_at: string
          restore_count: number
          status: string
          user_id: string
          video_id: string | null
        }
        Insert: {
          amount?: number
          consumed_at?: string | null
          created_at?: string
          failed_video_ids?: string[]
          free_images_total?: number
          free_images_used?: number
          id?: string
          last_restored_at?: string | null
          payment_order_id?: string | null
          provider?: string | null
          purchased_at?: string
          restore_count?: number
          status?: string
          user_id: string
          video_id?: string | null
        }
        Update: {
          amount?: number
          consumed_at?: string | null
          created_at?: string
          failed_video_ids?: string[]
          free_images_total?: number
          free_images_used?: number
          id?: string
          last_restored_at?: string | null
          payment_order_id?: string | null
          provider?: string | null
          purchased_at?: string
          restore_count?: number
          status?: string
          user_id?: string
          video_id?: string | null
        }
        Relationships: []
      }
      followup_log: {
        Row: {
          id: string
          idempotency_key: string | null
          scenario: string
          sent_at: string
          step: number
          user_id: string
          webhook_status: string
        }
        Insert: {
          id?: string
          idempotency_key?: string | null
          scenario: string
          sent_at?: string
          step: number
          user_id: string
          webhook_status?: string
        }
        Update: {
          id?: string
          idempotency_key?: string | null
          scenario?: string
          sent_at?: string
          step?: number
          user_id?: string
          webhook_status?: string
        }
        Relationships: [
          {
            foreignKeyName: "followup_log_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      image_generation_events: {
        Row: {
          details: Json
          event: string
          id: string
          occurred_at: string
          request_id: string
          stage: string
          status: string
        }
        Insert: {
          details?: Json
          event: string
          id?: string
          occurred_at?: string
          request_id: string
          stage: string
          status: string
        }
        Update: {
          details?: Json
          event?: string
          id?: string
          occurred_at?: string
          request_id?: string
          stage?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "image_generation_events_request_id_fkey"
            columns: ["request_id"]
            isOneToOne: false
            referencedRelation: "image_generation_jobs"
            referencedColumns: ["request_id"]
          },
        ]
      }
      image_generation_jobs: {
        Row: {
          attempts: number
          available_at: string
          context: Json
          created_at: string
          cursor: number
          data: Json
          debit: Json | null
          diagnostic: Json | null
          error: string | null
          free_image: boolean
          lease_expires_at: string | null
          lease_id: string | null
          payload: Json
          refunded_at: string | null
          request_id: string
          result: Json | null
          stage: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          attempts?: number
          available_at?: string
          context: Json
          created_at?: string
          cursor?: number
          data?: Json
          debit?: Json | null
          diagnostic?: Json | null
          error?: string | null
          free_image: boolean
          lease_expires_at?: string | null
          lease_id?: string | null
          payload: Json
          refunded_at?: string | null
          request_id: string
          result?: Json | null
          stage?: string
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          attempts?: number
          available_at?: string
          context?: Json
          created_at?: string
          cursor?: number
          data?: Json
          debit?: Json | null
          diagnostic?: Json | null
          error?: string | null
          free_image?: boolean
          lease_expires_at?: string | null
          lease_id?: string | null
          payload?: Json
          refunded_at?: string | null
          request_id?: string
          result?: Json | null
          stage?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      imgresult: {
        Row: {
          aspect_ratio: string | null
          completed_at: string | null
          created_at: string
          display_message: string | null
          id: string
          image_id: string
          percentage: number | null
          size: number | null
          status: string
          url: string | null
          user_id: string
          user_type: string | null
        }
        Insert: {
          aspect_ratio?: string | null
          completed_at?: string | null
          created_at?: string
          display_message?: string | null
          id?: string
          image_id?: string
          percentage?: number | null
          size?: number | null
          status?: string
          url?: string | null
          user_id: string
          user_type?: string | null
        }
        Update: {
          aspect_ratio?: string | null
          completed_at?: string | null
          created_at?: string
          display_message?: string | null
          id?: string
          image_id?: string
          percentage?: number | null
          size?: number | null
          status?: string
          url?: string | null
          user_id?: string
          user_type?: string | null
        }
        Relationships: []
      }
      imgtemplate: {
        Row: {
          bgimg: string | null
          id: number
          name: string | null
          previewimg: string | null
          prompt: string | null
          shown: boolean | null
        }
        Insert: {
          bgimg?: string | null
          id?: number
          name?: string | null
          previewimg?: string | null
          prompt?: string | null
          shown?: boolean | null
        }
        Update: {
          bgimg?: string | null
          id?: number
          name?: string | null
          previewimg?: string | null
          prompt?: string | null
          shown?: boolean | null
        }
        Relationships: []
      }
      imgupscalerresult: {
        Row: {
          afterurl: string | null
          aspect_ratio: string | null
          beforeurl: string | null
          completed_at: string | null
          created_at: string
          display_message: string | null
          generation_request_id: string | null
          id: string
          imgid: string
          percentage: number | null
          size: number | null
          status: string
          timetaken: number | null
          user_id: string
          user_type: string | null
        }
        Insert: {
          afterurl?: string | null
          aspect_ratio?: string | null
          beforeurl?: string | null
          completed_at?: string | null
          created_at?: string
          display_message?: string | null
          generation_request_id?: string | null
          id?: string
          imgid?: string
          percentage?: number | null
          size?: number | null
          status?: string
          timetaken?: number | null
          user_id: string
          user_type?: string | null
        }
        Update: {
          afterurl?: string | null
          aspect_ratio?: string | null
          beforeurl?: string | null
          completed_at?: string | null
          created_at?: string
          display_message?: string | null
          generation_request_id?: string | null
          id?: string
          imgid?: string
          percentage?: number | null
          size?: number | null
          status?: string
          timetaken?: number | null
          user_id?: string
          user_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "imgupscalerresult_generation_request_id_fkey"
            columns: ["generation_request_id"]
            isOneToOne: true
            referencedRelation: "image_generation_jobs"
            referencedColumns: ["request_id"]
          },
        ]
      }
      leads: {
        Row: {
          created_at: string
          email: string
          goals: string[]
          id: string
          is_creator: boolean
          lastupdate: string | null
          name: string
          social_link: string | null
          start_timeframe: string
          user_type: string
          whatsappnumber: number | null
        }
        Insert: {
          created_at?: string
          email: string
          goals?: string[]
          id: string
          is_creator: boolean
          lastupdate?: string | null
          name: string
          social_link?: string | null
          start_timeframe: string
          user_type: string
          whatsappnumber?: number | null
        }
        Update: {
          created_at?: string
          email?: string
          goals?: string[]
          id?: string
          is_creator?: boolean
          lastupdate?: string | null
          name?: string
          social_link?: string | null
          start_timeframe?: string
          user_type?: string
          whatsappnumber?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "leads_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      magnific_templates: {
        Row: {
          business_type: string | null
          created_at: string
          creative_image_url: string | null
          detail_url: string | null
          id: number
          license: string | null
          notes: string | null
          prompt: string
          style: string
          template_image_url: string
          trend_rank: number
          trend_source: string
          trending_since: string | null
          updated_at: string
        }
        Insert: {
          business_type?: string | null
          created_at?: string
          creative_image_url?: string | null
          detail_url?: string | null
          id?: never
          license?: string | null
          notes?: string | null
          prompt: string
          style: string
          template_image_url: string
          trend_rank: number
          trend_source?: string
          trending_since?: string | null
          updated_at?: string
        }
        Update: {
          business_type?: string | null
          created_at?: string
          creative_image_url?: string | null
          detail_url?: string | null
          id?: never
          license?: string | null
          notes?: string | null
          prompt?: string
          style?: string
          template_image_url?: string
          trend_rank?: number
          trend_source?: string
          trending_since?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      mobile_verifications: {
        Row: {
          country_code: string | null
          created_at: string
          credits_granted: number
          id: string
          mobile_number: string
          user_id: string
          verified_at: string
        }
        Insert: {
          country_code?: string | null
          created_at?: string
          credits_granted?: number
          id?: string
          mobile_number: string
          user_id: string
          verified_at?: string
        }
        Update: {
          country_code?: string | null
          created_at?: string
          credits_granted?: number
          id?: string
          mobile_number?: string
          user_id?: string
          verified_at?: string
        }
        Relationships: []
      }
      payment_orders: {
        Row: {
          amount: number
          created_at: string
          credits: number
          currency: string
          customer_email: string | null
          id: string
          order_id: string
          payment_method: string | null
          payment_session_id: string | null
          payment_type: string | null
          plan_type: string | null
          status: string
          subscription_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          credits: number
          currency: string
          customer_email?: string | null
          id?: string
          order_id: string
          payment_method?: string | null
          payment_session_id?: string | null
          payment_type?: string | null
          plan_type?: string | null
          status: string
          subscription_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          credits?: number
          currency?: string
          customer_email?: string | null
          id?: string
          order_id?: string
          payment_method?: string | null
          payment_session_id?: string | null
          payment_type?: string | null
          plan_type?: string | null
          status?: string
          subscription_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      plan_credits: {
        Row: {
          created_at: string
          expired_at: string | null
          expired_credits_removed: number
          expiry_date: string
          id: string
          original_credit: number
          payment_order_id: string | null
          plan_credit: number
          plan_name: string | null
          provider: string | null
          source: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          expired_at?: string | null
          expired_credits_removed?: number
          expiry_date: string
          id?: string
          original_credit: number
          payment_order_id?: string | null
          plan_credit?: number
          plan_name?: string | null
          provider?: string | null
          source?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          expired_at?: string | null
          expired_credits_removed?: number
          expiry_date?: string
          id?: string
          original_credit?: number
          payment_order_id?: string | null
          plan_credit?: number
          plan_name?: string | null
          provider?: string | null
          source?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      product_ad_audio_previews: {
        Row: {
          attempts: number
          audio_url: string | null
          created_at: string
          error: string | null
          id: string
          object_key: string | null
          request: Json
          revision: string
          status: string
          storyboard_request_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          attempts?: number
          audio_url?: string | null
          created_at?: string
          error?: string | null
          id?: string
          object_key?: string | null
          request: Json
          revision: string
          status?: string
          storyboard_request_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          attempts?: number
          audio_url?: string | null
          created_at?: string
          error?: string | null
          id?: string
          object_key?: string | null
          request?: Json
          revision?: string
          status?: string
          storyboard_request_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_ad_audio_previews_storyboard_request_id_fkey"
            columns: ["storyboard_request_id"]
            isOneToOne: false
            referencedRelation: "storyboard_results"
            referencedColumns: ["request_id"]
          },
        ]
      }
      product_ad_templates: {
        Row: {
          category: string[]
          created_at: string
          description: string | null
          id: string
          image_with_model: string | null
          image_without_model: string | null
          is_active: boolean
          name: string
          negative_prompt: string | null
          priority: number
          prompt_with_model: string | null
          prompt_without_model: string | null
          supports_with_model: boolean
          supports_without_model: boolean
          updated_at: string
        }
        Insert: {
          category?: string[]
          created_at?: string
          description?: string | null
          id?: string
          image_with_model?: string | null
          image_without_model?: string | null
          is_active?: boolean
          name: string
          negative_prompt?: string | null
          priority?: number
          prompt_with_model?: string | null
          prompt_without_model?: string | null
          supports_with_model?: boolean
          supports_without_model?: boolean
          updated_at?: string
        }
        Update: {
          category?: string[]
          created_at?: string
          description?: string | null
          id?: string
          image_with_model?: string | null
          image_without_model?: string | null
          is_active?: boolean
          name?: string
          negative_prompt?: string | null
          priority?: number
          prompt_with_model?: string | null
          prompt_without_model?: string | null
          supports_with_model?: boolean
          supports_without_model?: boolean
          updated_at?: string
        }
        Relationships: []
      }
      product_ad_video: {
        Row: {
          business_type: string
          category: string | null
          created_at: string
          global_video_url: string | null
          id: number
          is_active: boolean | null
          name: string | null
          preview_image: string | null
          priority: number | null
          prompt: string | null
          style: string
          tags: string | null
          top_name: string | null
          trend_rank: number
          trend_source: string | null
          trending_since: string | null
          type: string | null
          updated_at: string
          video_url: string | null
        }
        Insert: {
          business_type?: string
          category?: string | null
          created_at?: string
          global_video_url?: string | null
          id?: number
          is_active?: boolean | null
          name?: string | null
          preview_image?: string | null
          priority?: number | null
          prompt?: string | null
          style?: string
          tags?: string | null
          top_name?: string | null
          trend_rank?: number
          trend_source?: string | null
          trending_since?: string | null
          type?: string | null
          updated_at?: string
          video_url?: string | null
        }
        Update: {
          business_type?: string
          category?: string | null
          created_at?: string
          global_video_url?: string | null
          id?: number
          is_active?: boolean | null
          name?: string | null
          preview_image?: string | null
          priority?: number | null
          prompt?: string | null
          style?: string
          tags?: string | null
          top_name?: string | null
          trend_rank?: number
          trend_source?: string | null
          trending_since?: string | null
          type?: string | null
          updated_at?: string
          video_url?: string | null
        }
        Relationships: []
      }
      product_assets: {
        Row: {
          cdn_url: string
          contains_face: boolean
          created_at: string
          file_name: string | null
          id: string
          user_id: string
        }
        Insert: {
          cdn_url: string
          contains_face?: boolean
          created_at?: string
          file_name?: string | null
          id?: string
          user_id: string
        }
        Update: {
          cdn_url?: string
          contains_face?: boolean
          created_at?: string
          file_name?: string | null
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      product_avatar_results: {
        Row: {
          completed_at: string | null
          created_at: string
          display_message: string | null
          id: string
          image_id: string
          percentage: number | null
          size: number | null
          status: string
          url: string | null
          user_id: string
          user_type: string | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          display_message?: string | null
          id?: string
          image_id?: string
          percentage?: number | null
          size?: number | null
          status?: string
          url?: string | null
          user_id: string
          user_type?: string | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          display_message?: string | null
          id?: string
          image_id?: string
          percentage?: number | null
          size?: number | null
          status?: string
          url?: string | null
          user_id?: string
          user_type?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          ad_id: number | null
          aibrainkey: string
          aichangescrpit: string | null
          blueprint_prefilled: boolean
          campain_name: string | null
          competitors: string[] | null
          counter: number
          created_at: string | null
          credit: number
          ctwa_clid: string | null
          custom_script: string | null
          daily_image_credits: number
          email: string | null
          expression_control: string | null
          finalscript: string | null
          freepoint: number
          has_completed_onboarding: boolean | null
          has_generated_storyboard: boolean | null
          has_seen_tutorial: boolean | null
          id: string
          images: Json[] | null
          imagetimeline: Json[] | null
          imgpreview: string | null
          imgstatus: string | null
          is_indian_user: boolean | null
          last_daily_reset: string | null
          lead_type: string
          message: string | null
          mobile_number: string | null
          mobile_verification_deferred_at: string | null
          mobile_verified: boolean | null
          mode: string | null
          model: string | null
          permanent_credits: number
          plan_credits: number
          preview: string | null
          previewscript: string | null
          razorpay_subscription_id: string | null
          recovery_email_sent: boolean | null
          reel_url: string | null
          reference_videos: string[] | null
          result: Json | null
          saved_blueprint: string | null
          script_option: string | null
          scrpitpreviewerror: string | null
          selected_niches: string[] | null
          selected_video: Json | null
          selected_voice: Json | null
          status: string | null
          subscription_credits: number | null
          subscription_plan: string | null
          subscription_renewal_date: string | null
          subscription_status: string | null
          ugc_product_id: string | null
          updated_at: string | null
          user_country: string | null
          user_feedback_json: Json | null
          user_query: string | null
          videodata: Json[] | null
          videos: Json[] | null
          voice_files: Json[] | null
          websitetoscripturl: string | null
          whatsapp_number: string | null
          whatsapp_opted_out: boolean | null
          whatsapp_opted_out_at: string | null
        }
        Insert: {
          ad_id?: number | null
          aibrainkey?: string
          aichangescrpit?: string | null
          blueprint_prefilled?: boolean
          campain_name?: string | null
          competitors?: string[] | null
          counter?: number
          created_at?: string | null
          credit: number
          ctwa_clid?: string | null
          custom_script?: string | null
          daily_image_credits?: number
          email?: string | null
          expression_control?: string | null
          finalscript?: string | null
          freepoint?: number
          has_completed_onboarding?: boolean | null
          has_generated_storyboard?: boolean | null
          has_seen_tutorial?: boolean | null
          id: string
          images?: Json[] | null
          imagetimeline?: Json[] | null
          imgpreview?: string | null
          imgstatus?: string | null
          is_indian_user?: boolean | null
          last_daily_reset?: string | null
          lead_type?: string
          message?: string | null
          mobile_number?: string | null
          mobile_verification_deferred_at?: string | null
          mobile_verified?: boolean | null
          mode?: string | null
          model?: string | null
          permanent_credits?: number
          plan_credits?: number
          preview?: string | null
          previewscript?: string | null
          razorpay_subscription_id?: string | null
          recovery_email_sent?: boolean | null
          reel_url?: string | null
          reference_videos?: string[] | null
          result?: Json | null
          saved_blueprint?: string | null
          script_option?: string | null
          scrpitpreviewerror?: string | null
          selected_niches?: string[] | null
          selected_video?: Json | null
          selected_voice?: Json | null
          status?: string | null
          subscription_credits?: number | null
          subscription_plan?: string | null
          subscription_renewal_date?: string | null
          subscription_status?: string | null
          ugc_product_id?: string | null
          updated_at?: string | null
          user_country?: string | null
          user_feedback_json?: Json | null
          user_query?: string | null
          videodata?: Json[] | null
          videos?: Json[] | null
          voice_files?: Json[] | null
          websitetoscripturl?: string | null
          whatsapp_number?: string | null
          whatsapp_opted_out?: boolean | null
          whatsapp_opted_out_at?: string | null
        }
        Update: {
          ad_id?: number | null
          aibrainkey?: string
          aichangescrpit?: string | null
          blueprint_prefilled?: boolean
          campain_name?: string | null
          competitors?: string[] | null
          counter?: number
          created_at?: string | null
          credit?: number
          ctwa_clid?: string | null
          custom_script?: string | null
          daily_image_credits?: number
          email?: string | null
          expression_control?: string | null
          finalscript?: string | null
          freepoint?: number
          has_completed_onboarding?: boolean | null
          has_generated_storyboard?: boolean | null
          has_seen_tutorial?: boolean | null
          id?: string
          images?: Json[] | null
          imagetimeline?: Json[] | null
          imgpreview?: string | null
          imgstatus?: string | null
          is_indian_user?: boolean | null
          last_daily_reset?: string | null
          lead_type?: string
          message?: string | null
          mobile_number?: string | null
          mobile_verification_deferred_at?: string | null
          mobile_verified?: boolean | null
          mode?: string | null
          model?: string | null
          permanent_credits?: number
          plan_credits?: number
          preview?: string | null
          previewscript?: string | null
          razorpay_subscription_id?: string | null
          recovery_email_sent?: boolean | null
          reel_url?: string | null
          reference_videos?: string[] | null
          result?: Json | null
          saved_blueprint?: string | null
          script_option?: string | null
          scrpitpreviewerror?: string | null
          selected_niches?: string[] | null
          selected_video?: Json | null
          selected_voice?: Json | null
          status?: string | null
          subscription_credits?: number | null
          subscription_plan?: string | null
          subscription_renewal_date?: string | null
          subscription_status?: string | null
          ugc_product_id?: string | null
          updated_at?: string | null
          user_country?: string | null
          user_feedback_json?: Json | null
          user_query?: string | null
          videodata?: Json[] | null
          videos?: Json[] | null
          voice_files?: Json[] | null
          websitetoscripturl?: string | null
          whatsapp_number?: string | null
          whatsapp_opted_out?: boolean | null
          whatsapp_opted_out_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_ugc_product_id_fkey"
            columns: ["ugc_product_id"]
            isOneToOne: false
            referencedRelation: "ugc_products"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          created_at: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      publicavatar: {
        Row: {
          age: number | null
          category: Json | null
          citizen: string | null
          created_at: string
          gender: string | null
          id: number
          name: string | null
          play_video_url: string | null
          previewvideolink: string | null
          type: string | null
          videolink: string | null
          voice_code_id: string | null
          voice_id: number | null
        }
        Insert: {
          age?: number | null
          category?: Json | null
          citizen?: string | null
          created_at?: string
          gender?: string | null
          id?: number
          name?: string | null
          play_video_url?: string | null
          previewvideolink?: string | null
          type?: string | null
          videolink?: string | null
          voice_code_id?: string | null
          voice_id?: number | null
        }
        Update: {
          age?: number | null
          category?: Json | null
          citizen?: string | null
          created_at?: string
          gender?: string | null
          id?: number
          name?: string | null
          play_video_url?: string | null
          previewvideolink?: string | null
          type?: string | null
          videolink?: string | null
          voice_code_id?: string | null
          voice_id?: number | null
        }
        Relationships: []
      }
      publicvoice: {
        Row: {
          age: number | null
          citizen: string | null
          created_at: string
          Description: string | null
          gender: string | null
          id: number
          "Lang Code": string | null
          language: string | null
          name: string | null
          voice_assign: boolean | null
          voiceid: string | null
          voiceid_old: string | null
          voicelink: string | null
        }
        Insert: {
          age?: number | null
          citizen?: string | null
          created_at?: string
          Description?: string | null
          gender?: string | null
          id?: number
          "Lang Code"?: string | null
          language?: string | null
          name?: string | null
          voice_assign?: boolean | null
          voiceid?: string | null
          voiceid_old?: string | null
          voicelink?: string | null
        }
        Update: {
          age?: number | null
          citizen?: string | null
          created_at?: string
          Description?: string | null
          gender?: string | null
          id?: number
          "Lang Code"?: string | null
          language?: string | null
          name?: string | null
          voice_assign?: boolean | null
          voiceid?: string | null
          voiceid_old?: string | null
          voicelink?: string | null
        }
        Relationships: []
      }
      result: {
        Row: {
          "1080p_url": string | null
          "720p_url": string | null
          broll_image_url: string | null
          broll_json: Json[] | null
          caption_json: Json | null
          completed_at: string | null
          created_at: string
          credits_charged: number | null
          display_message: string | null
          edit_type: string | null
          face_detection: Json[] | null
          id: string
          langauge: string | null
          language_code: string | null
          logo_json: Json | null
          model_used: string
          music_json: Json | null
          nanabannatimeout: number | null
          percentage: number | null
          product_description: string | null
          product_image_urls: Json | null
          prompt_json: Json | null
          raw_video_json: Json | null
          resolution: string | null
          size: number | null
          source_video_id: string | null
          status: string
          timetaken: number | null
          transcript_data: Json | null
          transcript_original: string | null
          transcript_status: string
          transcript_updated: string | null
          type: string | null
          user_type: string | null
          video_duration: number | null
          video_editing_id: string | null
          video_id: string
          video_info: Json | null
          watermark_url: string | null
        }
        Insert: {
          "1080p_url"?: string | null
          "720p_url"?: string | null
          broll_image_url?: string | null
          broll_json?: Json[] | null
          caption_json?: Json | null
          completed_at?: string | null
          created_at?: string
          credits_charged?: number | null
          display_message?: string | null
          edit_type?: string | null
          face_detection?: Json[] | null
          id: string
          langauge?: string | null
          language_code?: string | null
          logo_json?: Json | null
          model_used?: string
          music_json?: Json | null
          nanabannatimeout?: number | null
          percentage?: number | null
          product_description?: string | null
          product_image_urls?: Json | null
          prompt_json?: Json | null
          raw_video_json?: Json | null
          resolution?: string | null
          size?: number | null
          source_video_id?: string | null
          status?: string
          timetaken?: number | null
          transcript_data?: Json | null
          transcript_original?: string | null
          transcript_status?: string
          transcript_updated?: string | null
          type?: string | null
          user_type?: string | null
          video_duration?: number | null
          video_editing_id?: string | null
          video_id?: string
          video_info?: Json | null
          watermark_url?: string | null
        }
        Update: {
          "1080p_url"?: string | null
          "720p_url"?: string | null
          broll_image_url?: string | null
          broll_json?: Json[] | null
          caption_json?: Json | null
          completed_at?: string | null
          created_at?: string
          credits_charged?: number | null
          display_message?: string | null
          edit_type?: string | null
          face_detection?: Json[] | null
          id?: string
          langauge?: string | null
          language_code?: string | null
          logo_json?: Json | null
          model_used?: string
          music_json?: Json | null
          nanabannatimeout?: number | null
          percentage?: number | null
          product_description?: string | null
          product_image_urls?: Json | null
          prompt_json?: Json | null
          raw_video_json?: Json | null
          resolution?: string | null
          size?: number | null
          source_video_id?: string | null
          status?: string
          timetaken?: number | null
          transcript_data?: Json | null
          transcript_original?: string | null
          transcript_status?: string
          transcript_updated?: string | null
          type?: string | null
          user_type?: string | null
          video_duration?: number | null
          video_editing_id?: string | null
          video_id?: string
          video_info?: Json | null
          watermark_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "result_id_fkey"
            columns: ["id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "result_video_editing_owner_fkey"
            columns: ["video_editing_id", "id"]
            isOneToOne: false
            referencedRelation: "video_editing_sources"
            referencedColumns: ["id", "user_id"]
          },
        ]
      }
      sample_video_libaray: {
        Row: {
          category: string | null
          country: string | null
          created_at: string | null
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
          created_at?: string | null
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
          created_at?: string | null
          description?: string | null
          duration?: number | null
          id?: number
          language?: string | null
          link?: string | null
          type?: string | null
        }
        Relationships: []
      }
      selected_niches: {
        Row: {
          created_at: string
          id: string
          niche: string
          project_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          niche: string
          project_id: string
        }
        Update: {
          created_at?: string
          id?: string
          niche?: string
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "selected_niches_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      storyboard_results: {
        Row: {
          created_at: string
          error: string | null
          request_id: string
          result: Json | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          error?: string | null
          request_id: string
          result?: Json | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          error?: string | null
          request_id?: string
          result?: Json | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      support_ai_turns: {
        Row: {
          completed_at: string | null
          created_at: string
          error_code: string | null
          id: string
          lease_expires_at: string
          model: string
          prompt_version: number
          request_id: string
          status: string
          ticket_id: string
          user_id: string
          user_message_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          error_code?: string | null
          id?: string
          lease_expires_at?: string
          model?: string
          prompt_version?: number
          request_id: string
          status?: string
          ticket_id: string
          user_id: string
          user_message_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          error_code?: string | null
          id?: string
          lease_expires_at?: string
          model?: string
          prompt_version?: number
          request_id?: string
          status?: string
          ticket_id?: string
          user_id?: string
          user_message_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "support_ai_turns_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "support_tickets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "support_ai_turns_user_message_id_fkey"
            columns: ["user_message_id"]
            isOneToOne: false
            referencedRelation: "support_messages"
            referencedColumns: ["id"]
          },
        ]
      }
      support_events: {
        Row: {
          actor_id: string | null
          created_at: string
          event_type: string
          from_value: string | null
          id: string
          ticket_id: string
          to_value: string | null
        }
        Insert: {
          actor_id?: string | null
          created_at?: string
          event_type: string
          from_value?: string | null
          id?: string
          ticket_id: string
          to_value?: string | null
        }
        Update: {
          actor_id?: string | null
          created_at?: string
          event_type?: string
          from_value?: string | null
          id?: string
          ticket_id?: string
          to_value?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "support_events_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "support_tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      support_messages: {
        Row: {
          attachment_url: string | null
          body: string
          created_at: string
          id: string
          is_internal_note: boolean
          metadata: Json
          sender_id: string | null
          sender_role: string
          ticket_id: string
        }
        Insert: {
          attachment_url?: string | null
          body?: string
          created_at?: string
          id?: string
          is_internal_note?: boolean
          metadata?: Json
          sender_id?: string | null
          sender_role: string
          ticket_id: string
        }
        Update: {
          attachment_url?: string | null
          body?: string
          created_at?: string
          id?: string
          is_internal_note?: boolean
          metadata?: Json
          sender_id?: string | null
          sender_role?: string
          ticket_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "support_messages_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "support_tickets"
            referencedColumns: ["id"]
          },
        ]
      }
      support_tickets: {
        Row: {
          ai_reply_state: string
          ai_summary: string | null
          category: string
          completed_at: string | null
          created_at: string
          description: string
          handed_off_at: string | null
          handling_mode: string
          handoff_reason: string | null
          id: string
          image_id: string | null
          issue_detail: string | null
          issue_type: string | null
          last_admin_reply_at: string | null
          last_ai_reply_at: string | null
          priority: string
          status: string
          ticket_number: string
          updated_at: string
          user_id: string
          user_last_seen_at: string | null
          video_id: string | null
        }
        Insert: {
          ai_reply_state?: string
          ai_summary?: string | null
          category: string
          completed_at?: string | null
          created_at?: string
          description?: string
          handed_off_at?: string | null
          handling_mode?: string
          handoff_reason?: string | null
          id?: string
          image_id?: string | null
          issue_detail?: string | null
          issue_type?: string | null
          last_admin_reply_at?: string | null
          last_ai_reply_at?: string | null
          priority?: string
          status?: string
          ticket_number: string
          updated_at?: string
          user_id: string
          user_last_seen_at?: string | null
          video_id?: string | null
        }
        Update: {
          ai_reply_state?: string
          ai_summary?: string | null
          category?: string
          completed_at?: string | null
          created_at?: string
          description?: string
          handed_off_at?: string | null
          handling_mode?: string
          handoff_reason?: string | null
          id?: string
          image_id?: string | null
          issue_detail?: string | null
          issue_type?: string | null
          last_admin_reply_at?: string | null
          last_ai_reply_at?: string | null
          priority?: string
          status?: string
          ticket_number?: string
          updated_at?: string
          user_id?: string
          user_last_seen_at?: string | null
          video_id?: string | null
        }
        Relationships: []
      }
      talking_video_config: {
        Row: {
          enabled: boolean
          id: boolean
          worker_url: string
          workflow: Json
        }
        Insert: {
          enabled?: boolean
          id?: boolean
          worker_url?: string
          workflow?: Json
        }
        Update: {
          enabled?: boolean
          id?: boolean
          worker_url?: string
          workflow?: Json
        }
        Relationships: []
      }
      talking_video_jobs: {
        Row: {
          artifacts: Json
          attempts: number
          available_at: string
          created_at: string
          debit: Json
          error_code: string | null
          id: string
          input: Json
          lease_expires_at: string | null
          lease_id: string | null
          provider_output_url: string | null
          provider_task_id: string | null
          stage: string
          status: string
          updated_at: string
          user_id: string
          video_id: string
        }
        Insert: {
          artifacts?: Json
          attempts?: number
          available_at?: string
          created_at?: string
          debit: Json
          error_code?: string | null
          id: string
          input: Json
          lease_expires_at?: string | null
          lease_id?: string | null
          provider_output_url?: string | null
          provider_task_id?: string | null
          stage?: string
          status?: string
          updated_at?: string
          user_id: string
          video_id: string
        }
        Update: {
          artifacts?: Json
          attempts?: number
          available_at?: string
          created_at?: string
          debit?: Json
          error_code?: string | null
          id?: string
          input?: Json
          lease_expires_at?: string | null
          lease_id?: string | null
          provider_output_url?: string | null
          provider_task_id?: string | null
          stage?: string
          status?: string
          updated_at?: string
          user_id?: string
          video_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "talking_video_jobs_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: true
            referencedRelation: "result"
            referencedColumns: ["video_id"]
          },
        ]
      }
      talking_voice_clones: {
        Row: {
          consent_at: string
          created_at: string
          error_message: string | null
          id: string
          name: string
          provider_voice_id: string | null
          sample_duration: number | null
          sample_path: string | null
          status: string
          user_id: string
        }
        Insert: {
          consent_at: string
          created_at?: string
          error_message?: string | null
          id?: string
          name: string
          provider_voice_id?: string | null
          sample_duration?: number | null
          sample_path?: string | null
          status?: string
          user_id: string
        }
        Update: {
          consent_at?: string
          created_at?: string
          error_message?: string | null
          id?: string
          name?: string
          provider_voice_id?: string | null
          sample_duration?: number | null
          sample_path?: string | null
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      talking_voice_requests: {
        Row: {
          clone_id: string | null
          created_at: string
          debit: Json | null
          error_message: string | null
          id: string
          input: Json
          kind: string
          output: Json | null
          refunded_at: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          clone_id?: string | null
          created_at?: string
          debit?: Json | null
          error_message?: string | null
          id: string
          input: Json
          kind: string
          output?: Json | null
          refunded_at?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          clone_id?: string | null
          created_at?: string
          debit?: Json | null
          error_message?: string | null
          id?: string
          input?: Json
          kind?: string
          output?: Json | null
          refunded_at?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "talking_voice_requests_clone_id_fkey"
            columns: ["clone_id"]
            isOneToOne: false
            referencedRelation: "talking_voice_clones"
            referencedColumns: ["id"]
          },
        ]
      }
      transcript_changes: {
        Row: {
          changes: Json
          created_at: string
          id: string
          status: string
          updated_at: string
          user_id: string
          video_id: string
        }
        Insert: {
          changes?: Json
          created_at?: string
          id?: string
          status?: string
          updated_at?: string
          user_id: string
          video_id: string
        }
        Update: {
          changes?: Json
          created_at?: string
          id?: string
          status?: string
          updated_at?: string
          user_id?: string
          video_id?: string
        }
        Relationships: []
      }
      ugc_avatar_bg: {
        Row: {
          bg_image_preview: string | null
          bg_name: string | null
          created_at: string
          id: number
        }
        Insert: {
          bg_image_preview?: string | null
          bg_name?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          bg_image_preview?: string | null
          bg_name?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      ugc_products: {
        Row: {
          ai_scripts_list: string[] | null
          aspect_ratio: string | null
          avatar_gender: string | null
          broll: Json[] | null
          broll_volume: number
          category: string | null
          company_logo_url: string | null
          created_at: string
          currency_code: string | null
          duration: string | null
          id: string
          images: string[] | null
          images_used: Json[] | null
          language: string | null
          logo_position: string | null
          logo_size: number
          offer_price: string | null
          platform: string | null
          product_description: string | null
          product_img_info: string | null
          product_title: string | null
          product_url: string
          regular_price: string | null
          script_instructions: string | null
          script_number: number
          script_option: string | null
          script_tone: string | null
          selected_avatar: Json | null
          selected_images: string[] | null
          selected_script: string | null
          status: string
          target_audience: string | null
          target_audiences_list: string[] | null
          updated_at: string
          user_id: string
          user_script: string | null
          voice_url: string | null
        }
        Insert: {
          ai_scripts_list?: string[] | null
          aspect_ratio?: string | null
          avatar_gender?: string | null
          broll?: Json[] | null
          broll_volume?: number
          category?: string | null
          company_logo_url?: string | null
          created_at?: string
          currency_code?: string | null
          duration?: string | null
          id?: string
          images?: string[] | null
          images_used?: Json[] | null
          language?: string | null
          logo_position?: string | null
          logo_size?: number
          offer_price?: string | null
          platform?: string | null
          product_description?: string | null
          product_img_info?: string | null
          product_title?: string | null
          product_url: string
          regular_price?: string | null
          script_instructions?: string | null
          script_number?: number
          script_option?: string | null
          script_tone?: string | null
          selected_avatar?: Json | null
          selected_images?: string[] | null
          selected_script?: string | null
          status?: string
          target_audience?: string | null
          target_audiences_list?: string[] | null
          updated_at?: string
          user_id: string
          user_script?: string | null
          voice_url?: string | null
        }
        Update: {
          ai_scripts_list?: string[] | null
          aspect_ratio?: string | null
          avatar_gender?: string | null
          broll?: Json[] | null
          broll_volume?: number
          category?: string | null
          company_logo_url?: string | null
          created_at?: string
          currency_code?: string | null
          duration?: string | null
          id?: string
          images?: string[] | null
          images_used?: Json[] | null
          language?: string | null
          logo_position?: string | null
          logo_size?: number
          offer_price?: string | null
          platform?: string | null
          product_description?: string | null
          product_img_info?: string | null
          product_title?: string | null
          product_url?: string
          regular_price?: string | null
          script_instructions?: string | null
          script_number?: number
          script_option?: string | null
          script_tone?: string | null
          selected_avatar?: Json | null
          selected_images?: string[] | null
          selected_script?: string | null
          status?: string
          target_audience?: string | null
          target_audiences_list?: string[] | null
          updated_at?: string
          user_id?: string
          user_script?: string | null
          voice_url?: string | null
        }
        Relationships: []
      }
      user_custom_avatars: {
        Row: {
          cdn_url: string
          created_at: string
          file_name: string | null
          id: string
          user_id: string
        }
        Insert: {
          cdn_url: string
          created_at?: string
          file_name?: string | null
          id?: string
          user_id: string
        }
        Update: {
          cdn_url?: string
          created_at?: string
          file_name?: string | null
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      user_feedback: {
        Row: {
          avatar_id: string | null
          country: string | null
          created_at: string
          credits_used: number | null
          custom_feedback: string | null
          feedback_milestone: number
          goal_achieved: string | null
          id: string
          improvement_categories: string[] | null
          language: string | null
          rating: number
          subscription_plan: string | null
          updated_at: string
          usage_result: string | null
          user_id: string
          video_duration: number | null
          video_style: string | null
          videos_generated: number
          workspace_id: string | null
        }
        Insert: {
          avatar_id?: string | null
          country?: string | null
          created_at?: string
          credits_used?: number | null
          custom_feedback?: string | null
          feedback_milestone: number
          goal_achieved?: string | null
          id?: string
          improvement_categories?: string[] | null
          language?: string | null
          rating: number
          subscription_plan?: string | null
          updated_at?: string
          usage_result?: string | null
          user_id: string
          video_duration?: number | null
          video_style?: string | null
          videos_generated: number
          workspace_id?: string | null
        }
        Update: {
          avatar_id?: string | null
          country?: string | null
          created_at?: string
          credits_used?: number | null
          custom_feedback?: string | null
          feedback_milestone?: number
          goal_achieved?: string | null
          id?: string
          improvement_categories?: string[] | null
          language?: string | null
          rating?: number
          subscription_plan?: string | null
          updated_at?: string
          usage_result?: string | null
          user_id?: string
          video_duration?: number | null
          video_style?: string | null
          videos_generated?: number
          workspace_id?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      video_audio_fix_jobs: {
        Row: {
          artifacts: Json
          attempts: number
          available_at: string
          base_version_id: string | null
          completed_at: string | null
          created_at: string
          error_message: string | null
          id: string
          input: Json
          lease_expires_at: string | null
          lease_id: string | null
          pipeline_version: string
          pool: string
          progress: number
          project_id: string
          project_revision: number
          request_id: string
          source_id: string
          stage: string
          status: string
          updated_at: string
          user_id: string
          worker_id: string | null
        }
        Insert: {
          artifacts?: Json
          attempts?: number
          available_at?: string
          base_version_id?: string | null
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          input: Json
          lease_expires_at?: string | null
          lease_id?: string | null
          pipeline_version?: string
          pool?: string
          progress?: number
          project_id: string
          project_revision: number
          request_id: string
          source_id: string
          stage?: string
          status?: string
          updated_at?: string
          user_id: string
          worker_id?: string | null
        }
        Update: {
          artifacts?: Json
          attempts?: number
          available_at?: string
          base_version_id?: string | null
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          input?: Json
          lease_expires_at?: string | null
          lease_id?: string | null
          pipeline_version?: string
          pool?: string
          progress?: number
          project_id?: string
          project_revision?: number
          request_id?: string
          source_id?: string
          stage?: string
          status?: string
          updated_at?: string
          user_id?: string
          worker_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "video_audio_fix_jobs_base_version_id_fkey"
            columns: ["base_version_id"]
            isOneToOne: false
            referencedRelation: "video_audio_versions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "video_audio_fix_jobs_project_id_user_id_fkey"
            columns: ["project_id", "user_id"]
            isOneToOne: false
            referencedRelation: "video_editor_projects"
            referencedColumns: ["id", "user_id"]
          },
          {
            foreignKeyName: "video_audio_fix_jobs_source_id_user_id_fkey"
            columns: ["source_id", "user_id"]
            isOneToOne: false
            referencedRelation: "video_editing_sources"
            referencedColumns: ["id", "user_id"]
          },
          {
            foreignKeyName: "video_audio_fix_jobs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "video_audio_fix_jobs_worker_id_fkey"
            columns: ["worker_id"]
            isOneToOne: false
            referencedRelation: "video_audio_fix_workers"
            referencedColumns: ["id"]
          },
        ]
      }
      video_audio_fix_operations: {
        Row: {
          created_at: string
          job_id: string
          operation_key: string
          result: Json | null
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          job_id: string
          operation_key: string
          result?: Json | null
          status: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          job_id?: string
          operation_key?: string
          result?: Json | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "video_audio_fix_operations_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "video_audio_fix_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      video_audio_fix_workers: {
        Row: {
          enabled: boolean
          expires_at: string
          id: string
          last_seen_at: string | null
          name: string
          pipeline_version: string
          pool: string
          token_hash: string
        }
        Insert: {
          enabled?: boolean
          expires_at?: string
          id?: string
          last_seen_at?: string | null
          name: string
          pipeline_version?: string
          pool?: string
          token_hash: string
        }
        Update: {
          enabled?: boolean
          expires_at?: string
          id?: string
          last_seen_at?: string | null
          name?: string
          pipeline_version?: string
          pool?: string
          token_hash?: string
        }
        Relationships: []
      }
      video_audio_source_cache: {
        Row: {
          analysis: Json
          created_at: string
          fingerprint: string
          pipeline_version: string
          source_id: string
        }
        Insert: {
          analysis: Json
          created_at?: string
          fingerprint: string
          pipeline_version?: string
          source_id: string
        }
        Update: {
          analysis?: Json
          created_at?: string
          fingerprint?: string
          pipeline_version?: string
          source_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "video_audio_source_cache_source_id_fkey"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "video_editing_sources"
            referencedColumns: ["id"]
          },
        ]
      }
      video_audio_versions: {
        Row: {
          captions: Json
          captions_before: Json
          changes: Json
          created_at: string
          duration_seconds: number
          id: string
          job_id: string
          master_path: string
          media_id: string
          parent_version_id: string | null
          project_id: string
          source_id: string
          user_id: string
          words: Json
        }
        Insert: {
          captions: Json
          captions_before: Json
          changes: Json
          created_at?: string
          duration_seconds: number
          id?: string
          job_id: string
          master_path: string
          media_id: string
          parent_version_id?: string | null
          project_id: string
          source_id: string
          user_id: string
          words: Json
        }
        Update: {
          captions?: Json
          captions_before?: Json
          changes?: Json
          created_at?: string
          duration_seconds?: number
          id?: string
          job_id?: string
          master_path?: string
          media_id?: string
          parent_version_id?: string | null
          project_id?: string
          source_id?: string
          user_id?: string
          words?: Json
        }
        Relationships: [
          {
            foreignKeyName: "video_audio_versions_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: true
            referencedRelation: "video_audio_fix_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "video_audio_versions_media_id_fkey"
            columns: ["media_id"]
            isOneToOne: false
            referencedRelation: "video_editor_media"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "video_audio_versions_parent_version_id_fkey"
            columns: ["parent_version_id"]
            isOneToOne: false
            referencedRelation: "video_audio_versions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "video_audio_versions_project_id_user_id_fkey"
            columns: ["project_id", "user_id"]
            isOneToOne: false
            referencedRelation: "video_editor_projects"
            referencedColumns: ["id", "user_id"]
          },
          {
            foreignKeyName: "video_audio_versions_source_id_user_id_fkey"
            columns: ["source_id", "user_id"]
            isOneToOne: false
            referencedRelation: "video_editing_sources"
            referencedColumns: ["id", "user_id"]
          },
          {
            foreignKeyName: "video_audio_versions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      video_editing_sources: {
        Row: {
          aspect_ratio: string | null
          audio_settings: Json
          bg_music_url: string | null
          caption_ass_url: string | null
          caption_json: Json | null
          captions_enabled: boolean
          created_at: string
          cta_duration_seconds: number
          cta_image_url: string | null
          duration_seconds: number | null
          fps: number | null
          height: number | null
          id: string
          language_code: string | null
          metadata: Json
          raw_video_url: string
          render_settings: Json
          transcript_original: string | null
          updated_at: string
          user_id: string
          voiceover_url: string | null
          width: number | null
        }
        Insert: {
          aspect_ratio?: string | null
          audio_settings?: Json
          bg_music_url?: string | null
          caption_ass_url?: string | null
          caption_json?: Json | null
          captions_enabled?: boolean
          created_at?: string
          cta_duration_seconds?: number
          cta_image_url?: string | null
          duration_seconds?: number | null
          fps?: number | null
          height?: number | null
          id?: string
          language_code?: string | null
          metadata?: Json
          raw_video_url: string
          render_settings?: Json
          transcript_original?: string | null
          updated_at?: string
          user_id: string
          voiceover_url?: string | null
          width?: number | null
        }
        Update: {
          aspect_ratio?: string | null
          audio_settings?: Json
          bg_music_url?: string | null
          caption_ass_url?: string | null
          caption_json?: Json | null
          captions_enabled?: boolean
          created_at?: string
          cta_duration_seconds?: number
          cta_image_url?: string | null
          duration_seconds?: number | null
          fps?: number | null
          height?: number | null
          id?: string
          language_code?: string | null
          metadata?: Json
          raw_video_url?: string
          render_settings?: Json
          transcript_original?: string | null
          updated_at?: string
          user_id?: string
          voiceover_url?: string | null
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "video_editing_sources_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      video_editor_media: {
        Row: {
          byte_size: number
          content_type: string
          created_at: string
          duration_seconds: number | null
          file_name: string
          height: number | null
          id: string
          kind: string
          project_id: string
          status: string
          storage_path: string
          updated_at: string
          url: string | null
          user_id: string
          width: number | null
        }
        Insert: {
          byte_size: number
          content_type: string
          created_at?: string
          duration_seconds?: number | null
          file_name: string
          height?: number | null
          id?: string
          kind: string
          project_id: string
          status?: string
          storage_path: string
          updated_at?: string
          url?: string | null
          user_id: string
          width?: number | null
        }
        Update: {
          byte_size?: number
          content_type?: string
          created_at?: string
          duration_seconds?: number | null
          file_name?: string
          height?: number | null
          id?: string
          kind?: string
          project_id?: string
          status?: string
          storage_path?: string
          updated_at?: string
          url?: string | null
          user_id?: string
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "video_editor_media_project_id_user_id_fkey"
            columns: ["project_id", "user_id"]
            isOneToOne: false
            referencedRelation: "video_editor_projects"
            referencedColumns: ["id", "user_id"]
          },
        ]
      }
      video_editor_projects: {
        Row: {
          created_at: string
          document: Json
          id: string
          revision: number
          source_id: string
          updated_at: string
          user_id: string
          video_id: string
        }
        Insert: {
          created_at?: string
          document: Json
          id?: string
          revision?: number
          source_id: string
          updated_at?: string
          user_id: string
          video_id: string
        }
        Update: {
          created_at?: string
          document?: Json
          id?: string
          revision?: number
          source_id?: string
          updated_at?: string
          user_id?: string
          video_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "video_editor_projects_source_id_user_id_fkey"
            columns: ["source_id", "user_id"]
            isOneToOne: false
            referencedRelation: "video_editing_sources"
            referencedColumns: ["id", "user_id"]
          },
          {
            foreignKeyName: "video_editor_projects_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "video_editor_projects_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "result"
            referencedColumns: ["video_id"]
          },
        ]
      }
      video_export_jobs: {
        Row: {
          attempts: number
          available_at: string
          completed_at: string | null
          created_at: string
          error_message: string | null
          expected_bytes: number | null
          id: string
          lease_expires_at: string | null
          lease_id: string | null
          manifest: Json
          output_bytes: number | null
          output_duration: number | null
          output_height: number | null
          output_path: string | null
          output_url: string | null
          output_width: number | null
          pool: string
          progress: number
          project_id: string
          project_revision: number
          quality: string
          renderer_version: string
          snapshot: Json
          stage: string
          status: string
          updated_at: string
          user_id: string
          worker_id: string | null
        }
        Insert: {
          attempts?: number
          available_at?: string
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          expected_bytes?: number | null
          id?: string
          lease_expires_at?: string | null
          lease_id?: string | null
          manifest: Json
          output_bytes?: number | null
          output_duration?: number | null
          output_height?: number | null
          output_path?: string | null
          output_url?: string | null
          output_width?: number | null
          pool?: string
          progress?: number
          project_id: string
          project_revision: number
          quality: string
          renderer_version?: string
          snapshot: Json
          stage?: string
          status?: string
          updated_at?: string
          user_id: string
          worker_id?: string | null
        }
        Update: {
          attempts?: number
          available_at?: string
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          expected_bytes?: number | null
          id?: string
          lease_expires_at?: string | null
          lease_id?: string | null
          manifest?: Json
          output_bytes?: number | null
          output_duration?: number | null
          output_height?: number | null
          output_path?: string | null
          output_url?: string | null
          output_width?: number | null
          pool?: string
          progress?: number
          project_id?: string
          project_revision?: number
          quality?: string
          renderer_version?: string
          snapshot?: Json
          stage?: string
          status?: string
          updated_at?: string
          user_id?: string
          worker_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "video_export_jobs_project_id_user_id_fkey"
            columns: ["project_id", "user_id"]
            isOneToOne: false
            referencedRelation: "video_editor_projects"
            referencedColumns: ["id", "user_id"]
          },
          {
            foreignKeyName: "video_export_jobs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "video_export_jobs_worker_id_fkey"
            columns: ["worker_id"]
            isOneToOne: false
            referencedRelation: "video_export_workers"
            referencedColumns: ["id"]
          },
        ]
      }
      video_export_workers: {
        Row: {
          created_at: string
          enabled: boolean
          expires_at: string
          id: string
          last_seen_at: string | null
          max_quality: string
          name: string
          pool: string
          renderer_version: string
          token_hash: string
        }
        Insert: {
          created_at?: string
          enabled?: boolean
          expires_at?: string
          id?: string
          last_seen_at?: string | null
          max_quality?: string
          name: string
          pool?: string
          renderer_version?: string
          token_hash: string
        }
        Update: {
          created_at?: string
          enabled?: boolean
          expires_at?: string
          id?: string
          last_seen_at?: string | null
          max_quality?: string
          name?: string
          pool?: string
          renderer_version?: string
          token_hash?: string
        }
        Relationships: []
      }
      video_reports: {
        Row: {
          created_at: string
          description: string
          id: string
          rating: number
          screenshot: string | null
          status: string | null
          user_id: string
          video_id: string | null
          video_link: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          rating: number
          screenshot?: string | null
          status?: string | null
          user_id: string
          video_id?: string | null
          video_link: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          rating?: number
          screenshot?: string | null
          status?: string | null
          user_id?: string
          video_id?: string | null
          video_link?: string
        }
        Relationships: []
      }
      videos: {
        Row: {
          created_at: string
          id: string
          name: string
          project_id: string
          size: number
          type: string
          url: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          project_id: string
          size: number
          type: string
          url: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          project_id?: string
          size?: number
          type?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "videos_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      voice_files: {
        Row: {
          created_at: string
          id: string
          name: string
          project_id: string
          size: number
          type: string
          url: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          project_id: string
          size: number
          type: string
          url: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          project_id?: string
          size?: number
          type?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "voice_files_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      websiteurls: {
        Row: {
          created_at: string
          id: string
          websiteurl: string | null
        }
        Insert: {
          created_at?: string
          id: string
          websiteurl?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          websiteurl?: string | null
        }
        Relationships: []
      }
      zocktodumbme: {
        Row: {
          created_at: string
          id: string
        }
        Insert: {
          created_at?: string
          id: string
        }
        Update: {
          created_at?: string
          id?: string
        }
        Relationships: []
      }
      zocktomain: {
        Row: {
          "agent script": string | null
          audio: string | null
          caption: string | null
          comment_count: number | null
          created_at: string
          follower_count: number | null
          id: string
          like_count: number | null
          "reel url": string | null
          reshare_count: number | null
          thumbanil: string | null
          username: string | null
          videoid: string | null
          views: number | null
        }
        Insert: {
          "agent script"?: string | null
          audio?: string | null
          caption?: string | null
          comment_count?: number | null
          created_at?: string
          follower_count?: number | null
          id: string
          like_count?: number | null
          "reel url"?: string | null
          reshare_count?: number | null
          thumbanil?: string | null
          username?: string | null
          videoid?: string | null
          views?: number | null
        }
        Update: {
          "agent script"?: string | null
          audio?: string | null
          caption?: string | null
          comment_count?: number | null
          created_at?: string
          follower_count?: number | null
          id?: string
          like_count?: number | null
          "reel url"?: string | null
          reshare_count?: number | null
          thumbanil?: string | null
          username?: string | null
          videoid?: string | null
          views?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      ad_generation_admin_jobs: {
        Row: {
          attempts: number | null
          created_at: string | null
          diagnostic: Json | null
          error: string | null
          kind: string | null
          request_id: string | null
          retries: number | null
          source: string | null
          stage: string | null
          status: string | null
          updated_at: string | null
          user_id: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      add_permanent_credits: {
        Args: { p_amount: number; p_user_id: string }
        Returns: undefined
      }
      add_plan_credits: {
        Args: {
          p_amount: number
          p_expiry: string
          p_payment_order_id?: string
          p_plan_name?: string
          p_provider?: string
          p_source?: string
          p_user_id: string
        }
        Returns: string
      }
      admin_credit_utilization: {
        Args: { p_from?: string; p_to?: string }
        Returns: Json
      }
      admin_get_user_identity: {
        Args: { p_user_ids: string[] }
        Returns: {
          email: string
          user_id: string
        }[]
      }
      claim_ad_generation: {
        Args: { p_request: string }
        Returns: {
          attempts: number
          available_at: string
          context: Json
          created_at: string
          cursor: number
          data: Json
          diagnostic: Json | null
          error: string | null
          kind: string
          lease_expires_at: string | null
          lease_id: string | null
          payload: Json
          request_id: string
          result: Json | null
          retries: number
          stage: string
          status: string
          updated_at: string
          user_id: string
        }
        SetofOptions: {
          from: "*"
          to: "ad_generation_jobs"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      claim_image_generation: {
        Args: { p_request: string }
        Returns: {
          attempts: number
          available_at: string
          context: Json
          created_at: string
          cursor: number
          data: Json
          debit: Json | null
          diagnostic: Json | null
          error: string | null
          free_image: boolean
          lease_expires_at: string | null
          lease_id: string | null
          payload: Json
          refunded_at: string | null
          request_id: string
          result: Json | null
          stage: string
          status: string
          updated_at: string
          user_id: string
        }
        SetofOptions: {
          from: "*"
          to: "image_generation_jobs"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      claim_video_audio_fix: {
        Args: { p_worker: string }
        Returns: {
          artifacts: Json
          attempts: number
          available_at: string
          base_version_id: string | null
          completed_at: string | null
          created_at: string
          error_message: string | null
          id: string
          input: Json
          lease_expires_at: string | null
          lease_id: string | null
          pipeline_version: string
          pool: string
          progress: number
          project_id: string
          project_revision: number
          request_id: string
          source_id: string
          stage: string
          status: string
          updated_at: string
          user_id: string
          worker_id: string | null
        }
        SetofOptions: {
          from: "*"
          to: "video_audio_fix_jobs"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      claim_video_export: {
        Args: { p_worker: string }
        Returns: {
          attempts: number
          available_at: string
          completed_at: string | null
          created_at: string
          error_message: string | null
          expected_bytes: number | null
          id: string
          lease_expires_at: string | null
          lease_id: string | null
          manifest: Json
          output_bytes: number | null
          output_duration: number | null
          output_height: number | null
          output_path: string | null
          output_url: string | null
          output_width: number | null
          pool: string
          progress: number
          project_id: string
          project_revision: number
          quality: string
          renderer_version: string
          snapshot: Json
          stage: string
          status: string
          updated_at: string
          user_id: string
          worker_id: string | null
        }
        SetofOptions: {
          from: "*"
          to: "video_export_jobs"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      consume_first_ad_entitlement: {
        Args: { p_user_id: string; p_video_id: string }
        Returns: Json
      }
      consume_free_trial_image: {
        Args: { p_user_id: string }
        Returns: boolean
      }
      create_payment_table: { Args: never; Returns: undefined }
      deduct_credits: {
        Args: { p_amount: number; p_user_id: string }
        Returns: Json
      }
      deduct_credits_new: {
        Args: { p_amount: number; p_user_id: string }
        Returns: Json
      }
      dispatch_ad_generation: { Args: { p_request?: string }; Returns: number }
      dispatch_image_generation: {
        Args: { p_request?: string }
        Returns: number
      }
      dispatch_talking_videos: { Args: { p_id?: string }; Returns: number }
      enqueue_ad_generation: {
        Args: {
          p_context: Json
          p_kind: string
          p_payload: Json
          p_request: string
          p_user: string
        }
        Returns: {
          attempts: number
          available_at: string
          context: Json
          created_at: string
          cursor: number
          data: Json
          diagnostic: Json | null
          error: string | null
          kind: string
          lease_expires_at: string | null
          lease_id: string | null
          payload: Json
          request_id: string
          result: Json | null
          retries: number
          stage: string
          status: string
          updated_at: string
          user_id: string
        }
        SetofOptions: {
          from: "*"
          to: "ad_generation_jobs"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      enqueue_image_generation: {
        Args: {
          p_context: Json
          p_legacy?: boolean
          p_payload: Json
          p_request: string
          p_user: string
        }
        Returns: {
          attempts: number
          available_at: string
          context: Json
          created_at: string
          cursor: number
          data: Json
          debit: Json | null
          diagnostic: Json | null
          error: string | null
          free_image: boolean
          lease_expires_at: string | null
          lease_id: string | null
          payload: Json
          refunded_at: string | null
          request_id: string
          result: Json | null
          stage: string
          status: string
          updated_at: string
          user_id: string
        }
        SetofOptions: {
          from: "*"
          to: "image_generation_jobs"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      enqueue_video_audio_fix: {
        Args: {
          p_base?: string
          p_input: Json
          p_project: string
          p_request: string
          p_revision: number
          p_user: string
        }
        Returns: {
          artifacts: Json
          attempts: number
          available_at: string
          base_version_id: string | null
          completed_at: string | null
          created_at: string
          error_message: string | null
          id: string
          input: Json
          lease_expires_at: string | null
          lease_id: string | null
          pipeline_version: string
          pool: string
          progress: number
          project_id: string
          project_revision: number
          request_id: string
          source_id: string
          stage: string
          status: string
          updated_at: string
          user_id: string
          worker_id: string | null
        }
        SetofOptions: {
          from: "*"
          to: "video_audio_fix_jobs"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      enqueue_video_export: {
        Args: {
          p_manifest: Json
          p_project: string
          p_quality: string
          p_retry?: boolean
          p_revision: number
          p_snapshot: Json
          p_user: string
        }
        Returns: {
          attempts: number
          available_at: string
          completed_at: string | null
          created_at: string
          error_message: string | null
          expected_bytes: number | null
          id: string
          lease_expires_at: string | null
          lease_id: string | null
          manifest: Json
          output_bytes: number | null
          output_duration: number | null
          output_height: number | null
          output_path: string | null
          output_url: string | null
          output_width: number | null
          pool: string
          progress: number
          project_id: string
          project_revision: number
          quality: string
          renderer_version: string
          snapshot: Json
          stage: string
          status: string
          updated_at: string
          user_id: string
          worker_id: string | null
        }
        SetofOptions: {
          from: "*"
          to: "video_export_jobs"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      expire_plan_credits: { Args: never; Returns: undefined }
      finish_ad_generation: {
        Args: {
          p_data: Json
          p_diagnostic?: Json
          p_error?: string
          p_lease: string
          p_request: string
          p_result?: Json
          p_retry?: boolean
          p_stage: string
        }
        Returns: boolean
      }
      finish_image_generation: {
        Args: {
          p_data?: Json
          p_diagnostic?: Json
          p_error?: string
          p_lease: string
          p_request: string
          p_result?: Json
          p_retry?: boolean
        }
        Returns: boolean
      }
      get_all_auth_user_emails: {
        Args: never
        Returns: {
          email: string
          user_id: string
        }[]
      }
      get_auth_user_email: { Args: { p_user_id: string }; Returns: string }
      get_first_ad_state: { Args: { p_user_id: string }; Returns: Json }
      get_user_credit_balance: { Args: { p_user_id: string }; Returns: Json }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_ad_generation_worker: { Args: { p_token: string }; Returns: boolean }
      is_current_user_admin: { Args: never; Returns: boolean }
      process_video_refund: {
        Args: { p_user_id: string; p_video_id: string }
        Returns: Json
      }
      publish_video_audio_fix: {
        Args: {
          p_bytes: number
          p_captions: Json
          p_duration: number
          p_job: string
          p_lease: string
          p_master: string
          p_media: string
          p_path: string
          p_url: string
          p_words: Json
        }
        Returns: string
      }
      refund_image_generation: {
        Args: { p_request: string }
        Returns: undefined
      }
      remove_plan_credits: { Args: { p_user_id: string }; Returns: undefined }
      reserve_product_ad_audio_preview: {
        Args: {
          p_request: Json
          p_retry?: boolean
          p_revision: string
          p_storyboard_id: string
          p_user_id: string
        }
        Returns: {
          attempts: number
          audio_url: string | null
          created_at: string
          error: string | null
          id: string
          object_key: string | null
          request: Json
          revision: string
          status: string
          storyboard_request_id: string
          updated_at: string
          user_id: string
        }
        SetofOptions: {
          from: "*"
          to: "product_ad_audio_previews"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      reserve_video_editor_media: {
        Args: {
          p_byte_size: number
          p_content_type: string
          p_duration?: number
          p_file_name: string
          p_height?: number
          p_kind: string
          p_project_id: string
          p_user_id: string
          p_width?: number
        }
        Returns: {
          byte_size: number
          content_type: string
          created_at: string
          duration_seconds: number | null
          file_name: string
          height: number | null
          id: string
          kind: string
          project_id: string
          status: string
          storage_path: string
          updated_at: string
          url: string | null
          user_id: string
          width: number | null
        }
        SetofOptions: {
          from: "*"
          to: "video_editor_media"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      reset_freepoint: { Args: never; Returns: undefined }
      restore_first_ad_entitlement: {
        Args: { p_user_id: string; p_video_id: string }
        Returns: Json
      }
      save_ad_generation_prompt: {
        Args: {
          p_content: string
          p_key: string
          p_user: string
          p_version: number
        }
        Returns: Json
      }
      set_my_lead_type: { Args: { p_lead_type: string }; Returns: string }
      set_plan_credits: {
        Args: { p_plan_credits: number; p_user_id: string }
        Returns: undefined
      }
      set_plan_credits_new: {
        Args: {
          p_expiry_date: string
          p_plan_credit: number
          p_user_id: string
        }
        Returns: undefined
      }
      should_show_brand_onboarding: { Args: never; Returns: boolean }
      support_assistant_finish: {
        Args: {
          p_error?: string
          p_metadata: Json
          p_reason: string
          p_reply: string
          p_route: string
          p_summary: string
          p_turn: string
        }
        Returns: Json
      }
      support_assistant_handoff: {
        Args: {
          p_admin?: boolean
          p_resolve?: boolean
          p_ticket: string
          p_user: string
        }
        Returns: Json
      }
      support_assistant_recover: { Args: { p_user: string }; Returns: number }
      support_assistant_recover_all: { Args: never; Returns: number }
      support_assistant_submit: {
        Args: {
          p_asset: string
          p_attachment: string
          p_body: string
          p_category: string
          p_request: string
          p_ticket: string
          p_user: string
        }
        Returns: Json
      }
      talking_restore_debit: {
        Args: { p_debit: Json; p_user: string }
        Returns: undefined
      }
      talking_video_checkpoint: {
        Args: {
          p_artifacts: Json
          p_complete?: Json
          p_error?: string
          p_id: string
          p_lease: string
          p_output?: string
          p_stage: string
          p_task?: string
          p_uncertain?: boolean
        }
        Returns: boolean
      }
      talking_video_claim: {
        Args: { p_id: string }
        Returns: {
          artifacts: Json
          attempts: number
          available_at: string
          created_at: string
          debit: Json
          error_code: string | null
          id: string
          input: Json
          lease_expires_at: string | null
          lease_id: string | null
          provider_output_url: string | null
          provider_task_id: string | null
          stage: string
          status: string
          updated_at: string
          user_id: string
          video_id: string
        }
        SetofOptions: {
          from: "*"
          to: "talking_video_jobs"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      talking_video_enqueue: {
        Args: { p_id: string; p_input: Json; p_user: string }
        Returns: {
          artifacts: Json
          attempts: number
          available_at: string
          created_at: string
          debit: Json
          error_code: string | null
          id: string
          input: Json
          lease_expires_at: string | null
          lease_id: string | null
          provider_output_url: string | null
          provider_task_id: string | null
          stage: string
          status: string
          updated_at: string
          user_id: string
          video_id: string
        }
        SetofOptions: {
          from: "*"
          to: "talking_video_jobs"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      talking_voice_begin: {
        Args: { p_id: string; p_input: Json; p_kind: string; p_user: string }
        Returns: Json
      }
      talking_voice_finish: {
        Args: {
          p_error?: string
          p_id: string
          p_output?: Json
          p_uncertain?: boolean
        }
        Returns: undefined
      }
      talking_voice_recover: { Args: never; Returns: undefined }
      update_combined_credit: {
        Args: { p_user_id: string }
        Returns: undefined
      }
      update_user_credits: {
        Args: { p_credits_to_add: number; p_user_id: string }
        Returns: undefined
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
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
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
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
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
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
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
