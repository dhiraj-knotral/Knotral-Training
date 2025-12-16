import CertificatesComp from '@/components/CertificateComp/CertificatesComp'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'


export default async function ({ searchParams }) {
  const params = await searchParams; // if it's a Promise
  const page = parseInt(params.page) || 1;

  // Build query string safely
  const query = new URLSearchParams({
    page,
  }).toString();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/webinars/get-certified-webinars?${query}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  const webinars = data.success ? data.response : [];

  const dataPagination = data.success ? data.pagination : {};

  return (
    <>
      <Header />
      <CertificatesComp webinars={webinars}
        pagination={dataPagination}
      />
      <Footer />
    </>
  )
}
