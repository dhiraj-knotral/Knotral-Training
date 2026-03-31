"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    try {
      const res = await fetch(`${API}/user/user-info`, {
        credentials: "include",
      });

      const data = await res.json();

      if (data.success) {
        setUser(data.response);
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error(err);
      setUser(null);
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

      setUser(null);
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);