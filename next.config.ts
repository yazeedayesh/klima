import type { NextConfig } from "next";

const isGithubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/klima" : "";

const nextConfig: NextConfig = {
  ...(isGithubPages && {
    output: "export",
    basePath,
    assetPrefix: basePath,
    images: { unoptimized: true },
  }),
};

export default nextConfig;
