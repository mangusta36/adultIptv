import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OGImage() {
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
          <span
            style={{
              color: "#E50914",
              fontSize: "24px",
              fontWeight: 600,
            }}
          >
            Premium Adult IPTV
          </span>
          <h1
            style={{
              color: "#FFFFFF",
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Adult IPTV Channels With
            <br />
            Premium HD, 4K & 8K Streaming
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
          <div
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "32px",
            }}
          >
            <div
              style={{
                background: "#E50914",
                color: "#FFFFFF",
                padding: "16px 48px",
                borderRadius: "12px",
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              Get Started
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            right: "-100px",
            bottom: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(229,9,20,0.08) 0%, transparent 70%)",
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
