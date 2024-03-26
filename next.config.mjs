/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivityPosition: "bottom-right",
  },
  experimental: {
    typedRoutes: true,
  },
  generateBuildId: process.env.GIT_HASH,
  images: {
    remotePatterns: [
      {
        hostname: "*.public.blob.vercel-storage.com",
        port: "",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
