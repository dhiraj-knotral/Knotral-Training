import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ZohoForm from "@/components/ZohoForm/ZohoForm";
import React from "react";

export default async function RegisterPage({ params }) {
    const { slug } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/webinars/get-webinar-by-slug?slug=${slug}`,
    { cache: "no-store" }
  );

  const data = await res.json();

  const webinar = data.success ? data.response : null;


  try {
  await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/webinars/increment-views`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ webinarId: webinar._id }),
  });
} catch (err) {
  console.error("Failed to increment views:", err);
}

  return (
    <div>
      <Header />
      <ZohoForm webinar={webinar} />
      <Footer />
    </div>
  );
}