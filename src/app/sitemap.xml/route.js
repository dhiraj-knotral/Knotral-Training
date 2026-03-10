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
    <loc>https://training.knotral.com/</loc>
      </url>

  <url>
    <loc>https://training.knotral.com/about</loc>
  </url>

  <url>
    <loc>https://training.knotral.com/contact-us</loc>
      </url>

  <url>
    <loc>https://training.knotral.com/faq</loc>
     </url>

 <url>
    <loc>https://training.knotral.com/for-teachers</loc>
   
  </url>

  <url>
    <loc>https://training.knotral.com/for-schools</loc>
   
  </url>

  <url>
    <loc>https://training.knotral.com/for-solution-providers</loc>
   
  </url>

  <url>
    <loc>https://training.knotral.com/webinars</loc>
      </url>


  <url>
    <loc>https://training.knotral.com/how-spelling-builds-literacy-and-engagement</loc>
     </url>

  <url>
    <loc>https://training.knotral.com/improving-student-engagement-through-evidence-based-teaching-practice</loc>
      </url>

  <url>
    <loc>https://training.knotral.com/teach-from-dehart</loc>
    </url>

  <url>
    <loc>https://training.knotral.com/building-strong-english-foundations-with-hamilton-house-for-teachers-schools-and-education-partners</loc>
     </url>

  <url>
    <loc>https://training.knotral.com/from-teaching-english-to-offering-a-uk-certified-english-program</loc>
     </url>

  <url>
    <loc>https://training.knotral.com/av1-telepresence-robot-india-launch-webinar</loc>
     </url>

  <url>
    <loc>https://training.knotral.com/unlocking-knowledge-with-world-book-digital-libraries-and-encyclopedias-for-modern-learning</loc>
    </url>

  <url>
    <loc>https://training.knotral.com/inclusive-adaptive-play-based-learning-webinar-schools</loc>
     </url>

  <url>
    <loc>https://training.knotral.com/elevate-teaching-with-video-coaching</loc>
     </url>

  <url>
    <loc>https://training.knotral.com/onfire-learning-academy-open-dayaccredited-online-k-12-pathway-for-indian-students</loc>
      </url>

  <url>
    <loc>https://training.knotral.com/building-strong-english-foundations-phonics-to-fluent-language-learning</loc>
     </url>

  <url>
    <loc>https://training.knotral.com/become-a-certified-reggio-emilia-teacher</loc>
     </url>

  <url>
    <loc>https://training.knotral.com/privacy-policy</loc>
     </url>
  <url>
    <loc>https://training.knotral.com/sitemap</loc>
    </url>

</urlset>
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
