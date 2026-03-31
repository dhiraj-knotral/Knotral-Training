"use client";

import React, { useEffect, useState, useCallback } from "react";

const CookieWarning = () => {
  const [showBanner, setShowBanner] = useState(false);

  const showCookieWarning = useCallback(() => setShowBanner(true), []);

  useEffect(() => {
    const dismissed = localStorage.getItem("cookieWarningDismissed");
    if (dismissed) return;

    // Create an invisible iframe to test 3rd-party cookie
    const iframe = document.createElement("iframe");
    iframe.src = "https://cookies-test.example.com/cookie-check.html"; // cross-domain test page
    iframe.style.display = "none";

    const handleMessage = (event) => {
      if (event.data?.status === "blocked") {
        setShowBanner(true);
      }
      iframe.remove();
      window.removeEventListener("message", handleMessage);
    };

    window.addEventListener("message", handleMessage);
    document.body.appendChild(iframe);

    // Clean up on unmount
    return () => {
      window.removeEventListener("message", handleMessage);
      if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
    };
  }, []);

  const handleLearnMore = () => {
    window.open(
      "https://www.allaboutcookies.org/manage-cookies/",
      "_blank"
    );
  };

  const handleClose = () => {
    setShowBanner(false);
    localStorage.setItem("cookieWarningDismissed", "true");
  };

  if (!showBanner) return null;

  return (
    <div
      style={{
        background: "#ffcc00",
        color: "#000",
        padding: "12px 20px",
        fontWeight: "bold",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 9999,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        flexWrap: "wrap",
      }}
    >
      <span>
        Third-party cookies are blocked in your browser. Please enable them to
        log in and use the site.
      </span>
      <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
        <button
          onClick={handleLearnMore}
          style={{
            background: "#000",
            color: "#fff",
            border: "none",
            padding: "6px 12px",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          How to enable
        </button>
        <button
          onClick={handleClose}
          style={{
            background: "transparent",
            color: "#000",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default CookieWarning;