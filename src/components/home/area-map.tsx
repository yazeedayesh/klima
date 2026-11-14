import Link from "next/link";
import { areas } from "@/lib/areas-data";
import { site } from "@/lib/site";

const SIZE = 560;
const C = SIZE / 2;
const KM = 2.35; // px per km → 100 km = 235 px

// where each label sits relative to its dot, so the eastern cluster doesn't collide
const LABEL: Record<string, { dx: number; dy: number; anchor: "start" | "middle" | "end" }> = {
  presov: { dx: 12, dy: 5, anchor: "start" },
  "moldava-nad-bodvou": { dx: -12, dy: 16, anchor: "end" },
  roznava: { dx: -12, dy: 5, anchor: "end" },
  secovce: { dx: -10, dy: 20, anchor: "end" },
  michalovce: { dx: 12, dy: -4, anchor: "start" },
  trebisov: { dx: 12, dy: 16, anchor: "start" },
};

// Real geography: every town is plotted by its distance and bearing from Košice.
export function AreaMap() {
  const towns = areas.filter((a) => a.distanceKm > 0);
  return (
    <svg viewBox={`-62 0 ${SIZE + 124} ${SIZE}`} className="w-full" role="img" aria-label={`Mapa pôsobnosti: Košice a okolie do ${site.radiusKm} km`}>
      {[25, 50, 75, 100].map((km) => (
        <g key={km}>
          <circle
            cx={C}
            cy={C}
            r={km * KM}
            fill={km === 100 ? "rgba(255,255,255,.03)" : "none"}
            stroke="rgba(255,255,255,.18)"
            strokeWidth={km === 100 ? 1.5 : 1}
            strokeDasharray={km === 100 ? undefined : "3 6"}
          />
          <text x={C} y={C + km * KM - 7} textAnchor="middle" fontSize="12" fontWeight="600" fill="rgba(255,255,255,.42)" className="num">
            {km} km
          </text>
        </g>
      ))}

      {towns.map((a) => {
        const rad = (a.bearing * Math.PI) / 180;
        const x = C + a.distanceKm * KM * Math.sin(rad);
        const y = C - a.distanceKm * KM * Math.cos(rad);
        const l = LABEL[a.slug] ?? { dx: 12, dy: 5, anchor: "start" as const };
        return (
          <Link key={a.slug} href={`/oblasti/${a.slug}`} className="group">
            <line x1={C} y1={C} x2={x} y2={y} stroke="rgba(255,255,255,.14)" strokeWidth="1" />
            <circle cx={x} cy={y} r="14" fill="transparent" />
            <circle cx={x} cy={y} r="5" fill="#fff" className="transition-[r] group-hover:[r:7]" />
            <text x={x + l.dx} y={y + l.dy} textAnchor={l.anchor} fontSize="18" fontWeight="700" fill="#fff" className="group-hover:underline">
              {a.name}
              <tspan fontSize="13" fontWeight="500" fill="rgba(255,255,255,.55)" className="num">
                {"  "}
                {a.distanceKm} km
              </tspan>
            </text>
          </Link>
        );
      })}

      <circle cx={C} cy={C} r="16" fill="var(--accent-glow)" opacity=".35" className="origin-center animate-ping [transform-box:fill-box]" />
      <circle cx={C} cy={C} r="9" fill="var(--accent-glow)" />
      <text x={C} y={C - 20} textAnchor="middle" fontSize="19" fontWeight="800" fill="#fff">
        Košice
      </text>
    </svg>
  );
}
