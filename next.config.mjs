import withLinaria from "next-with-linaria"

/** @type {import('next-with-linaria').LinariaConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["jsx", "js", "tsx", "ts"],
  linaria: {
    displayName: true,
  },
}

export default withLinaria(nextConfig)
