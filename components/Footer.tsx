"use client";
import { InstagramLogo, FacebookLogo, TiktokLogo } from "@phosphor-icons/react";
import { SALON } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { href: "#services", label: "Services" },
    { href: "#equipe", label: "L'équipe" },
    { href: "#galerie", label: "Galerie" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">
        <a href="#" className="footer-logo">{SALON.name}</a>

        <ul className="footer-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="footer-social">
          <a href={SALON.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramLogo size={20} weight="light" />
          </a>
          <a href={SALON.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FacebookLogo size={20} weight="light" />
          </a>
          <a href={SALON.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <TiktokLogo size={20} weight="light" />
          </a>
        </div>

        <p className="footer-copy">
          &copy; {year} {SALON.name}. {" "}
          {SALON.address.city}, France. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
