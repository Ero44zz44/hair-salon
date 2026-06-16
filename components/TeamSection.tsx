"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "@/contexts/LanguageContext";

const TEAM_IMAGES = ["/images/team-1.jpg", "/images/team-2.jpg", "/images/team-3.jpg"];

export default function TeamSection() {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const members = t.team.members;

  return (
    <section className="section" id="equipe">
      <div className="section-inner">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "3.5rem" }}
        >
          <h2
            className="font-display"
            style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 400, color: "var(--text)" }}
          >
            {t.team.title}
          </h2>
        </motion.div>

        <div className="team-grid">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              className="team-card"
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="team-portrait">
                <Image
                  src={TEAM_IMAGES[i]}
                  alt={member.name}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="team-overlay" />
              </div>
              <p className="team-title">{member.title}</p>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-specialty">{member.specialty}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
