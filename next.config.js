/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "st.nettruyenmax.com",
      "comics-api.vercel.app",
      "st.ntcdntempv3.com",
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig
