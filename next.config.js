/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['encrypted-tbn0.gstatic.com'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**',
            //   port: '',
            //   pathname: '/account123/**',
            },
          ],
      },
};

module.exports = nextConfig;
