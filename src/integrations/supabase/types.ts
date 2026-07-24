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
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
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
          id?: string
          imgid?: string
          percentage?: number | null
          size?: number | null
          status?: string
          timetaken?: number | null
          user_id?: string
          user_type?: string | null
        }
        Relationships: []
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
          category: string | null
          created_at: string
          global_video_url: string | null
          id: number
          is_active: boolean | null
          name: string | null
          preview_image: string | null
          priority: number | null
          prompt: string | null
          tags: string | null
          top_name: string | null
          type: string | null
          video_url: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          global_video_url?: string | null
          id?: number
          is_active?: boolean | null
          name?: string | null
          preview_image?: string | null
          priority?: number | null
          prompt?: string | null
          tags?: string | null
          top_name?: string | null
          type?: string | null
          video_url?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string
          global_video_url?: string | null
          id?: number
          is_active?: boolean | null
          name?: string | null
          preview_image?: string | null
          priority?: number | null
          prompt?: string | null
          tags?: string | null
          top_name?: string | null
          type?: string | null
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
          has_seen_tutorial: boolean | null
          id: string
          images: Json[] | null
          imagetimeline: Json[] | null
          imgpreview: string | null
          imgstatus: string | null
          is_indian_user: boolean | null
          last_daily_reset: string | null
          message: string | null
          mobile_number: string | null
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
        }
        Insert: {
          ad_id?: number | null
          aibrainkey?: string
          aichangescrpit?: string | null
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
          has_seen_tutorial?: boolean | null
          id: string
          images?: Json[] | null
          imagetimeline?: Json[] | null
          imgpreview?: string | null
          imgstatus?: string | null
          is_indian_user?: boolean | null
          last_daily_reset?: string | null
          message?: string | null
          mobile_number?: string | null
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
        }
        Update: {
          ad_id?: number | null
          aibrainkey?: string
          aichangescrpit?: string | null
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
          has_seen_tutorial?: boolean | null
          id?: string
          images?: Json[] | null
          imagetimeline?: Json[] | null
          imgpreview?: string | null
          imgstatus?: string | null
          is_indian_user?: boolean | null
          last_daily_reset?: string | null
          message?: string | null
          mobile_number?: string | null
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
          face_detection: Json[] | null
          id: string
          logo_json: Json | null
          model_used: string
          music_json: Json | null
          nanabannatimeout: number | null
          percentage: number | null
          raw_video_json: Json | null
          resolution: string | null
          size: number | null
          status: string
          timetaken: number | null
          type: string | null
          user_type: string | null
          video_duration: number | null
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
          face_detection?: Json[] | null
          id: string
          logo_json?: Json | null
          model_used?: string
          music_json?: Json | null
          nanabannatimeout?: number | null
          percentage?: number | null
          raw_video_json?: Json | null
          resolution?: string | null
          size?: number | null
          status?: string
          timetaken?: number | null
          type?: string | null
          user_type?: string | null
          video_duration?: number | null
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
          face_detection?: Json[] | null
          id?: string
          logo_json?: Json | null
          model_used?: string
          music_json?: Json | null
          nanabannatimeout?: number | null
          percentage?: number | null
          raw_video_json?: Json | null
          resolution?: string | null
          size?: number | null
          status?: string
          timetaken?: number | null
          type?: string | null
          user_type?: string | null
          video_duration?: number | null
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
      [_ in never]: never
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
      admin_get_user_identity: {
        Args: { p_user_ids: string[] }
        Returns: {
          email: string
          user_id: string
        }[]
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
      expire_plan_credits: { Args: never; Returns: undefined }
      get_all_auth_user_emails: {
        Args: never
        Returns: {
          email: string
          user_id: string
        }[]
      }
      get_auth_user_email: { Args: { p_user_id: string }; Returns: string }
      get_user_credit_balance: { Args: { p_user_id: string }; Returns: Json }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_current_user_admin: { Args: never; Returns: boolean }
      process_video_refund: {
        Args: { p_user_id: string; p_video_id: string }
        Returns: Json
      }
      remove_plan_credits: { Args: { p_user_id: string }; Returns: undefined }
      reset_freepoint: { Args: never; Returns: undefined }
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
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
