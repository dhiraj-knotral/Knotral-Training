"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./Faq.module.css";

const FaqComp = () => {

useEffect(() => {

    const questions = document.querySelectorAll(`.${styles.faqquestion}`);

    const questionHandlers = [];

    questions.forEach((question) => {
        const handler = () => {
            const item = question.closest(`.${styles.faqitem}`);
            if (!item) return;

            const isActive = item.classList.contains(styles.active);

            document.querySelectorAll(`.${styles.faqitem}`).forEach((faqItem) => {
                faqItem.classList.remove(styles.active);
            });

            if (!isActive) {
                item.classList.add(styles.active);
            }
        };

        question.addEventListener("click", handler);
        questionHandlers.push({ question, handler });
    });

    const tabs = document.querySelectorAll(`.${styles.categorytab}`);

    const tabHandlers = [];

    tabs.forEach((tab) => {
        const handler = () => {
            const category = tab.dataset.category;

            tabs.forEach((t) => t.classList.remove(styles.active));
            tab.classList.add(styles.active);

            document.querySelectorAll(`.${styles.faqcategory}`).forEach((cat) => {
                if (category === "all" || cat.dataset.category === category) {
                    cat.style.display = ""; // ✅ reset
                } else {
                    cat.style.display = "none";
                }
            });

            // Reset FAQ items visibility
            document.querySelectorAll(`.${styles.faqitem}`).forEach((item) => {
                item.style.display = "";
                item.classList.remove(styles.active);
            });
        };

        tab.addEventListener("click", handler);
        tabHandlers.push({ tab, handler });
    });

    const searchInput = document.getElementById("faqSearch");

    const searchHandler = (e) => {
        const searchTerm = e.target.value.toLowerCase();

        document.querySelectorAll(`.${styles.faqitem}`).forEach((item) => {
            const question = item
                .querySelector(`.${styles.faqquestiontext}`)
                ?.textContent.toLowerCase();

            const answer = item
                .querySelector(`.${styles.faqanswercontent}`)
                ?.textContent.toLowerCase();

            if (question?.includes(searchTerm) || answer?.includes(searchTerm)) {
                item.style.display = "";
                if (searchTerm.length > 2) {
                    item.classList.add(styles.active);
                }
            } else {
                item.style.display = "none";
                item.classList.remove(styles.active);
            }
        });

        document.querySelectorAll(`.${styles.faqcategory}`).forEach((cat) => {
            cat.style.display = "";
        });
    };

    searchInput?.addEventListener("input", searchHandler);

    return () => {
        questionHandlers.forEach(({ question, handler }) =>
            question.removeEventListener("click", handler)
        );
        tabHandlers.forEach(({ tab, handler }) =>
            tab.removeEventListener("click", handler)
        );
        searchInput?.removeEventListener("input", searchHandler);
    };
}, []);

    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.herocontent}>
                    <h1>Frequently Asked Questions</h1>
                    <p className={styles.herotagline}>
                        Find answers to common questions about Knotral Training
                    </p>
                </div>
            </section>

            {/* Search Bar */}
            <div className={styles.searchcontainer}>
                <div className={styles.searchbox}>
                    <span className={styles.searchicon}>🔍</span>
                    <input
                        type="text"
                        className={styles.searchinput}
                        id="faqSearch"
                        placeholder="Search for answers..."
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className={styles.container}>
                {/* Category Tabs */}
                <div className={styles.categorytabs}>
                    <button className={`${styles.categorytab} ${styles.active}`} data-category="all">
                        All Questions
                    </button>
                    <button className={styles.categorytab} data-category="teachers">
                        For Teachers
                    </button>
                    <button className={styles.categorytab} data-category="schools">
                        For Schools
                    </button>
                    <button className={styles.categorytab} data-category="providers">
                        For Providers
                    </button>
                    <button className={styles.categorytab} data-category="technical">
                        Technical
                    </button>
                </div>

                {/* For Teachers FAQs */}
                <div className={styles.faqcategory} data-category="teachers">
                    <h2 className={styles.categorytitle}>
                        <span className={styles.categoryicon}>👩‍🏫</span>
                        For Teachers
                    </h2>

                    <div className={styles.faqitem}>
                        <div className={styles.faqquestion}>
                            <span className={styles.faqquestiontext}>
                                How do I register for webinars?
                            </span>
                            <span className={styles.faqicon}>+</span>
                        </div>
                        <div className={styles.faqanswer}>
                            <div className={styles.faqanswercontent}>
                                <p>Registering for webinars is simple and free:</p>
                                <ul>
                                    <li>Browse our webinar catalog on the homepage or webinars page</li>
                                    <li>Click on any session that interests you</li>
                                    <li>Click the "Register" button on the session details page</li>
                                    <li>Create a free account or log in if you already have one</li>
                                    <li>
                                        You'll receive a confirmation email with the webinar link and
                                        calendar invite
                                    </li>
                                </ul>
                                <p>
                                    You'll get reminder emails 24 hours and 1 hour before the
                                    session starts.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.faqitem}>
                        <div className={styles.faqquestion}>
                            <span className={styles.faqquestiontext}>
                                Are the webinars really free?
                            </span>
                            <span className={styles.faqicon}>+</span>
                        </div>
                        <div className={styles.faqanswer}>
                            <div className={styles.faqanswercontent}>
                                <p>
                                    Yes! The vast majority of our webinars are completely free.
                                    This includes:
                                </p>
                                <ul>
                                    <li>Live webinar sessions</li>
                                    <li>Access to session materials and resources</li>
                                    <li>Participation certificates for attended sessions</li>
                                    <li>Q&A with presenters</li>
                                </ul>
                                <p>
                                    Some specialized certification programs may have a fee
                                    (clearly marked with the price), but these are optional advanced
                                    programs that provide in-depth training and professional
                                    credentials.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.faqitem}>
                        <div className={styles.faqquestion}>
                            <span className={styles.faqquestiontext}>
                                Will I get a certificate after attending?
                            </span>
                            <span className={styles.faqicon}>+</span>
                        </div>
                        <div className={styles.faqanswer}>
                            <div className={styles.faqanswercontent}>
                                <p>Yes! Certificate types depend on the session:</p>
                                <ul>
                                    <li>
                                        <strong>Free Webinars:</strong> You'll receive a Certificate
                                        of Participation after attending the live session
                                    </li>
                                    <li>
                                        <strong>Certification Programs:</strong> These multi-session
                                        programs offer professional certifications recognized by
                                        schools and educational institutions
                                    </li>
                                    <li>
                                        <strong>On-Demand Sessions:</strong> Available after
                                        completing the content and any associated assessments
                                    </li>
                                </ul>
                                <p>
                                    All certificates are digital and can be downloaded from your
                                    Knotral account dashboard.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.faqitem}>
                        <div className={styles.faqquestion}>
                            <span className={styles.faqquestiontext}>
                                How do certification programs work?
                            </span>
                            <span className={styles.faqicon}>+</span>
                        </div>
                        <div className={styles.faqanswer}>
                            <div className={styles.faqanswercontent}>
                                <p>
                                    Our certification programs are comprehensive professional
                                    development courses:
                                </p>
                                <ul>
                                    <li>
                                        <strong>Structure:</strong> Multi-module programs with live
                                        sessions, assignments, and assessments
                                    </li>
                                    <li>
                                        <strong>Duration:</strong> Typically 4-8 weeks depending on
                                        the program
                                    </li>
                                    <li>
                                        <strong>Commitment:</strong> 3-5 hours per week on average
                                    </li>
                                    <li>
                                        <strong>Requirements:</strong> Attend live sessions, complete
                                        assignments, pass final assessment
                                    </li>
                                    <li>
                                        <strong>Certificate:</strong> Professional certification
                                        recognized by schools and educational bodies
                                    </li>
                                </ul>
                                <p>
                                    Popular programs include SEL Workshop, Reggio Emilia Teacher
                                    Certification, and IB Mathematics courses.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.faqitem}>
                        <div className={styles.faqquestion}>
                            <span className={styles.faqquestiontext}>
                                Can I access session recordings?
                            </span>
                            <span className={styles.faqicon}>+</span>
                        </div>
                        <div className={styles.faqanswer}>
                            <div className={styles.faqanswercontent}>
                                <p>Yes! Recording availability depends on the session type:</p>
                                <ul>
                                    <li>
                                        <strong>Free Live Webinars:</strong> Recordings are typically
                                        available 24-48 hours after the session in your account
                                        dashboard
                                    </li>
                                    <li>
                                        <strong>Certification Programs:</strong> All module
                                        recordings are available throughout the program duration
                                    </li>
                                    <li>
                                        <strong>On-Demand Content:</strong> Available anytime for
                                        enrolled participants
                                    </li>
                                </ul>
                                <p>
                                    Note: Some partner webinars may have time-limited recording
                                    access (typically 30-90 days).
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.faqitem}>
                        <div className={styles.faqquestion}>
                            <span className={styles.faqquestiontext}>
                                What are the session timings?
                            </span>
                            <span className={styles.faqicon}>+</span>
                        </div>
                        <div className={styles.faqanswer}>
                            <div className={styles.faqanswercontent}>
                                <p>
                                    All sessions are conducted in Indian Standard Time (IST) and
                                    scheduled to accommodate working educators:
                                </p>
                                <ul>
                                    <li>Most evening sessions: 6:00 PM - 8:00 PM IST</li>
                                    <li>Weekend sessions: Available on Saturdays and Sundays</li>
                                    <li>Duration: Typically 60-90 minutes</li>
                                </ul>
                                <p>
                                    Specific timings are clearly displayed on each webinar page.
                                    You'll also receive calendar invites that automatically convert
                                    to your local timezone.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.faqitem}>
                        <div className={styles.faqquestion}>
                            <span className={styles.faqquestiontext}>
                                How do I earn CPD credits?
                            </span>
                            <span className={styles.faqicon}>+</span>
                        </div>
                        <div className={styles.faqanswer}>
                            <div className={styles.faqanswercontent}>
                                <p>
                                    Knotral sessions count toward professional development
                                    requirements:
                                </p>
                                <ul>
                                    <li>
                                        Each webinar certificate includes CPD hours (typically 1-2
                                        hours per session)
                                    </li>
                                    <li>
                                        Certification programs provide comprehensive CPD
                                        documentation
                                    </li>
                                    <li>Your dashboard tracks total CPD hours earned</li>
                                    <li>
                                        Certificates can be submitted to your school or institution
                                    </li>
                                </ul>
                                <p>
                                    Many schools recognize Knotral certifications for annual PD
                                    requirements. Check with your academic coordinator for
                                    specific policies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.faqcategory} data-category="schools">
                    <h2 className={styles.categorytitle}>
                        <span className={styles.categoryicon}>🏫</span>
                        For Schools
                    </h2>

                    <div className={styles.faqitem}>
                        <div className={styles.faqquestion}>
                            <span className={styles.faqquestiontext}>How can schools book bulk training?</span>
                            <span className={styles.faqicon}>+</span>
                        </div>
                        <div className={styles.faqanswer}>
                            <div className={styles.faqanswercontent}>
                                <p>We offer customized professional development packages for schools:</p>
                                <ul>
                                    <li>Contact us at 9311526122 or through our contact form</li>
                                    <li>Discuss your faculty size, subjects, and training goals</li>
                                    <li>Receive a customized proposal with recommended sessions</li>
                                    <li>Schedule dedicated sessions for your faculty</li>
                                    <li>Access comprehensive reporting and analytics</li>
                                </ul>
                                <p>Benefits include priority scheduling, custom content adaptation, and dedicated support managers.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.faqitem}>
                        <div className={styles.faqquestion}>
                            <span className={styles.faqquestiontext}>What are the pricing models for schools?</span>
                            <span className={styles.faqicon}>+</span>
                        </div>
                        <div className={styles.faqanswer}>
                            <div className={styles.faqanswercontent}>
                                <p>We offer flexible pricing based on your needs:</p>
                                <ul>
                                    <li><strong>Per-Teacher Model:</strong> Pay per teacher enrolled in programs</li>
                                    <li><strong>Annual Subscriptions:</strong> Unlimited access for your entire faculty</li>
                                    <li><strong>Custom Packages:</strong> Tailored to specific subject areas or grade levels</li>
                                    <li><strong>Cohort Programs:</strong> Dedicated sessions for groups of 20+ teachers</li>
                                </ul>
                                <p>Contact our school partnerships team for detailed pricing and volume discounts.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.faqitem}>
                        <div className={styles.faqquestion}>
                            <span className={styles.faqquestiontext}>Can we customize the content?</span>
                            <span className={styles.faqicon}>+</span>
                        </div>
                        <div className={styles.faqanswer}>
                            <div className={styles.faqanswercontent}>
                                <p>Yes! We work with solution providers to adapt content for school-specific needs:</p>
                                <ul>
                                    <li>Align sessions with your curriculum framework (CBSE, ICSE, IB, Cambridge, etc.)</li>
                                    <li>Focus on specific grade levels or subjects</li>
                                    <li>Incorporate your school's pedagogical approach</li>
                                    <li>Address specific challenges your teachers face</li>
                                </ul>
                                <p>Customization is available for bulk bookings and annual partnerships.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.faqitem}>
                        <div className={styles.faqquestion}>
                            <span className={styles.faqquestiontext}>How many teachers can attend from our school?</span>
                            <span className={styles.faqicon}>+</span>
                        </div>
                        <div className={styles.faqanswer}>
                            <div className={styles.faqanswercontent}>
                                <p>There's no limit! Options include:</p>
                                <ul>
                                    <li><strong>Open Webinars:</strong> Teachers can individually register for any free session</li>
                                    <li><strong>School Packages:</strong> Enroll your entire faculty</li>
                                    <li><strong>Department Groups:</strong> Register specific departments (Math, Science, etc.)</li>
                                    <li><strong>Private Sessions:</strong> Book exclusive sessions for your school</li>
                                </ul>
                                <p>We've successfully trained entire faculties ranging from 20 to 200+ teachers.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.faqcategory} data-category="providers">
                    <h2 className={styles.categorytitle}>
                        <span className={styles.categoryicon}>🌍</span>
                        For Solution Providers
                    </h2>

                    <div className={styles.faqitem}>
                        <div className={styles.faqquestion}>
                            <span className={styles.faqquestiontext}>How do I list my training programs on Knotral?</span>
                            <span className={styles.faqicon}>+</span>
                        </div>
                        <div className={styles.faqanswer}>
                            <div className={styles.faqanswercontent}>
                                <p>Joining Knotral as a solution provider is straightforward:</p>
                                <ul>
                                    <li>Visit the "For Solution Providers" page and click "List Your Trainings"</li>
                                    <li>Complete the partnership application form</li>
                                    <li>Our team will review your offerings and contact you within 3-5 business days</li>
                                    <li>Once approved, we'll help you set up your provider profile and schedule sessions</li>
                                </ul>
                                <p>We partner with EdTech companies, curriculum providers, educational consultants, and training organizations.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.faqitem}>
                        <div className={styles.faqquestion}>
                            <span className={styles.faqquestiontext}>What are the partnership terms?</span>
                            <span className={styles.faqicon}>+</span>
                        </div>
                        <div className={styles.faqanswer}>
                            <div className={styles.faqanswercontent}>
                                <p>Our partnership model is designed to be mutually beneficial:</p>
                                <ul>
                                    <li><strong>Revenue Share:</strong> For paid certification programs (if applicable)</li>
                                    <li><strong>Lead Generation:</strong> Connect with schools interested in your full solutions</li>
                                    <li><strong>Brand Exposure:</strong> Featured placement on our platform reaching 50,000+ educators</li>
                                    <li><strong>Marketing Support:</strong> We promote your sessions through email and social channels</li>
                                    <li><strong>Analytics:</strong> Detailed insights on attendee engagement and interest</li>
                                </ul>
                                <p>Specific terms vary based on partnership level. Contact us to discuss options.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.faqitem}>
                        <div className={styles.faqquestion}>
                            <span className={styles.faqquestiontext}>Who is your audience?</span>
                            <span className={styles.faqicon}>+</span>
                        </div>
                        <div className={styles.faqanswer}>
                            <div className={styles.faqanswercontent}>
                                <p>Knotral connects you with India's education community:</p>
                                <ul>
                                    <li><strong>Teachers:</strong> 12,000+ registered educators across all subjects and grade levels</li>
                                    <li><strong>Schools:</strong> K-12 institutions from metros to tier-2/3 cities</li>
                                    <li><strong>Boards:</strong> CBSE, ICSE, IB, Cambridge, State boards, and international curricula</li>
                                    <li><strong>Roles:</strong> Classroom teachers, coordinators, principals, and academic leaders</li>
                                </ul>
                                <p>Our audience is actively seeking professional development and new educational solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.faqcategory} data-category="technical">
                    <h2 className={styles.categorytitle}>
                        <span className={styles.categoryicon}>💻</span>
                        Technical & Platform
                    </h2>

                    <div className={styles.faqitem}>
                        <div className={styles.faqquestion}>
                            <span className={styles.faqquestiontext}>What are the technical requirements to join sessions?</span>
                            <span className={styles.faqicon}>+</span>
                        </div>
                        <div className={styles.faqanswer}>
                            <div className={styles.faqanswercontent}>
                                <p>Minimal requirements for the best experience:</p>
                                <ul>
                                    <li><strong>Device:</strong> Computer, laptop, tablet, or smartphone</li>
                                    <li><strong>Internet:</strong> Stable connection (minimum 2 Mbps recommended)</li>
                                    <li><strong>Browser:</strong> Latest version of Chrome, Firefox, Safari, or Edge</li>
                                    <li><strong>Audio:</strong> Speakers or headphones recommended</li>
                                    <li><strong>Video:</strong> Optional but enhances interaction</li>
                                </ul>
                                <p>We use standard video conferencing platforms (Zoom, Google Meet) that work on all devices.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.faqitem}>
                        <div className={styles.faqquestion}>
                            <span className={styles.faqquestiontext}>How do I access live sessions?</span>
                            <span className={styles.faqicon}>+</span>
                        </div>
                        <div className={styles.faqanswer}>
                            <div className={styles.faqanswercontent}>
                                <p>Accessing your registered sessions is easy:</p>
                                <ul>
                                    <li>Log into your Knotral account 10-15 minutes before the session</li>
                                    <li>Navigate to "My Sessions" or "Dashboard"</li>
                                    <li>Click "Join Session" next to the scheduled webinar</li>
                                    <li>You'll also receive email reminders with direct join links</li>
                                </ul>
                                <p>Pro tip: Test your audio and video before the session starts to avoid technical issues.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.faqitem}>
                        <div className={styles.faqquestion}>
                            <span className={styles.faqquestiontext}>What if I face technical issues during a session?</span>
                            <span className={styles.faqicon}>+</span>
                        </div>
                        <div className={styles.faqanswer}>
                            <div className={styles.faqanswercontent}>
                                <p>We have support systems in place:</p>
                                <ul>
                                    <li>A support chat is available during all live sessions</li>
                                    <li>Contact our technical team at 9311526122 (available during session hours)</li>
                                    <li>Email support: Listed in your session confirmation email</li>
                                    <li>If you miss a session due to technical issues, the recording will be available</li>
                                </ul>
                                <p>Common issues like audio/video problems are usually resolved by refreshing your browser or checking device settings.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.faqitem}>
                        <div className={styles.faqquestion}>
                            <span className={styles.faqquestiontext}>How do I update my account information?</span>
                            <span className={styles.faqicon}>+</span>
                        </div>
                        <div className={styles.faqanswer}>
                            <div className={styles.faqanswercontent}>
                                <p>Managing your account is simple:</p>
                                <ul>
                                    <li>Log into your Knotral account</li>
                                    <li>Click on your profile icon or "My Account"</li>
                                    <li>Update your name, email, phone number, school, or teaching subjects</li>
                                    <li>Changes are saved automatically</li>
                                </ul>
                                <p>Keep your information current to receive relevant webinar recommendations and updates.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.faqcategory} data-category="all">
                    <h2 className={styles.categorytitle}>
                        <span className={styles.categoryicon}>ℹ️</span>
                        General Information
                    </h2>

                    <div className={styles.faqitem}>
                        <div className={styles.faqquestion}>
                            <span className={styles.faqquestiontext}>What is Knotral?</span>
                            <span className={styles.faqicon}>+</span>
                        </div>
                        <div className={styles.faqanswer}>
                            <div className={styles.faqanswercontent}>
                                <p>Knotral is India's premier platform connecting educators with global EdTech leaders. We provide:</p>
                                <ul>
                                    <li>Free professional development webinars from 45+ global education brands</li>
                                    <li>Professional certification programs recognized by schools</li>
                                    <li>Live and on-demand learning experiences</li>
                                    <li>Direct access to innovative classroom-ready strategies</li>
                                </ul>
                                <p>Our mission: Knowledge. Trade. Link. – Making world-class professional development accessible to every Indian educator.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.faqitem}>
                        <div className={styles.faqquestion}>
                            <span className={styles.faqquestiontext}>What is your refund policy?</span>
                            <span className={styles.faqicon}>+</span>
                        </div>
                        <div className={styles.faqanswer}>
                            <div className={styles.faqanswercontent}>
                                <p>Our refund policy applies to paid certification programs:</p>
                                <ul>
                                    <li><strong>Full Refund:</strong> Available within 7 days of enrollment if you haven't accessed more than 2 modules</li>
                                    <li><strong>Partial Refund:</strong> Case-by-case basis for special circumstances (medical, personal emergencies)</li>
                                    <li><strong>Free Sessions:</strong> No payment involved, cancel registration anytime</li>
                                </ul>
                                <p>To request a refund, contact us at 9311526122 or through the contact form with your enrollment details.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.faqitem}>
                        <div className={styles.faqquestion}>
                            <span className={styles.faqquestiontext}>How is my data protected?</span>
                            <span className={styles.faqicon}>+</span>
                        </div>
                        <div className={styles.faqanswer}>
                            <div className={styles.faqanswercontent}>
                                <p>We take privacy and data security seriously:</p>
                                <ul>
                                    <li>All data is encrypted and stored securely</li>
                                    <li>We never share your personal information with third parties without consent</li>
                                    <li>Partner companies only receive aggregate, anonymized data</li>
                                    <li>You control your communication preferences</li>
                                    <li>GDPR and data protection compliant</li>
                                </ul>
                                <p>Read our complete Privacy Policy for detailed information about data handling.</p>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Contact CTA */}
                <div className={styles.contactcta}>
                    <h2>Still Have Questions?</h2>
                    <p>Our team is here to help you succeed</p>
                    <a href="/contact" className={styles.contactbutton}>
                        Contact Us
                    </a>
                </div>
            </div>
        </>
    );
};

export default FaqComp;
