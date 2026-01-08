import AboutUs from '@/components/AboutUs/AboutUs'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Head from 'next/head'
import React from 'react'


const about = () => {

      // Example JSON-LD structured data
  const schema = {
 "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Knotral Trainings",
  "description": "Learn about Knotral's mission to connect Indian educators with global EdTech leaders through free professional development programs.",
  "url": "https://training.knotral.com/about",
  "mainEntity": {
    "@type": "Organization",
    "name": "Knotral Trainings",
    "description": "India's premier platform connecting educators with global EdTech leaders for professional development.",
    "foundingDate": "2023",
    "slogan": "Knowledge. Trade. Link.",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "20"
    },
    "knowsAbout": [
      "Professional Development",
      "EdTech",
      "Teacher Training",
      "Educational Technology"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  }
}
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
    <AboutUs />
    <Footer />
    </>
  )
}

export default about