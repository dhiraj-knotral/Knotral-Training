"use client";

export default function ZohoForm({
  src,
  title = "Zoho Form",
  height = "500px",
}) {
  return (
    <iframe
      aria-label={title}
      src={src}
      style={{
        width: "100%",
        height,
        border: "none",
      }}
      loading="lazy"
    />
  );
}
