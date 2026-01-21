import withLinaria from "next-with-linaria"

/** @type {import('next-with-linaria').LinariaConfig} */
const nextConfig = {
  devIndicators: false,
  reactStrictMode: true,
  pageExtensions: ["jsx", "js", "tsx", "ts"],
  linaria: {
    displayName: true,
    fastCheck: false,
  },
}

export default withLinaria(nextConfig)
