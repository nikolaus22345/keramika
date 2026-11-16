import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Naslovnica cilja ključnu riječ "Keramičar Split", pa /keramicar-split
    // vodi na naslovnicu da dvije stranice ne konkuriraju istoj riječi.
    return [{ source: "/keramicar-split", destination: "/", permanent: true }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
