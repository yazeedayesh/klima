import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Staré URL → nové (301).
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
};

export default nextConfig;
