import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SolutionProvidersForm from "@/components/SolutionProviderForm/SolutionProviderForm";
import Head from "next/head";
import React from "react";

export default async function SolutionProvidersPage() {
    // Example JSON-LD structured data
  const schema = {
   "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "For Solution Providers - Knotral Trainings",
  "description": "Partner with Knotral to reach 50,000+ Indian educators. List your training programs and build meaningful relationships with schools.",
  "url": "https://training.knotral.com/for-solution-providers",
  "about": {
    "@type": "Service",
    "name": "EdTech Partnership Platform",
    "provider": {
      "@type": "Organization",
      "name": "Knotral Trainings"
    },
    "serviceType": "B2B Educational Marketing Platform",
    "audience": {
      "@type": "Audience",
      "audienceType": "EdTech Companies, Solution Providers, Educational Content Creators"
    },
    "offers": {
      "@type": "Offer",
      "description": "Reach 50,000+ educators, host live sessions, generate quality leads"
    }
  }
}
  return (
    <div>
         <Head>
        <script
          type="application/ld+json"
          // JSON must be stringified
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <Header />
      <SolutionProvidersForm />
      <Footer />
    </div>
  );
}