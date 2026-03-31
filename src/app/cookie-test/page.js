"use client";
import { useEffect } from "react";

export default function CookieTest() {
  useEffect(() => {
    const checkCookies = () => {
      const testKey = "test_3p_cookie";
      const testValue = "enabled";

      // 1. Attempt to write a cookie that mimics a 3rd-party session cookie
      // 'SameSite=None; Secure' is required for cross-site cookies
      document.cookie = `${testKey}=${testValue}; Max-Age=60; SameSite=None; Secure`;

      // 2. Attempt to read it back
      const cookieExists = document.cookie.split(';').some((item) => 
        item.trim().startsWith(`${testKey}=`)
      );

      // 3. Send the boolean result back to the Login page
      window.parent.postMessage({ 
        type: "COOKIE_CHECK_RESULT", 
        isEnabled: cookieExists 
      }, "*"); 
    };

    checkCookies();
  }, []);

  return null; 
}