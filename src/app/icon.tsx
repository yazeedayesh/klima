import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0b1826",
          borderRadius: 7,
        }}
      >
        <svg viewBox="0 0 64 64" width="32" height="32" fill="none">
          <rect x="9" y="17" width="46" height="19" rx="8" fill="none" stroke="#FFFFFF" strokeWidth="6" />
          <line x1="17" y1="25.5" x2="47" y2="25.5" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
          <path d="M16 39c-1 7 4 11 11 10" fill="none" stroke="#ff9a3d" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
