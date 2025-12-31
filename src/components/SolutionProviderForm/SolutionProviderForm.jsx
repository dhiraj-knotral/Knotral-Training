"use client";
import React, { useEffect, useState } from "react";
import styles from "./SolutionProviderForm.module.css"
import { useRouter } from "next/navigation";

export default function SolutionProvidersForm() {
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


    // Form state
    const [formData, setFormData] = useState({
        // First_Name: "",
        // Last_Name: "",
        Name: "",
        Email: "",
        Mobile: "",
        Designation: "",
        FORM_NAME: "Solution Providers Landing Page",
        Solution_Type: "",
        Target_Audience: ""
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
                setShowModal(true); // 👉 show modal instead of alert
                // Reset form
                // Reset form to initial fields
                setFormData({
                    Name: "",
                    Email: "",
                    Mobile: "",
                    Designation: "",
                    FORM_NAME: "Solution Providers Landing Page",
                    Solution_Type: "",
                    Target_Audience: ""
                });
                // Redirect to home page
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
                        <h2>Become a Partner</h2>
                        {/* <p className={styles.subtitle}>{webinar.registerFormSubheading}</p> */}
                        <p className={styles.subheading}>
                            Connect with schools and educators across India—join our network of trusted education solution providers
                        </p>

                        <form onSubmit={handleSubmit}>
                                <div className={styles.formgroup}>
                                    <label>
                                        Name <span className="required">*</span>
                                    </label>
                                    <input type="text" name="Name"
                                        onChange={handleChange} placeholder="Enter name" required />
                                </div>

                                {/* <div className={styles.formgroup}>
                                    <label>
                                        Last Name <span className="required">*</span>
                                    </label>
                                    <input type="text" name="Last_Name"
                                        onChange={handleChange} placeholder="Enter last name" required />
                                </div> */}
                      

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
                                    Phone <span className="required">*</span>
                                </label>
                                <input type="tel" name="Mobile"
                                    onChange={handleChange} placeholder="+91 98765 43210" required />
                                <div className={styles.hint}>For reminders and follow-up resources</div>
                            </div>

                        
                                <div className={styles.formgroup}>
                                    <label>
                                        Job Role/Designation <span className="required">*</span>
                                    </label>
                                    <select name="Designation"
                                        onChange={handleChange}
                                        required>
                                        <option value="">Select your designation...</option>
                                        <option>Founder / Co-Founder</option>
                                        <option>CEO / Managing Director</option>
                                        <option>Product Manager</option>
                                        <option>Sales / Partnerships</option>
                                        <option>Marketing / Growth</option>
                                        <option>Training / Academic Lead</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className={styles.formgroup}>
                                    <label>
                                        Type of Solution You Offer <span className="required">*</span>
                                    </label>
                                    <select name="Solution_Type"
                                        onChange={handleChange}
                                        required>
                                        <option value="">Select solution type you provide...</option>
                                        <option>EdTech Platform / SaaS</option>
                                        <option>Curriculum / Content Provider</option>
                                        <option>Assessment & Testing</option>
                                        <option>Teacher Training / Certification</option>
                                        <option>School Management Software</option>
                                        <option>Early Years / K–12 Solution</option>
                                        <option>Higher Education Solution</option>
                                        <option>Other</option>
                                    </select>
                                </div>


                                <div className={styles.formgroup}>
                                    <label>
                                        Primary Target Audience <span className="required">*</span>
                                    </label>
                                    <select name="Solution_Type"
                                        onChange={handleChange}
                                        required>
                                        <option value="">Select your target audience...</option>
                                        <option>Teachers</option>
                                        <option>School Chains / Groups</option>
                                        <option>Students</option>
                                        <option>Parents</option>
                                        <option>Government / Institutions</option>
                                    </select>
                                </div>


                            <div className={styles.formdivider}></div>

                            <button className="btn btnprimary btnlg btnblock">
                                Submit
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
