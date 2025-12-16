import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import RegisterComp from "@/components/RegisterComp/RegisterComp";
import Link from "next/link";

export default async function Register({ params }) {
  const { slug } = await params;

  console.log(slug)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/webinars/get-webinar-by-slug?slug=${slug}`,
    { cache: "no-store" }
  );

  const data = await res.json();

  const webinar = data.success ? data.response : null;

  // Function to capitalize each word
  const capitalizeSlug = (slug) => {
    return slug
      .split('-')             // split by dash
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize first letter
      .join(' ');             // join back with spaces
  };

  return (
    <>
      <Header />
      <section className="landinghero">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> &gt;{" "}
            <Link href="/">{webinar.category}</Link> &gt;{" "}
            {capitalizeSlug(webinar.slug)}
          </div>
        </div>
      </section>
      <RegisterComp webinar={webinar} />
      <Footer />
    </>
  );
}
