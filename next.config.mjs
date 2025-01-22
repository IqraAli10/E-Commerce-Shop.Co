/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "cdn.sanity.io", // Allow images from Sanity CDN
          
          },
        ],
      },
};

export default nextConfig;
