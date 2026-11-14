"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

// One delegated listener: every tel: and wa.me link on the site counts as a conversion.
export function TrackClicks() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = (event.target as HTMLElement | null)?.closest?.("a");
      const href = link?.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) track("klik_telefon", { stranka: location.pathname });
      else if (href.includes("wa.me")) track("klik_whatsapp", { stranka: location.pathname });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
