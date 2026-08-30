import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export const alt = `${site.name} – Montáž a predaj klimatizácií Košice`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: "#0A1830",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 76,
              height: 76,
              borderRadius: 20,
              background: "#111f38",
              fontSize: 44,
              fontWeight: 800,
            }}
          >
            K
          </div>
          <div style={{ display: "flex", width: 14, height: 14, borderRadius: 999, background: "#F5821F" }} />
        </div>

        <div style={{ display: "flex", fontSize: 88, fontWeight: 800, marginTop: 48, letterSpacing: -2 }}>
          {site.name}
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#AFC0D9", marginTop: 18 }}>
          Montáž a predaj klimatizácií · Košice a okolie
        </div>

        <div style={{ display: "flex", gap: 16, marginTop: 56 }}>
          {["Predaj", "Montáž", "Servis", "Tepelné čerpadlá"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                padding: "10px 22px",
                borderRadius: 999,
                border: "1px solid #2C3F5F",
                fontSize: 24,
                color: "#D7E0EE",
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
