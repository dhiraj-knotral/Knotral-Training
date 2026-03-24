"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import styles from "./SignUp.module.css";
import "react-phone-input-2/lib/style.css";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [step, setStep] = useState("form");
  const [timer, setTimer] = useState(30);
const [canResend, setCanResend] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    userType: "",
  });

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  const [showPassword, setShowPassword] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);

  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  // ✅ Handle Input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setForm({ ...form, phone: value });
  };

 const handleOtpChange = (value, index) => {
  if (!/^[a-zA-Z0-9]?$/.test(value)) return; // ✅ allow letters + numbers

  const newOtp = [...otp];
  newOtp[index] = value; // optional: normalize
  setOtp(newOtp);

  if (value && index < otp.length - 1) {
    inputsRef.current[index + 1]?.focus();
  }
};

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  // ✅ Send OTP
 const handleSendOtp = async () => {
  if (!form.email) return alert("Enter email first");

  try {
    setSendingOtp(true);

    const res = await fetch(`${API}/user/send-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: form.email }),
    });

    const data = await res.json();

    if (!data.success) {
      alert(data.message || "Failed to send OTP");
      return;
    }

    alert("OTP sent ✅");
    setStep("otp");

    // ✅ Start timer
    setTimer(30);
    setCanResend(false);

  } catch {
    alert("Error sending OTP");
  } finally {
    setSendingOtp(false);
  }
};

useEffect(() => {
  let interval;

  if (step === "otp" && timer > 0) {
    interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  }

  if (timer === 0) {
    setCanResend(true);
    clearInterval(interval);
  }

  return () => clearInterval(interval);
}, [timer, step]);

  // ✅ Verify OTP
  const handleVerifyOtp = async () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      return alert("Enter complete OTP");
    }

    try {
      const res = await fetch(`${API}/user/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          otp: enteredOtp,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Email verified ✅");
        setEmailVerified(true);
        setStep("verified");
      } else {
        alert(data.message || "Invalid OTP");
      }
    } catch {
      alert("Verification failed");
    }
  };

  // ✅ Signup
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailVerified) {
      return alert("Verify email first ❌");
    }

    if (!form.userType) {
      return alert("Select user type");
    }

    setLoading(true);

    try {
      const res = await fetch(`${API}/user/signup-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Signup successful ✅");
        window.location.href = "/login";
      } else {
        alert(data.message || "Signup failed");
      }
    } catch {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* LEFT */}
      <div className={styles.left}>
        <h1>
          Crafting your <br />
          <span>scholarly</span> future.
        </h1>
        <p>Join a sanctuary designed for focused learning.</p>
      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        <form onSubmit={handleSubmit} className={styles.card}>
          <h2>Create Account</h2>

          {/* USER TYPE */}
          <div className={styles.userType}>
            {["student", "teacher", "school", "solutionProvider"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setForm({ ...form, userType: type })}
                className={
                  form.userType === type
                    ? `${styles.typeBtn} ${styles.active}`
                    : styles.typeBtn
                }
              >
                {type}
              </button>
            ))}
          </div>

          {/* NAME */}
          <input
            name="name"
            className={styles.input}
            placeholder="Full Name"
            onChange={handleChange}
          />

          {/* PHONE */}
          <div className={styles.phoneWrapper}>
            <PhoneInput
              country={"in"}
              value={form.phone}
              onChange={handlePhoneChange}
              inputClass={styles.phoneInput}
              containerClass={styles.phoneContainer}
              buttonClass={styles.phoneDropdown}
              dropdownClass={styles.phoneDropdownList}
              countryCodeEditable={false}
            />
          </div>

          {/* EMAIL */}
       <div className={styles.emailWrapper}>
  <input
    name="email"
    className={styles.input}
    placeholder="Email"
    onChange={handleChange}
    value={form.email}
    disabled={emailVerified} // ✅ disable after verification
  />

  {!emailVerified ? (
    <button
      type="button"
      className={styles.verifyBtn}
      onClick={handleSendOtp}
      disabled={sendingOtp}
    >
      {sendingOtp ? "Sending..." : "Verify"}
    </button>
  ) : (
    <div className={styles.verifiedBadge}>
      ✔ Verified
    </div>
  )}
</div>

          {/* OTP */}
         {step === "otp" && (
  <div className={styles.otpBox}>
    <div className={styles.otpInputs}>
      {otp.map((digit, i) => (
        <input
          key={i}
          ref={(el) => (inputsRef.current[i] = el)}
          maxLength={1}
          value={digit}
          onChange={(e) => handleOtpChange(e.target.value, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
        />
      ))}
    </div>

    <button
      type="button"
      className={styles.verifyOtpBtn}
      onClick={handleVerifyOtp}
    >
      Verify OTP
    </button>

    {/* 🔥 NEW RESEND SECTION */}
    <div className={styles.resendBox}>
      {canResend ? (
        <button
          type="button"
          onClick={handleSendOtp}
          className={styles.resendBtn}
        >
          Resend OTP
        </button>
      ) : (
        <p className={styles.timerText}>
          Resend OTP in {timer}s
        </p>
      )}
    </div>
  </div>
)}

          {/* PASSWORD */}
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className={styles.input}
              placeholder="Password"
              disabled={!emailVerified}
              onChange={handleChange}
            />

            <span
              className={styles.eye}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* SUBMIT */}
          <button
            className={`${styles.submitBtn} ${
              emailVerified ? styles.enabled : styles.disabled
            }`}
            disabled={!emailVerified || loading}
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>

          <p className={styles.footer}>
            Already have account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}