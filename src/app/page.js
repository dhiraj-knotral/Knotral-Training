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

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TrustBar />
      <LiveSessions />
      <Category />
      <FeaturedPrograms />
      <LogoStrip />
      <Testimonials />
      <CtaSection />
      <Footer />
    </>
  );
}
