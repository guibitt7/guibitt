/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.discordapp.com',
          port: '',
          pathname: '/app-assets/**',
        },
        {
          protocol: 'https',
          hostname: 'i.scdn.co',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'portfolio-gold-three-51.vercel.app',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'i.gifer.com',
          port: '',
          pathname: '/**',
        },
      ],     
    },
};

export default nextConfig;
