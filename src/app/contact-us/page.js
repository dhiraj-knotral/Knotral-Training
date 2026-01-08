import ContactUs from "@/components/ContactUs/ContactUs";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Head from "next/head";

export const metadata = {
  title: "Contact Knotral Trainings | Get in Touch",
  description:
    "Contact Knotral Trainings for teacher training inquiries, course information, or partnership opportunities. Connect with our educational development experts today.",
  alternates: {
    canonical: "https://training.knotral.com/contact-us",
  },
  openGraph: {
    title: "Contact Knotral Trainings | Get in Touch",
    description:
      "Contact Knotral Trainings for teacher training inquiries, course information, or partnership opportunities.",
    url: "https://training.knotral.com/contact-us",
    type: "website",
  },
};

    // Example JSON-LD structured data
  const schema = {
 "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Knotral Trainings",
  "description": "Get in touch with Knotral Trainings. Contact us for inquiries about webinars, school partnerships, or solution provider opportunities.",
  "url": "https://training.knotral.com/contact-us",
  "mainEntity": {
    "@type": "Organization",
    "name": "Knotral Trainings",
    "telephone": "+91-9311526122",
    "email": "info@knotral.com",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9311526122",
        "contactType": "Customer Service",
        "email": "info@knotral.com",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "IN",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      },
      {
        "@type": "ContactPoint",
        "email": "partners@knotral.com",
        "contactType": "Partnerships",
        "availableLanguage": "English",
        "areaServed": "IN"
      }
    ]
  }
}

export default function ContactPage() {
  return (
    <>
          <Head>
        <script
          type="application/ld+json"
          // JSON must be stringified
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
    <Header />
    <ContactUs />
    <Footer />
    </>
  )
}