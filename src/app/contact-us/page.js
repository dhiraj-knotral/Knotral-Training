import ContactUs from "@/components/ContactUs/ContactUs";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

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

export default function ContactPage() {
  return (
    <>
    <Header />
    <ContactUs />
    <Footer />
    </>
  )
}