/** @type {import('next').NextConfig} */
const nextConfig = {
    // make a fully static export for Cloudflare Pages
    output: 'export',
    // allow <Image> without Next's image optimizer
    images: { unoptimized: true },
  };
  
  export default nextConfig;