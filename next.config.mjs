/** @type {import('next').NextConfig} */
const nextConfig = {
    //Enable partial pre-rendring
    experimental: {
        ppr: 'incremental',
    },
    //Enable caching log
    logging: {
        fetches: {
          fullUrl: true,
        },
      },
};

export default nextConfig;
