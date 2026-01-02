"use client";
import React, { useEffect, useState } from "react";
import styles from "./ContactUs.module.css"
import { useRouter } from "next/navigation";

const ContactUs = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";  // ❌ disable scroll
    } else {
      document.body.style.overflow = "auto";    // ✅ enable scroll back
    }

    return () => {
      document.body.style.overflow = "auto";    // cleanup
    };
  }, [showModal]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    category: "",
    organization: "",
    subject: "",
    message: ""
  });

  // Update state on input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/zoho/contact-us`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setShowModal(true); // 👉 show modal instead of alert

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          category: "",
          organization: "",
          subject: "",
          message: ""
        });
        // Redirect to home page
        // router.push("/contact-us");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong. Try again.");
    }
  };
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.herocontent}>
          <h1>Get in Touch</h1>
          <p className={styles.herotagline}>
            We're here to help you transform education
          </p>
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.contentgrid}>
          <div className={styles.contactinfo}>
            <div className={styles.infocard}>
              <div className={styles.infoicon}>📞</div>
              <h3 className={styles.infotitle}>Call Us</h3>
              <p className={styles.infotext}>
                Speak directly with our team
                <br />
                <a href="tel:9311526122">9311526122</a>
                <br />
                <span style={{ fontSize: "0.9rem" }}>
                  Mon - Fri: 9:00 AM - 6:00 PM IST
                </span>
              </p>
            </div>

            <div className={styles.infocard}>
              <div className={styles.infoicon}>✉️</div>
              <h3 className={styles.infotitle}>Email Us</h3>
              <p className={styles.infotext}>
                For general inquiries
                <br />
                <a href="mailto:info@knotral.com">info@knotral.com</a>
                <br />
                <br />
                For partnerships
                <br />
                <a href="mailto:partners@knotral.com">
                  partners@knotral.com
                </a>
              </p>
            </div>

            <div className={styles.infocard}>
              <div className={styles.infoicon}>📍</div>
              <h3 className={styles.infotitle}>Visit Us</h3>
              <p className={styles.infotext}>
                Knotral Training
                <br />
                588, Sector 14, Faridabad <br /> Haryana - 121007
                <br />
                <span style={{ fontSize: "0.9rem" }}>
                  Office visits by appointment only
                </span>
              </p>
            </div>

            <div className={styles.quicklinks}>
              <h3>Quick Links</h3>

              <a href="/for-teachers" className={styles.quicklinkitem}>
                <span className={styles.quicklinkicon}>
                  <img src="/getintouch1.png" alt="Teacher" className={styles.quicklinkImg} />
                </span>
                <span className={styles.quicklinktext}>I'm a Teacher</span>
              </a>

              <a href="/for-schools" className={styles.quicklinkitem}>
                <span className={styles.quicklinkicon}>
                  <img src="/getintouch2.png" alt="School" className={styles.quicklinkImg} />
                </span>
                <span className={styles.quicklinktext}>
                  I represent a School
                </span>
              </a>

              <a
                href="/for-solution-providers"
                className={styles.quicklinkitem}
              >
                <span className={styles.quicklinkicon}>
                  <img src="/getintouch3.png" alt="Solution Provider" className={styles.quicklinkImg} />
                </span>
                <span className={styles.quicklinktext}>
                  I'm a Solution Provider
                </span>
              </a>

              <a href="/faq" className={styles.quicklinkitem}>
                <span className={styles.quicklinkicon}>
                  <img src="/getintouch4.png" alt="Faq" className={styles.quicklinkImg} />
                </span>
                <span className={styles.quicklinktext}>View FAQs</span>
              </a>
            </div>
          </div>

          <div className={styles.contactform}>
            <h2 className={styles.formtitle}>Send us a Message</h2>
            <p className={styles.formsubtitle}>
              Fill out the form below and we'll get back to you within
              24 hours
            </p>

            <form id={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formrow}>
                <div className={styles.formgroup}>
                  <label className={styles.formlabel} htmlFor="firstName">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={styles.forminput}
                    required
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formgroup}>
                  <label className={styles.formlabel} htmlFor="lastName">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={styles.forminput}
                    required
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.formrow}>
                <div className={styles.formgroup}>
                  <label className={styles.formlabel} htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.forminput}
                    required
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formgroup}>
                  <label className={styles.formlabel} htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={styles.forminput}
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.formgroup}>
                <label className={styles.formlabel} htmlFor="category">
                  I am a *
                </label>
                <select
                  id="category"
                  name="category"
                  className={styles.formselect}
                  required
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select category...</option>
                  <option value="teacher">Teacher</option>
                  <option value="school-admin">
                    School Administrator
                  </option>
                  <option value="principal">
                    Principal / Head of School
                  </option>
                  <option value="solution-provider">
                    Solution Provider / EdTech Company
                  </option>
                  <option value="parent">Parent</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.formgroup}>
                <label className={styles.formlabel} htmlFor="school">
                  School / Organization
                </label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  className={styles.forminput}
                  placeholder="Your school or organization name"
                  value={formData.organization}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formgroup}>
                <label className={styles.formlabel} htmlFor="subject">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={styles.forminput}
                  required
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formgroup}>
                <label className={styles.formlabel} htmlFor="message">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={styles.formtextarea}
                  required
                  placeholder="Tell us more about your inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className={styles.submitbutton}>
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className={styles.infobanner}>
          <div className={styles.infobannercontent}>
            <h2>We Respond Quickly</h2>
            <p>
              Our dedicated support team is committed to helping you.
              We typically respond within 24 hours during business days.
            </p>
            <div className={styles.responsetime}>
              <span className={styles.responseicon}>⚡</span>
              <span>Average Response Time: 24 Hours</span>
            </div>
          </div>
        </div>

        {showModal && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalBox}>
              <h2>🎉 Thank You!</h2>
              <p>We have received your request. We’ll contact you soon!</p>

              <button
                className={styles.modalButton}
                onClick={() => {
                  setShowModal(false);
                  router.push("/contact-us"); // 👉 redirect to homepage
                }}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactUs;
