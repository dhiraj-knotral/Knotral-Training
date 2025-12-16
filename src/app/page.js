import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import TrustBar from "@/components/TrustBar/TrustBar";
import LiveSessions from "@/components/LiveSessions/LiveSessions";
import Category from "@/components/Category/Category";
import FeaturedPrograms from "@/components/FeaturedPrograms/FeaturedPrograms";
import LogoStrip from "@/components/LogoStrip/LogoStrip";
import Testimonials from "@/components/Testimionials/Testimonials";
import CtaSection from "@/components/CtaSection/CtaSection";
import Footer from "@/components/Footer/Footer";

export const revalidate = 0; // optional, for no caching

export default async function Home() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/webinars/get-webinars`,
    { cache: "no-store" } // ensures SSR, fresh data
  );
  const data = await res.json();
  const webinars = data.success ? data.response : [];

  // Filter certified webinars
  const certifiedWebinars = webinars.filter(webinar => webinar.isCertified);
  return (
    <>
      <Header />
      <Hero />
      <TrustBar />
      <LiveSessions webinars={webinars} />
      <Category />
      <FeaturedPrograms webinars={certifiedWebinars} />
      <LogoStrip />
      <Testimonials />
      <CtaSection />
      <Footer />
    </>
  );
}
