/// <reference types="vite/client" />

interface Window {
  fbq?: (
    method: string,
    eventName?: string,
    params?: Record<string, unknown>,
    options?: { eventID?: string },
  ) => void;
}
