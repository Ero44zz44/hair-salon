"use client";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "@/contexts/LanguageContext";

const HERO_VIDEO =
  "https://assets.mixkit.co/videos/preview/mixkit-woman-getting-her-hair-done-at-a-beauty-salon-32958-large.mp4";
const HERO_POSTER =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3F0G0vBzSnzuSbF0F0g5zLwIR6B/hf_20260616_001326_d55628c9-06a5-422c-8416-79db55cfc788.png";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  };
}

export default function HeroVideo() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.75;
  }, []);

  return (
    <section className="hero" id="hero">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster={HERO_POSTER}
        aria-hidden="true"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <div className="hero-content">
        <motion.p
          className="hero-eyebrow"
          {...(reduce ? {} : fadeUp(0))}
        >
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          className="hero-headline"
          {...(reduce ? {} : fadeUp(0.18))}
        >
          {t.hero.headline}
        </motion.h1>

        <motion.p
          className="hero-sub"
          {...(reduce ? {} : fadeUp(0.36))}
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          className="hero-ctas"
          {...(reduce ? {} : fadeUp(0.54))}
        >
          <a href="#contact" className="btn-primary">{t.hero.cta1}</a>
          <a href="#services" className="btn-ghost">{t.hero.cta2}</a>
        </motion.div>
      </div>
    </section>
  );
}
