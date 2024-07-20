import bundleAnalyzer from "@next/bundle-analyzer";

// Analyzing your bundles
// Run the following command to analyze your bundles
// ANALYZE=true npm run build
// Ref: https://nextjs.org/docs/app/building-your-application/optimizing/bundle-analyzer
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withBundleAnalyzer(nextConfig);
