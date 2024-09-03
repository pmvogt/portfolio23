/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'coaytnuq74jt62ad.public.blob.vercel-storage.com',
        pathname: '/ai-pics/**',
      },
    ],
  },
};

export default nextConfig;
