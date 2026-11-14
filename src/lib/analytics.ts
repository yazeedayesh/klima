// Thin wrapper so components never touch window.gtag directly.
// Events only fire when GA is loaded (NEXT_PUBLIC_GA_ID set and consent given).
type Params = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function track(event: "klik_telefon" | "klik_whatsapp" | "odoslanie_dopytu", params: Params = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}
