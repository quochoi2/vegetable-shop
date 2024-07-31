/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: 'http',
            hostname: 'localhost',
            port: '8000',
            pathname: '/**',
         },
         {
            protocol: 'https',
            hostname: 't4.ftcdn.net',
            pathname: '/**',
         },
         {
            protocol: 'https',
            hostname: 't3.ftcdn.net',
            pathname: '/**',
         },
      ],
   },
}

export default nextConfig
