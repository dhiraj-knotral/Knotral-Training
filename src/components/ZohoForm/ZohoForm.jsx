"use client";
import React, { useEffect, useState } from "react";
import styles from "./ZohoForms.module.css"
import { useRouter } from "next/navigation";

export default function ZohoForm({ webinar }) {
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


  useEffect(() => {
    if (!window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => console.log("Razorpay loaded successfully");
      script.onerror = () => console.error("Razorpay failed to load");
      document.body.appendChild(script);
    }
  }, []);


  // Form state
  const [formData, setFormData] = useState({
    First_Name: "",
    Last_Name: "",
    Email: "",
    Mobile: "",
    Company: "",
    City: "",
    Designation: "",
    Category: webinar?.organisedBy,
    FORM_NAME: `${webinar?.organisedBy} Landing page`,
    Lead_Status: "No Contact Initiated",
    Lead_Source: "Knotral Trainings",
    ...(webinar?.organisedBy === "Tilli Kids" && {
      Grade: "",
      Address: "",
      Landmark: ""
    })
  });

  // Update state on input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/zoho/register`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await res.json();

  //     if (data.success) {
  //       setShowModal(true); // 👉 show modal instead of alert
  //       // Reset form
  //       setFormData({
  //         First_Name: "",
  //         Last_Name: "",
  //         Mobile: "",
  //         Email: "",
  //         FORM_NAME: webinar?.title || "",
  //         Category: webinar?.title || "",
  //         Company: "",
  //         City: "",
  //         Designation: "",
  //         Lead_Status: "No Contact Initiated",
  //         Lead_Source: "Knotral Trainings",
  //         Grade: "",
  //         Address: "",
  //         Landmark: ""
  //       });
  //       // Redirect to home page
  //     } else {
  //       alert("❌ Something went wrong. Try again.");
  //     }
  //   } catch (error) {
  //     console.error("Form error:", error);
  //     alert("❌ Something went wrong. Try again.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1️⃣ If webinar is free, directly submit the form (same as before)
    if (webinar?.isFree) {
      submitRegistration(formData, setFormData, setShowModal, webinar);
      return; // stop further execution
    }

    // 2️⃣ If PAID webinar -> start payment process
    try {
      // Step A: Create order from backend
      const orderRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/payment/create-payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: webinar?.price,
          currency: "INR",
          webinarId: webinar?._id,
          webinarTitle: webinar?.title,
          category: webinar?.organisedBy,
          userData: formData   // store user info before payment
        }),
      });

      const orderData = await orderRes.json();
      if (!orderData?.orderId) return alert("Order creation failed");

   // Step B: Open Razorpay Checkout
const rzp = new window.Razorpay({
  key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  amount: orderData.amount,
  currency: orderData.currency,
  name: webinar.title,                 // shows in checkout popup
  description: "Webinar Registration Payment",
  order_id: orderData.orderId,
  
  // Prefill customer info
  prefill: {
    name: formData.First_Name + " " + formData.Last_Name,
    email: formData.Email,
    contact: formData.Mobile
  },

  // Store webinar organizer and ID in Razorpay notes
  notes: {
    organisedBy: webinar.organisedBy,  // your custom "App Name"
    webinarName: webinar.title
  },

  handler: async function (response) {
    // Step C: Verify Payment on backend
    const verifyRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/payment/verify-payment`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(response),
      }
    );

          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            // Step D: Final form submission after payment success
            await submitRegistration(formData, setFormData, setShowModal, webinar);
            setShowModal(true);
          } else {
            alert("Payment verification failed. Try again.");
          }
        },
        theme: { color: "#3399cc" },
      });

      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong during payment.");
    }
  };


  // Separated function: Submit registration form
  async function submitRegistration(formData, setFormData, setShowModal, webinar) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/zoho/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {

        // 👉 Reset the form properly
        setFormData({
          First_Name: "",
          Last_Name: "",
          Mobile: "",
          Email: "",
          FORM_NAME: webinar?.title || "",
          Category: webinar?.category || "",
          Company: "",
          City: "",
          Designation: "",
          Lead_Status: "No Contact Initiated",
          Lead_Source: "Knotral Trainings",
          Grade: "",
          Address: "",
          Landmark: "",
        });

        setShowModal(true); // Show success modal
      } else {
        alert("❌ Something went wrong. Try again.");
      }

    } catch (error) {
      console.error("Registration error:", error);
      alert("❌ Something went wrong. Try again.");
    }
  }

  return (
    <section className={styles.formpage}>
      <div className="container">
        <div className={styles.formcontainer}>
          <div className={styles.formcard}>
            <h2>Register for the Trainings</h2>
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
                    onChange={handleChange} placeholder="Enter first name" required />
                </div>

                <div className={styles.formgroup}>
                  <label>
                    Last Name <span className="required">*</span>
                  </label>
                  <input type="text" name="Last_Name"
                    onChange={handleChange} placeholder="Enter last name" required />
                </div>
              </div>

              <div className={styles.formgroup}>
                <label>
                  Email Address <span className="required">*</span>
                </label>
                <input type="email" name="Email"
                  onChange={handleChange} placeholder="you@school.edu" required />
                <div className={styles.hint}>We'll send the webinar link here</div>
              </div>

              <div className={styles.formgroup}>
                <label>
                  WhatsApp Number <span className="required">*</span>
                </label>
                <input type="tel" name="Mobile"
                  onChange={handleChange} placeholder="+91 98765 43210" required />
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

              {/* <div className={styles.formgroup}>
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
              </div> */}

              <div className={styles.formgroup}>
                <label>
                  School/Organization Name <span className="required">*</span>
                </label>
                <input type="text" name="Company"
                  onChange={handleChange} placeholder="Your school or organization" />
              </div>
              {webinar?.organisedBy === "Tilli Kids" && (
                <div className={styles.formgroup}>
                  <label>
                    Grade <span className="required">*</span>
                  </label>
                  <select
                    name="Grade"
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your Grade...</option>
                    <option>KG</option>
                    <option>Grade 1</option>
                    <option>Grade 2</option>
                    <option>Grade 3</option>
                    <option>Grade 4</option>
                    <option>Grade 5</option>
                  </select>
                </div>
              )}

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

              {webinar?.organisedBy === "Tilli Kids" && (
                <div className={styles.formgroup}>
                  <label>
                    Address <span className="required">*</span>
                  </label>
                  <input type="text" name="Address"
                    onChange={handleChange} placeholder="Your full address" required />
                  <div className={styles.hint}>The Workbook will be dispatched to this address. Share the Correct Address...</div>

                </div>
              )}

              {webinar?.organisedBy === "Tilli Kids" && (
                <div className={styles.formgroup}>
                  <label>
                    Landmark <span className="required">*</span>
                  </label>
                  <input type="text" name="Landmark"
                    onChange={handleChange} placeholder="Landmark" required />
                </div>
              )}

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
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalBox}>
            <h2>🎉 Thank You!</h2>
            <p>Your registration was successful. We’ll contact you soon!</p>

            <button
              className={styles.modalButton}
              onClick={() => {
                setShowModal(false);
                router.push("/"); // 👉 redirect to homepage
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
