"use client";
import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "@/contexts/LanguageContext";

const SERVICE_IMAGES = [
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=90&fit=crop",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=85&fit=crop",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&q=85&fit=crop",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=85&fit=crop",
  "https://images.unsplash.com/photo-1582095133179-bfd08e2fb6b8?w=600&q=85&fit=crop",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=85&fit=crop",
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ServicesSection() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const items = t.services.items;

  return (
    <section className="section" id="services">
      <div className="section-inner">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          style={{ marginBottom: "3rem" }}
        >
          <h2
            className="font-display"
            style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 400, color: "var(--text)" }}
          >
            {t.services.title}
          </h2>
        </motion.div>

        <div className="services-grid">
          {items.map((service, i) => (
            <motion.div
              key={service.name}
              className={`service-card${i === 0 ? " hero" : ""}`}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
            >
              <div className="service-card-image">
                <img
                  src={SERVICE_IMAGES[i] ?? SERVICE_IMAGES[0]}
                  alt={service.name}
                  loading="lazy"
                />
              </div>
              <div className="service-card-content">
                <h3 className="service-card-name">{service.name}</h3>
                <p className="service-card-desc">{service.desc}</p>
                <span className="service-card-price">{service.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
