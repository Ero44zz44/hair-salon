"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "@/contexts/LanguageContext";

const PHILOSOPHY_IMG =
  "https://images.unsplash.com/photo-1621795092981-8db25a07d4a9?w=1200&q=85&fit=crop";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function PhilosophySection() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();

  return (
    <section className="section" style={{ background: "var(--surface)" }}>
      <div className="section-inner">
        <div className="philosophy-grid">
          <div>
            <motion.p
              className="label"
              style={{ marginBottom: "1.5rem" }}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease }}
            >
              {t.philosophy.label}
            </motion.p>
            <motion.blockquote
              className="philosophy-quote"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
            >
              {t.philosophy.quote}
            </motion.blockquote>
            <div className="divider-line" />
            <motion.p
              className="philosophy-body"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
            >
              {t.philosophy.body}
            </motion.p>
            <motion.div
              style={{ marginTop: "2.5rem" }}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
            >
              <a href="#equipe" className="btn-ghost">{t.philosophy.cta}</a>
            </motion.div>
          </div>

          <motion.div
            className="philosophy-image"
            initial={reduce ? false : { opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease }}
          >
            <Image
              src={PHILOSOPHY_IMG}
              alt="Coiffure artistique - Maison Céleste Paris"
              fill
              sizes="(max-width: 1023px) 100vw, 60vw"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
