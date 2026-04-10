"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./LoginModal.module.css";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function LoginModal({ show, onClose, onLoginSuccess }) {
    const [form, setForm] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const { refreshUser } = useAuth();

    const router = useRouter();
    const searchParams = useSearchParams();
    const redirect = searchParams.get("redirect");
    const API = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!show) return null;

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
                localStorage.setItem("token", data.token);

                await refreshUser();   // ⭐ update auth context

                onClose();

                if (onLoginSuccess) {
                    onLoginSuccess();   // ⭐ open register modal
                } else if (redirect) {
                    router.push(redirect);
                } else {
                    router.refresh();
                }
            } else {
                alert(data.message || "Login failed ❌");
            }

        } catch (error) {
            console.error("Login error:", error);
            alert("Server error ❌");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <form onSubmit={handleSubmit} className={styles.card}>
                    <button
                        type="button"
                        className={styles.closeBtn}
                        onClick={onClose}
                    >
                        ✕
                    </button>

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

                    <button
                        type="submit"
                        className={`${styles.submitBtn} ${styles.enabled}`}
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>

                    <p className={styles.footer}>
                        Don’t have an account?{" "}
                        <Link href={`/sign-up?redirect=${redirect || window.location.pathname}`}>
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}