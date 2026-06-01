import posthog from 'posthog-js';

let initialized = false;

export const initPostHog = () => {
  if (initialized || typeof window === 'undefined') return;
  posthog.init('phc_TwlqBhZs7CvuCA4eqnVyxasE4Dj9O1FCzOkYYxelDU6', {
    api_host: 'https://us.i.posthog.com',
    person_profiles: 'identified_only',
    capture_pageview: true,
    capture_pageleave: true,
    autocapture: true,
    session_recording: {
      maskAllInputs: false,
    },
    disable_session_recording: false,
  });
  initialized = true;
};

export { posthog };
