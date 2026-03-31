"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaHome } from "react-icons/fa";
import Link from "next/link";
import styles from "./Login.module.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch(`${API}/user/login-user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      window.location.href = "/"; // redirect
    } else {
      alert(data.message || "Login failed ❌");
    }

  } catch {
    alert("Server error ❌");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className={styles.container}>
      {/* LEFT SIDE */}
      <div className={styles.left}>
        <h1>
          Welcome Back <br />
          <span>to your account</span>
        </h1>
        <p>Log in and continue your journey with us.</p>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.right}>
        <form onSubmit={handleSubmit} className={styles.card}>

          {/* HOME BUTTON */}
          <Link href="/" className={styles.homeBtn}>
            <FaHome /> Home
          </Link>

          <h2>Login</h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className={styles.input}
            required
          />

          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className={styles.input}
              required
            />
            <span
              className={styles.eye}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className={styles.actions}>
            <a href="/forgot-password" className={styles.forgot}>
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className={`${styles.submitBtn} ${styles.enabled}`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className={styles.footer}>
            Don’t have an account? <a href="/sign-up">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}