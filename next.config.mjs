/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build a fully static site into the `out/` folder
  output: "export",

  // Required for static export: skip Next's image optimizer (Netlify static can't run it)
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
    ],
  },

  // Each route becomes /foo/index.html — Netlify serves these cleanly under /foo and /foo/
  trailingSlash: true,

  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
