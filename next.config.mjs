/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'evento.addon-sport.com',
                port: '',
                pathname: '/documentos/**',
            },
        ],
    },
};

export default nextConfig;
