import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1826",
        }}
      >
        <svg viewBox="0 0 64 64" width="128" height="128" fill="none">
          <rect x="9" y="17" width="46" height="19" rx="8" fill="none" stroke="#FFFFFF" strokeWidth="5" />
          <line x1="17" y1="25.5" x2="47" y2="25.5" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
          <line x1="17" y1="30.5" x2="41" y2="30.5" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
          <path d="M16 39c-1 7 4 11 11 10" fill="none" stroke="#ff9a3d" strokeWidth="5" strokeLinecap="round" />
          <path d="M33 39c-1 5.5 2.5 8.5 8 8" fill="none" stroke="#ff9a3d" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
