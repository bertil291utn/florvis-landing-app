/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['res.cloudinary.com','images.pexels.com'], // Add your image domains here if needed
  },
  optimizeFonts: false, // Disable font optimization to prevent timeout issues
};

module.exports = nextConfig;