import FaqComp from '@/components/Faq/Faq'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Head from 'next/head'
import React from 'react'


const Faq = () => {

  // Example JSON-LD structured data
  const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "Frequently Asked Questions - Knotral Trainings",
  "description": "Find answers to common questions about Knotral Trainings webinars, certifications, and professional development programs.",
  "url": "https://training.knotral.com/faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I register for webinars?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Browse our webinar catalog, click on any session that interests you, click the Register button, create a free account or log in. You'll receive a confirmation email with the webinar link and calendar invite."
      }
    },
    {
      "@type": "Question",
      "name": "Are the webinars really free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! The vast majority of our webinars are completely free, including live sessions, session materials, participation certificates, and Q&A with presenters. Some specialized certification programs may have a fee."
      }
    },
    {
      "@type": "Question",
      "name": "Will I get a certificate after attending?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Free webinars provide a Certificate of Participation after attending. Certification programs offer professional certifications recognized by schools. All certificates are digital and downloadable from your account."
      }
    },
    {
      "@type": "Question",
      "name": "How do certification programs work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our certification programs are comprehensive professional development courses with multi-module programs, typically lasting 4-8 weeks. They include live sessions, assignments, and assessments, requiring 3-5 hours per week commitment."
      }
    },
    {
      "@type": "Question",
      "name": "Can I access session recordings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Free live webinar recordings are available 24-48 hours after the session. Certification program recordings are available throughout the program duration. On-demand content is available anytime for enrolled participants."
      }
    }
  ]
  };
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
    <FaqComp />
    <Footer />
    </>
  )
}

export default Faq