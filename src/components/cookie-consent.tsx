"use client";

import Link from "next/link";
import Script from "next/script";
import { useSyncExternalStore } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const KEY = "klimaro-consent";
const EVENT = "klimaro:consent";

type Choice = "granted" | "denied" | "unset";

function read(): Choice {
  try {
    const v = localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : "unset";
  } catch {
    return "unset";
  }
}
function subscribe(cb: () => void) {
  window.addEventListener(EVENT, cb);
  return () => window.removeEventListener(EVENT, cb);
}

function choose(choice: "granted" | "denied") {
  try {
    localStorage.setItem(KEY, choice);
  } catch {
    /* ignore */
  }
  window.gtag?.("consent", "update", {
    analytics_storage: choice,
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
  });
  window.dispatchEvent(new Event(EVENT));
}

// Renders nothing unless NEXT_PUBLIC_GA_ID is set — no analytics, no cookies, no banner.
export function CookieConsent() {
  const choice = useSyncExternalStore(subscribe, read, () => "denied" as Choice);
  if (!GA_ID) return null;

  const bootstrap = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;
var c='denied';try{if(localStorage.getItem('${KEY}')==='granted')c='granted'}catch(e){}
gtag('consent','default',{analytics_storage:c,ad_storage:c,ad_user_data:c,ad_personalization:c});
gtag('js',new Date());gtag('config','${GA_ID}');`;

  return (
    <>
      <Script id="ga-bootstrap" strategy="afterInteractive">
        {bootstrap}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      {choice === "unset" && (
        <div
          role="dialog"
          aria-label="Súbory cookie"
          className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-xl rounded-lg border border-line bg-white p-5 shadow-lg sm:inset-x-auto sm:left-6 sm:bottom-6"
        >
          <p className="mb-4 text-sm text-ink-soft">
            Používame analytické cookies, aby sme vedeli, ktoré stránky vám pomáhajú. Bez vášho súhlasu sa
            nespustia.{" "}
            <Link href="/ochrana-osobnych-udajov" className="underline">
              Viac o ochrane údajov
            </Link>
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => choose("granted")}
              className="rounded-md bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-800"
            >
              Povoliť analytiku
            </button>
            <button
              type="button"
              onClick={() => choose("denied")}
              className="rounded-md border border-line px-4 py-2.5 text-sm font-semibold text-ink hover:bg-paper"
            >
              Odmietnuť
            </button>
          </div>
        </div>
      )}
    </>
  );
}
