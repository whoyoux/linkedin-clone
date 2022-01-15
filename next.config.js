/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: false,
    images: {
        domains: [
            'rb.gy',
            'lh3.googleusercontent.com',
            'scontent.fktw1-1.fna.fbcdn.net'
        ]
    }
};

module.exports = nextConfig;
