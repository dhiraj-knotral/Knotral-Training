import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ZohoForm from "@/components/ZohoForm/ZohoForm";
import { cookies } from "next/headers";
import React from "react";

export default async function RegisterPage({ params }) {
  const { slug } = await params;

 const cookieStore = await cookies();

  const utm = {
    utm_source: cookieStore.get("utm_source")?.value || null,
    utm_medium: cookieStore.get("utm_medium")?.value || null,
    utm_campaign: cookieStore.get("utm_campaign")?.value || null,
    utm_term: cookieStore.get("utm_term")?.value || null,
    utm_content: cookieStore.get("utm_content")?.value || null,
  };
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
      <ZohoForm webinar={webinar} utms={utm} />
      <Footer />
    </div>
  );
}