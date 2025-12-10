import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import RegisterComp from "@/components/RegisterComp/RegisterComp";
import Link from "next/link";

export default function Register() {
  return (
    <>
      <Header />
      <section className="landinghero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> &gt;{" "}
            <Link href="/mathematics">Mathematics</Link> &gt;{" "}
            Formative Assessment Strategies
          </div>
        </div>
      </section>
      <RegisterComp />
      <Footer />
    </>
  );
}
