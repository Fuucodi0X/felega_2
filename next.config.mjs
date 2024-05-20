/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://api.example.com/:path*',
          },
        ]
      },
};

export default nextConfig;
