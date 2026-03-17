import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import ThankYou from '@/components/ThankYou/ThankYou'
import React from 'react'

const page = async ({ params }) => {
   const { slug } = await params;

     const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/webinars/get-webinar-by-slug?slug=${slug}`,
    { cache: "no-store" }
  );


  const data = await res.json();

  const webinar = data.success ? data.response : null;

  return (
     <div>
      <Header />
      <ThankYou webinar={webinar}/>
      <Footer />
    </div>
  )
}

export default page