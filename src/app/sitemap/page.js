import SiteMapPage from "./SiteMapPage";

export default async function Page() {
// Fetch webinars from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/webinars/get-webinars`);
  
  // Check for errors
  if (!res.ok) {
    throw new Error("Failed to fetch webinars");
  }

  const data = await res.json();


  // Extract slugs and webinar names
  const productSlugs = data.response.map((webinar) => ({
    slug: webinar.slug,
    productName: webinar.title, // you can rename this if needed
    organisedBy: webinar.organisedBy
  }));



  return <SiteMapPage productSlugs={productSlugs} />;
}
