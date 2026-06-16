import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0806",
          color: "#F4EEE6",
        }}
      >
        <div
          style={{
            fontSize: 16,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#9C8E84",
            marginBottom: 28,
          }}
        >
          Salon de Coiffure — Paris
        </div>
        <div
          style={{
            fontSize: 88,
            fontFamily: "serif",
            fontStyle: "italic",
            color: "#F4EEE6",
          }}
        >
          Maison Céleste
        </div>
        <div
          style={{
            width: 120,
            height: 1,
            background: "#C4968A",
            marginTop: 36,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
