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
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- ── CORE PAGES ─────────────────────────────────────────────────────── -->

  <url>
    <loc>https://training.knotral.com/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://training.knotral.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://training.knotral.com/contact-us</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

  <url>
    <loc>https://training.knotral.com/faq</loc>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>

  <!-- ── AUDIENCE PAGES ─────────────────────────────────────────────────── -->

  <url>
    <loc>https://training.knotral.com/for-teachers</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://training.knotral.com/for-schools</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://training.knotral.com/for-solution-providers</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- ── WEBINARS – MAIN LISTING ────────────────────────────────────────── -->

  <url>
    <loc>https://training.knotral.com/webinars</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- ── WEBINARS – BY CATEGORY ─────────────────────────────────────────── -->

  <url>
    <loc>https://training.knotral.com/webinars?category=Early+Years</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://training.knotral.com/webinars?category=Teacher+Professional+Development</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://training.knotral.com/webinars?category=Franchise+%26+Edupreneurs</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://training.knotral.com/webinars?category=EdTech+%26+Digital+Learning</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://training.knotral.com/webinars?category=Curriculum+%26+Publishers</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://training.knotral.com/webinars?category=SEL+%26+Wellbeing</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://training.knotral.com/webinars?category=Inclusion+%26+Special+Needs</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://training.knotral.com/webinars?category=Higher+Education</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://training.knotral.com/webinars?category=Corporate+%26+Professional+Development</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>https://training.knotral.com/webinars?category=Online+%26+Alternate+Schooling</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- ── WEBINAR SESSION PAGES ──────────────────────────────────────────── -->

  <url>
    <loc>https://training.knotral.com/how-spelling-builds-literacy-and-engagement</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://training.knotral.com/improving-student-engagement-through-evidence-based-teaching-practice</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://training.knotral.com/teach-from-dehart</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://training.knotral.com/building-strong-english-foundations-with-hamilton-house-for-teachers-schools-and-education-partners</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://training.knotral.com/from-teaching-english-to-offering-a-uk-certified-english-program</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://training.knotral.com/av1-telepresence-robot-india-launch-webinar</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://training.knotral.com/unlocking-knowledge-with-world-book-digital-libraries-and-encyclopedias-for-modern-learning</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://training.knotral.com/inclusive-adaptive-play-based-learning-webinar-schools</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://training.knotral.com/elevate-teaching-with-video-coaching</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://training.knotral.com/onfire-learning-academy-open-dayaccredited-online-k-12-pathway-for-indian-students</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://training.knotral.com/building-strong-english-foundations-phonics-to-fluent-language-learning</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://training.knotral.com/become-a-certified-reggio-emilia-teacher</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- ── SITEMAP PAGE ───────────────────────────────────────────────────── -->

  <url>
    <loc>https://training.knotral.com/sitemap</loc>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
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
