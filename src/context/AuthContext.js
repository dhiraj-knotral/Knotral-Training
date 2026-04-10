"use client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const router = useRouter();


  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API}/user/user-info`, {
        method: "GET",
        credentials: "include",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });

      const data = await res.json();

      if (data.success) {
        setUser(data.response);
        localStorage.setItem("user", JSON.stringify(data.response));
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const logout = async () => {
    try {
      await fetch(`${API}/user/logout-user`, {
        method: "POST",
        credentials: "include",
      });

      localStorage.removeItem("token");
      setUser(null);
      router.replace("/");

    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, setUser, logout, refreshUser: getUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);