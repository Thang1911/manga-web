/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "st.nettruyenmax.com",
      "comics-api.vercel.app",
      "st.ntcdntempv3.com",
      "nettruyenco.vn",
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig
