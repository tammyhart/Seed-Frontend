/** @type {import('next').NextConfig} */

import process from "node:process"

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["jsx", "js", "tsx", "ts"],
  webpack: config => {
    config.module.rules.push({
      test: /\.(tsx|ts|js|jsx|mjs)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "@linaria/webpack-loader",
          options: {
            sourceMap: process.env.NODE_ENV !== "production",
          },
        },
      ],
    })

    return config
  },
}

export default nextConfig
