"use client";
import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { MapPin, Phone, Envelope, Clock, InstagramLogo, FacebookLogo } from "@phosphor-icons/react";
import { useTranslation } from "@/contexts/LanguageContext";
import { SALON } from "@/lib/config";

export default function ContactSection() {
  const { t, lang } = useTranslation();
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 900);
  }

  const hours =
    lang === "fr"
      ? [SALON.hours.weekdays, SALON.hours.saturday, SALON.hours.sunday]
      : [SALON.hours.weekdays_en, SALON.hours.saturday_en, SALON.hours.sunday_en];

  return (
    <section
      className="section"
      id="contact"
      style={{ background: "var(--surface)" }}
    >
      <div className="section-inner">
        <motion.h2
          className="font-display"
          style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 400, color: "var(--text)", marginBottom: "4rem" }}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.contact.title}
        </motion.h2>

        <div className="contact-grid">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="contact-info-item">
              <MapPin className="contact-icon" size={20} weight="light" />
              <div>
                <p className="contact-label">{t.contact.address_label}</p>
                <p className="contact-value">
                  {SALON.address.street}<br />
                  {SALON.address.postal} {SALON.address.city}<br />
                  {SALON.address.country}
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <Clock className="contact-icon" size={20} weight="light" />
              <div>
                <p className="contact-label">{t.contact.hours_label}</p>
                <p className="contact-value">
                  {hours.map((h, i) => <span key={i}>{h}<br /></span>)}
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <Phone className="contact-icon" size={20} weight="light" />
              <div>
                <p className="contact-label">{t.contact.phone_label}</p>
                <p className="contact-value">
                  <a href={`tel:${SALON.phone}`}>{SALON.phone}</a>
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <Envelope className="contact-icon" size={20} weight="light" />
              <div>
                <p className="contact-label">{t.contact.email_label}</p>
                <p className="contact-value">
                  <a href={`mailto:${SALON.email}`}>{SALON.email}</a>
                </p>
              </div>
            </div>

            <div className="contact-info-item" style={{ marginTop: "0.5rem" }}>
              <div>
                <p className="contact-label" style={{ marginBottom: "1rem" }}>{t.contact.follow_label}</p>
                <div style={{ display: "flex", gap: "1.25rem" }}>
                  <a href={SALON.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: "var(--text-muted)", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")} onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                    <InstagramLogo size={24} weight="light" />
                  </a>
                  <a href={SALON.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: "var(--text-muted)", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")} onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                    <FacebookLogo size={24} weight="light" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {sent ? (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ color: "var(--accent)", fontSize: "1.0625rem", fontFamily: "var(--font-display), serif", fontStyle: "italic" }}
              >
                {t.contact.form.success}
              </motion.p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">{t.contact.form.name}</label>
                  <input id="name" name="name" type="text" required className="form-input" placeholder={t.contact.form.name} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">{t.contact.form.email}</label>
                  <input id="email" name="email" type="email" required className="form-input" placeholder={t.contact.form.email} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">{t.contact.form.phone}</label>
                  <input id="phone" name="phone" type="tel" className="form-input" placeholder={t.contact.form.phone} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">{t.contact.form.message}</label>
                  <textarea id="message" name="message" required className="form-textarea" placeholder={t.contact.form.message} />
                </div>
                <button type="submit" className="btn-primary" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
                  {loading ? "..." : t.contact.form.send}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        <motion.div
          className="map-embed"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <iframe
            title="Maison Céleste - Localisation"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              `${SALON.address.street}, ${SALON.address.postal} ${SALON.address.city}, ${SALON.address.country}`
            )}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
