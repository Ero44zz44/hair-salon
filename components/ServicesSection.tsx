"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "@/contexts/LanguageContext";

const SERVICE_IMAGES = [
  "https://images.unsplash.com/photo-1613754773306-532ec48b0de5?w=1800&q=90&fit=crop",
  "https://images.unsplash.com/photo-1712213396688-c6f2d536671f?w=900&q=85&fit=crop",
  "https://images.unsplash.com/photo-1717160675643-53a7a2ebaa9f?w=900&q=85&fit=crop",
  "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=900&q=85&fit=crop",
  "https://images.unsplash.com/photo-1634449571017-5fecfd26ad76?w=900&q=85&fit=crop",
  "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=900&q=85&fit=crop",
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
              className={`service-card${i === 0 ? " featured" : ""}`}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
            >
              <div className="service-card-image">
                <Image
                  src={SERVICE_IMAGES[i] ?? SERVICE_IMAGES[0]}
                  alt={service.name}
                  fill
                  sizes={
                    i === 0
                      ? "(max-width: 1023px) 100vw, 66vw"
                      : "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  }
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
