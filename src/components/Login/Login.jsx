"use client";
import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaHome } from "react-icons/fa";
import Link from "next/link";
import styles from "./Login.module.css";
import { useSearchParams } from "next/navigation";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);


  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/user-dashboard";

  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");

  if (token) {
    localStorage.setItem("token", token);
    window.location.replace("/user-dashboard");
  }
}, []);

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
        localStorage.setItem("token", data.token); // ⭐ add this
        window.location.href = redirect;
      } else {
        alert(data.message || "Login failed ❌");
      }

    } catch {
      alert("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

 const handleGoogleLogin = () => {
    const redirectUrl = window.location.href;

    window.location.href =
      `${API}/google/google-login?redirect=${encodeURIComponent(
        redirectUrl
      )}`;
  };

  // handle google callback
  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      localStorage.setItem("token", token);

      const cleanUrl = window.location.pathname;

      window.location.replace(cleanUrl);
    }
  }, []);

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
          {/* <Link href="/" className={styles.homeBtn}>
            <FaHome /> Home
          </Link> */}

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
            <Link href="/forget-password" className={styles.forgot}>
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className={`${styles.submitBtn} ${styles.enabled}`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className={styles.divider}>OR</div>

<button
    type="button"
    onClick={handleGoogleLogin}
    className={styles.googleBtn}
>
    <img
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="google"
        style={{ width: "18px", marginRight: "8px" }}
    />
    Continue with Google
</button>

          <p className={styles.footer}>
            Don’t have an account? <a href="/sign-up">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}