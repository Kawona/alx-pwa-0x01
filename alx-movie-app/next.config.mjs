import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */
const withPWA = withPWAInit({
  dest: "public",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com"],
  },
  turbopack: {}, // 👈 Added to silence Turbopack warning
};

export default withPWA({
  ...nextConfig,
});
