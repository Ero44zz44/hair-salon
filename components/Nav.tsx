"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "@/contexts/LanguageContext";
import { type Lang } from "@/lib/translations";
import { SALON } from "@/lib/config";

export default function Nav() {
  const { t, lang, setLang } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#equipe", label: t.nav.team },
    { href: "#galerie", label: t.nav.gallery },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <a href="#" className="nav-logo">{SALON.name}</a>

        <ul className="nav-links" style={{ margin: "0 auto" }}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <div className="lang-toggle">
            {(["fr", "en"] as Lang[]).map((l, i) => (
              <>
                {i > 0 && <span className="divider" key={`div-${l}`} style={{ color: "var(--border)", fontSize: "0.625rem" }}>|</span>}
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={lang === l ? "active" : ""}
                  aria-label={`Switch to ${l.toUpperCase()}`}
                >
                  {l.toUpperCase()}
                </button>
              </>
            ))}
          </div>
          <a href="#contact" className="btn-primary nav-links">{t.nav.book}</a>
        </div>

        <button
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <div className="lang-toggle" style={{ position: "absolute", top: "1.5rem", right: "5rem" }}>
          {(["fr", "en"] as Lang[]).map((l, i) => (
            <>
              {i > 0 && <span key={`div-${l}`} style={{ color: "var(--border)", fontSize: "0.625rem" }}>|</span>}
              <button
                key={l}
                onClick={() => setLang(l)}
                className={lang === l ? "active" : ""}
              >
                {l.toUpperCase()}
              </button>
            </>
          ))}
        </div>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn-primary" onClick={() => setMenuOpen(false)} style={{ marginTop: "1rem" }}>
          {t.nav.book}
        </a>
      </div>
    </>
  );
}
