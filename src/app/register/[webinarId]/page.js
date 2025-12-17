"use client";
import ZohoForm from "@/components/ZohoForm/ZohoForm";
import React from "react";

export default function RegisterPage({ params }) {
  const { webinarId } = params;

  // You can fetch webinar info by ID if needed
  const zohoSrc = "https://forms.zohopublic.in/indiamarketentry/form/RegisterforTraining/formperma/bPXnJMr4V7N14B_0fPG0HTQIFaLIDwLTtIe91UorGCc";

  return (
    <div style={{ padding: "24px" }}>
      <ZohoForm src={zohoSrc} height="700px" />
    </div>
  );
}