"use client";
import { useTranslation } from "@/contexts/LanguageContext";
import { Star } from "@phosphor-icons/react";

export default function TestimonialsSection() {
  const { t } = useTranslation();
  const items = t.testimonials.items;
  const doubled = [...items, ...items];

  return (
    <section className="section" style={{ overflow: "hidden" }}>
      <div className="section-inner" style={{ marginBottom: "3rem" }}>
        <h2
          className="font-display"
          style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 400, color: "var(--text)" }}
        >
          {t.testimonials.title}
        </h2>
      </div>

      <div style={{ overflow: "hidden" }}>
        <div className="testimonials-track">
          {doubled.map((item, i) => (
            <div key={`${item.author}-${i}`} className="testimonial-card">
              <div className="testimonial-stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} weight="fill" />
                ))}
              </div>
              <p className="testimonial-text">"{item.text}"</p>
              <p className="testimonial-author">
                {item.author} - {item.city}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
