import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["dummyimage.com", "plus.unsplash.com"], // Add allowed domains here
  },
  experimental:{
    after: true,
  },
  devIndicators: {
    appIsrStatus: true, 
    buildActivity: true, 
    buildActivityPosition: "bottom-right",
  }
};

export default nextConfig;
