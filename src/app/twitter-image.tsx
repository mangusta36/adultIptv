import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #050505 0%, #0B0B0B 50%, #050505 100%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <h1
            style={{
              color: "#FFFFFF",
              fontSize: "56px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Adult IPTV Channels
            <br />
            Premium HD, 4K & 8K
          </h1>
          <p
            style={{
              color: "#A1A1AA",
              fontSize: "24px",
              margin: 0,
              marginTop: "8px",
            }}
          >
            25,000+ Channels · 4K/8K Streaming · 99.9% Uptime · 24/7 Support
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
