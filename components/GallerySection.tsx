"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowSquareOut } from "@phosphor-icons/react";
import { useTranslation } from "@/contexts/LanguageContext";

const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=960&q=90&fit=crop", alt: "Balayage naturel", width: 960, height: 641 },
  { src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=960&q=90&fit=crop", alt: "Coupe carré", width: 960, height: 1440 },
  { src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=960&q=90&fit=crop", alt: "Coiffure ondulée", width: 960, height: 640 },
  { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=960&q=90&fit=crop", alt: "Couleur vibrante", width: 960, height: 1440 },
  { src: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=960&q=90&fit=crop", alt: "Coupe moderne", width: 960, height: 640 },
  { src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=960&q=90&fit=crop", alt: "Soin intense", width: 960, height: 640 },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=960&q=90&fit=crop", alt: "Style editorial", width: 960, height: 640 },
  { src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=960&q=90&fit=crop", alt: "Brushing lissant", width: 960, height: 667 },
];

export default function GallerySection() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();

  return (
    <section className="section" style={{ background: "var(--surface)" }} id="galerie">
      <div className="section-inner">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "3rem" }}
        >
          <h2
            className="font-display"
            style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 400, color: "var(--text)" }}
          >
            {t.gallery.title}
          </h2>
        </motion.div>

        <div className="gallery-masonry">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              className="gallery-item"
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                style={{ width: "100%", height: "auto" }}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <ArrowSquareOut size={28} color="var(--text)" weight="light" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
