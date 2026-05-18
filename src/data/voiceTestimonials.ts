export type VoiceTestimonial = {
  id: string;
  name: string;
  role: string; // e.g. "Founder, Brand Name"
  photo?: string; // optional /testimonials/<slug>.jpg — falls back to initials
  audio: string;
  quote?: string; // optional short pull-quote
};

// Add a new client = add one entry here + drop the .m4a (and optional .jpg) in public/testimonials/
export const voiceTestimonials: VoiceTestimonial[] = [
  {
    id: 'meet-shah',
    name: 'Meet Shah',
    role: 'D2C Brand Owner',
    audio: '/testimonials/meetshah.m4a',
  },
  {
    id: 'khushi',
    name: 'Khushi',
    role: 'E-commerce Seller',
    audio: '/testimonials/khushi.m4a',
  },
  {
    id: 'sriniwasa',
    name: 'Sriniwasa',
    role: 'Performance Marketer',
    audio: '/testimonials/sriniwasa.m4a',
  },
  {
    id: 'tarun',
    name: 'Tarun',
    role: 'Founder',
    audio: '/testimonials/tarun.m4a',
  },
  {
    id: 'sahil-garments',
    name: 'Sahil',
    role: 'Founder, Garment Brand',
    audio: '/testimonials/feedback7.m4a',
    quote: 'Tried many AI video tools. Zockto is the easiest — one prompt and the video is ready in great quality.',
  },
  {
    id: 'neha-beauty',
    name: 'Neha',
    role: 'Co-founder, Skincare Brand',
    audio: '/testimonials/feedback8.m4a',
    quote: 'Super easy to use. Upload the product, pick a template, and the videos come out original and on-brand.',
  },
];
