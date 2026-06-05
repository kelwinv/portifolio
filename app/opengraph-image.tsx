import { ImageResponse } from "next/og";

export const alt = "Kelwin Vieira — Desenvolvedor Full Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #d0cce9 0%, #ebe8ff 45%, #f5f3ff 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "48px 56px",
            borderRadius: "24px",
            background: "#0f0d1d",
            boxShadow: "0 24px 64px rgba(15, 13, 29, 0.2)",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 600,
              color: "#e62e62",
              letterSpacing: "0.02em",
            }}
          >
            Portfólio
          </p>
          <h1
            style={{
              margin: "16px 0 0",
              fontSize: 72,
              fontWeight: 700,
              color: "#ebe8ff",
              lineHeight: 1.05,
            }}
          >
            Kelwin Vieira
          </h1>
          <p
            style={{
              margin: "20px 0 0",
              fontSize: 36,
              fontWeight: 500,
              color: "#d0cce9",
            }}
          >
            Desenvolvedor Full Stack
          </p>
          <p
            style={{
              margin: "28px 0 0",
              fontSize: 26,
              color: "#ebe8ff99",
            }}
          >
            React · Next.js · Node.js · Nest.js · AWS · Docker
          </p>
        </div>
      </div>
    ),
    { ...size },
  );
}
