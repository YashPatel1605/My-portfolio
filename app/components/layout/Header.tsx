"use client";

import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "../../data/portfolio";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("modal-locked", open);
    return () => document.body.classList.remove("modal-locked");
  }, [open]);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-28% 0px -58% 0px",
        threshold: [0.08, 0.18, 0.32, 0.48],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""} id="siteHeader">
      <div className="wrap nav-inner">
        <a className="logo" href="#home" aria-label="Yash Patel home">
          <span className="logo-mark">&lt;</span>Yash Patel<span className="logo-mark"> /&gt;</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              className={`nav-link ${activeSection === item.href.slice(1) ? "active" : ""}`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <a className="btn btn-primary btn-sm nav-cta" href={profile.resumeHref} download>
            <Download size={16} />
            Resume
          </a>
          <button
            className={`burger ${open ? "open" : ""}`}
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        {navItems.map((item) => (
          <a
            className={`mob-link ${activeSection === item.href.slice(1) ? "active" : ""}`}
            href={item.href}
            key={item.href}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a className="btn btn-primary" href={profile.resumeHref} download onClick={() => setOpen(false)}>
          Download Resume
        </a>
      </div>
    </header>
  );
}
