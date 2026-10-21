/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "nileuniversity.edu.ng", pathname: "/wp-content/uploads/**" },
    ],
    // nileuniversity.edu.ng is explicitly allowlisted above (not attacker-controlled), but on
    // some networks it resolves to a private IP (e.g. a VPN or local DNS override), which Next's
    // SSRF guard blocks by default. Safe to allow here since the hostname itself is already trusted.
    dangerouslyAllowLocalIP: true,
  },
  async redirects() {
    return [
      { source: "/single-course", destination: "/courses/bsc-biology", permanent: true },
    ]
  },
}

export default nextConfig
