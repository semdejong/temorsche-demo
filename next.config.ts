import type { NextConfig } from "next";

const routes: [string, string][] = [
  ["/Home", "/"],
  ["/Schakel-ons-in-voor", "/diensten"],
  ["/Schakel-ons-in-voor/Schilderwerk", "/diensten/schilderwerk"],
  ["/Schakel-ons-in-voor/Glasservice", "/diensten/glasservice"],
  ["/Schakel-ons-in-voor/Kleuradvies", "/diensten/kleuradvies"],
  ["/Schakel-ons-in-voor/Spuitwerk", "/diensten/spuitwerk"],
  ["/Schakel-ons-in-voor/Behang", "/diensten/behang"],
  ["/Schakel-ons-in-voor/Restauratie", "/monumenten-en-restauratie"],
  ["/Glasservice", "/diensten/glasservice"],
  ["/Kleuradvies", "/diensten/kleuradvies"],
  ["/Spuitwerk", "/diensten/spuitwerk"],
  ["/Behang", "/diensten/behang"],
  ["/Restauratie", "/monumenten-en-restauratie"],
  ["/Over-Te-Morsche", "/over-ons"],
  ["/Over-Te-Morsche/Kwaliteitsregeling", "/monumenten-en-restauratie"],
  ["/Contact/Kasteel-Middachten", "/monumenten-en-restauratie"],
  ["/VITRISnet", "https://www.te-morsche.nl/VITRISnet/"],
];

const ownPages = [
  "/offerte",
  "/diensten",
  "/diensten/schilderwerk",
  "/diensten/spuitwerk",
  "/diensten/glasservice",
  "/diensten/kleuradvies",
  "/diensten/behang",
  "/monumenten-en-restauratie",
  "/projecten",
  "/over-ons",
  "/contact",
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  skipTrailingSlashRedirect: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  async redirects() {
    const legacy = routes.flatMap(([source, destination]) => [
      { source, destination, permanent: false },
      { source: `${source}/`, destination, permanent: false },
    ]);
    const slashes = ownPages.map((destination) => ({
      source: `${destination}/`,
      destination,
      permanent: false,
    }));
    return [...legacy, ...slashes];
  },
};

export default nextConfig;
