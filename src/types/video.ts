export interface VideoData {
  id: string;
  created_at: string;
  link: string;
  category: string;
  language: string;
  description: string;
  type: string;
}

export type CategoryFilter = string | 'All';
