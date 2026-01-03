// app/sitemap.xml/route.js
export const GET = async () => {
  try {
    // Fetch webinars from your API
    const res = await fetch(
      "https://knotral-backend.onrender.com/api/webinars/get-webinars"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch webinars");
    }

    const data = await res.json();
    const webinars = data.response || [];

    // Build XML
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>https://knotral.com/</loc>
  </url>
`;

    webinars.forEach((webinar) => {
      if (webinar.slug) {
        xml += `
  <url>
    <loc>https://training.knotral.com//${webinar.slug}</loc>
  </url>
`;
      }
    });

    xml += `</urlset>`;

    return new Response(xml, {
      status: 200,
      headers: {
        "Content-Type": "text/xml",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response("Error generating sitemap", { status: 500 });
  }
};
