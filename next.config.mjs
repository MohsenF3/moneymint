/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    images: {
      loader: "custom",
      loaderFile: "./loader.js",
    },
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
