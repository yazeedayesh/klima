import type { NextConfig } from "next";

const isGithubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/klima" : "";

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export",
        basePath,
        assetPrefix: basePath,
        images: { unoptimized: true },
      }
    : {
        // Staré URL → nové (301). Na GitHub Pages (static export) redirecty nefungujú.
        async redirects() {
          return [
            { source: "/cenik", destination: "/cennik", permanent: true },
            { source: "/produkty", destination: "/klimatizacie", permanent: true },
            { source: "/sluzby", destination: "/klimatizacie", permanent: true },
            { source: "/sluzby/predaj-klimatizacii", destination: "/klimatizacie/predaj", permanent: true },
            { source: "/sluzby/montaz-klimatizacie", destination: "/klimatizacie/montaz", permanent: true },
            { source: "/sluzby/servis-a-udrzba", destination: "/klimatizacie/servis", permanent: true },
            { source: "/sluzby/tepelne-cerpadla", destination: "/tepelne-cerpadla", permanent: true },
          ];
        },
      }),
};

export default nextConfig;
