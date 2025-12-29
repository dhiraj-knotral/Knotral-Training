import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import RegisterComp from "@/components/RegisterComp/RegisterComp";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/webinars/get-webinar-by-slug?slug=${slug}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  const webinar = data.success ? data.response : null;

  if (!webinar) {
    return {
      title: "Webinar Not Found",
      description: "This webinar is not available.",
    };
  }

  return {
    title: webinar.metaTitle || webinar.title,
    description: webinar.metaDescription || webinar.description,
    openGraph: {
      title: webinar.metaTitle || webinar.title,
      description: webinar.metaDescription || webinar.description,
      url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/${slug}`,
      images: [
        {
          url: webinar.logo?.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function Register({ params }) {
  const { slug } = await params;
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
