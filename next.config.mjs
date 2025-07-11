/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Para GitHub Pages
  trailingSlash: true, // Requerido para GitHub Pages
  images: {
    unoptimized: true, // Requerido para export estático
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: '', // Sin basePath para dominio personalizado
  assetPrefix: '', // Sin assetPrefix para dominio personalizado
}

export default nextConfig