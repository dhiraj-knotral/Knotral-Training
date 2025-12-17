"use client";
import ZohoForm from "@/components/ZohoForm/ZohoForm";

export default function ContactPage() {
  const zohoSrc =
    "https://forms.zohopublic.in/indiamarketentry/form/RegisterforTraining/formperma/bPXnJMr4V7N14B_0fPG0HTQIFaLIDwLTtIe91UorGCc";

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Contact Us</h1>
      <p style={{ marginBottom: "24px" }}>
        Fill out the form below and our team will get back to you.
      </p>

      <ZohoForm src={zohoSrc} height="750px" />
    </div>
  );
}