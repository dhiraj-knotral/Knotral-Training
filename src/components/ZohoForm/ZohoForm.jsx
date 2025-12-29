"use client";
import React, { useState } from "react";
import styles from "./ZohoForms.module.css"
import { useRouter } from "next/navigation";

export default function ZohoForm({ webinar }) {
  console.log("📌 Webinar received:", webinar);
  const router = useRouter();


  // Form state
  const [formData, setFormData] = useState({
    First_Name: "",
    Last_Name: "",
    Email: "",
    Mobile: "",
    Company: "",
    City: "",
    Designation: "",
    Category: webinar?.category || "Webinar Registration",  // 🔥 Pre-filled here
    FORM_NAME: webinar?.organisedBy || "Webinar Registration",
    Lead_Status: "No Contact Initiated",
    Lead_Source: "Knotral Website"
  });

  // Update state on input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/zoho/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("🎉 Registration successful!");
        // Reset form
        setFormData({
          First_Name: "",
          Last_Name: "",
          Mobile: "",
          Email: "",
          FORM_NAME: webinar?.title || "",
          Category: webinar?.title || "",
          Company: "",
          City: "",
          Designation: "",
          Lead_Status: "No Contact Initiated",
          Lead_Source: "Knotral",
        });
        // Redirect to home page
        router.push("/");
      } else {
        alert("❌ Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("Form error:", error);
      alert("❌ Something went wrong. Try again.");
    }
  };

  return (
    <section className={styles.formpage}>
      <div className="container">
        <div className={styles.formcontainer}>
          <div className={styles.formcard}>
            <h2>Register for the Training</h2>
            {/* <p className={styles.subtitle}>{webinar.registerFormSubheading}</p> */}
            <p className={styles.subheading}>
              {webinar.registerFormSubheading}
            </p>

            <form onSubmit={handleSubmit}>
              <div className={styles.formrow}>
                <div className={styles.formgroup}>
                  <label>
                    First Name <span className="required">*</span>
                  </label>
                  <input type="text" name="First_Name"
                    onChange={handleChange} placeholder="Enter first name" />
                </div>

                <div className={styles.formgroup}>
                  <label>
                    Last Name <span className="required">*</span>
                  </label>
                  <input type="text" name="Last_Name"
                    onChange={handleChange} placeholder="Enter last name" />
                </div>
              </div>

              <div className={styles.formgroup}>
                <label>
                  Email Address <span className="required">*</span>
                </label>
                <input type="email" name="Email"
                  onChange={handleChange} placeholder="you@school.edu" />
                <div className={styles.hint}>We'll send the webinar link here</div>
              </div>

              <div className={styles.formgroup}>
                <label>
                  WhatsApp Number <span className="required">*</span>
                </label>
                <input type="tel" name="Mobile"
                  onChange={handleChange} placeholder="+91 98765 43210" />
                <div className={styles.hint}>For reminders and follow-up resources</div>
              </div>

              <div className={styles.formgroup}>
                <label>
                  Category <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="Category"
                  value={formData.Category}
                  readOnly
                  style={{ background: "#f5f5f5", cursor: "not-allowed" }} // optional styling
                />
              </div>

              <div className={styles.formgroup}>
                <label>
                  Organised By <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="FORM_NAME"
                  value={formData.FORM_NAME}
                  readOnly
                  style={{ background: "#f5f5f5", cursor: "not-allowed" }} // optional styling
                />
              </div>

              <div className={styles.formgroup}>
                <label>
                  School/Organization Name <span className="required">*</span>
                </label>
                <input type="text" name="Company"
                  onChange={handleChange} placeholder="Your school or organization" />
              </div>

              <div className={styles.formrow}>
                <div className={styles.formgroup}>
                  <label>
                    Your Designation <span className="required">*</span>
                  </label>
                  <select name="Designation"
                    onChange={handleChange}
                    required>
                    <option value="">Select your designation...</option>
                    <option>Teacher</option>
                    <option>Academic Coordinator</option>
                    <option>Head of Department</option>
                    <option>Vice Principal</option>
                    <option>Principal</option>
                    <option>Curriculum Head</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className={styles.formgroup}>
                  <label>
                    City <span className="required">*</span>
                  </label>
                  <input type="text" name="City"
                    onChange={handleChange} placeholder="Your city" />
                </div>
              </div>

              {/* <div className={styles.formgroup}>
              <label>Subjects You Teach</label>
              <select>
                <option value="">Select primary subject...</option>
                <option>Mathematics</option>
                <option>English</option>
                <option>Science</option>
                <option>Social Studies</option>
                <option>Computer Science</option>
                <option>Multiple Subjects</option>
                <option>Other</option>
              </select>
            </div>

            <div className={styles.formgroup}>
              <label>Grade Levels</label>
              <select>
                <option value="">Select grade range...</option>
                <option>Pre-Primary (Nursery-KG)</option>
                <option>Primary (1-5)</option>
                <option>Middle School (6-8)</option>
                <option>Secondary (9-10)</option>
                <option>Senior Secondary (11-12)</option>
                <option>Multiple Levels</option>
              </select>
            </div> */}

              {/* <div className={styles.formdivider}></div> */}

              {/* <div className="formsectiontitle">Additional Preferences</div> */}

              {/* <div className="checkboxgroup">
              <input type="checkbox" id="trial" defaultChecked />
              <label htmlFor="trial">
                I'm interested in a free trial of Save My Exams
              </label>
            </div>

            <div className="checkboxgroup">
              <input type="checkbox" id="updates" defaultChecked />
              <label htmlFor="updates">Send me updates about future trainings</label>
            </div>

            <div className="checkboxgroup">
              <input type="checkbox" id="school" />
              <label htmlFor="school">
                I'd like information about school-wide packages
              </label>
            </div> */}

              {/* <div className={styles.formgroup} style={{ marginTop: "24px" }}>
              <label>Questions or Comments (Optional)</label>
              <textarea placeholder="Anything specific you'd like covered in the session?" />
            </div> */}

              <div className={styles.formdivider}></div>

              <button className="btn btnprimary btnlg btnblock">
                Confirm Registration
              </button>

            </form>

            <p
              style={{
                textAlign: "center",
                fontSize: "12px",
                color: "var(--text-muted)",
                marginTop: "16px",
              }}
            >
              By registering, you agree to Knotral's{" "}
              <a href="#" style={{ color: "var(--secondary-blue)" }}>
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" style={{ color: "var(--secondary-blue)" }}>
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
