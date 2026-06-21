export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/svg+xml";

export default async function OGImage() {
  return new Response(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#050505"/>
          <stop offset="50%" stop-color="#0B0B0B"/>
          <stop offset="100%" stop-color="#050505"/>
        </linearGradient>
        <radialGradient id="glow" cx="100%" cy="100%" r="50%">
          <stop offset="0%" stop-color="rgba(229,9,20,0.08)"/>
          <stop offset="70%" stop-color="transparent"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)"/>
      <circle cx="1100" cy="730" r="250" fill="url(#glow)"/>
      <text x="80" y="140" font-family="system-ui, sans-serif" font-size="24" font-weight="600" fill="#E50914">Premium Adult IPTV</text>
      <text x="80" y="220" font-family="system-ui, sans-serif" font-size="64" font-weight="700" fill="#FFFFFF" letter-spacing="-1">
        <tspan x="80" dy="0">Adult IPTV Channels With</tspan>
        <tspan x="80" dy="72">Premium HD, 4K &amp; 8K Streaming</tspan>
      </text>
      <text x="80" y="340" font-family="system-ui, sans-serif" font-size="24" fill="#A1A1AA">25,000+ Channels · 4K/8K Streaming · 99.9% Uptime · 24/7 Support</text>
      <rect x="80" y="390" width="180" height="56" rx="12" fill="#E50914"/>
      <text x="170" y="426" font-family="system-ui, sans-serif" font-size="20" font-weight="600" fill="#FFFFFF" text-anchor="middle">Get Started</text>
    </svg>`,
    {
      headers: {
        "content-type": "image/svg+xml",
        "cache-control":
          process.env.NODE_ENV === "development"
            ? "no-cache, no-store"
            : "public, immutable, no-transform, max-age=31536000",
      },
      status: 200,
    },
  );
}
