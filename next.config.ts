import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  typescript: { ignoreBuildErrors: true },
  experimental: { useTypeScriptCli: false, cpus: 1, workerThreads: true },
};

export default nextConfig;
