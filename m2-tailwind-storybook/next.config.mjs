/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "heymondo.es",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
