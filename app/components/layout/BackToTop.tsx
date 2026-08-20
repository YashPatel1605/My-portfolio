"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = document.getElementById("home")?.offsetHeight ?? 520;
      setVisible(window.scrollY > heroHeight * 0.75);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a href="#home" className={`floating-top ${visible ? "show" : ""}`} aria-label="Back to top">
      <ArrowUp size={20} />
    </a>
  );
}
