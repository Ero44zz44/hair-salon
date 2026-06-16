"use client";
import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "@/contexts/LanguageContext";

const TEAM_IMAGES = [
  "https://d8j0ntlcm91z4.cloudfront.net/user_3F0G0vBzSnzuSbF0F0g5zLwIR6B/hf_20260616_001615_696abbe3-abf1-45f6-815d-868d9cf62c65.png",
  "https://d8j0ntlcm91z4.cloudfront.net/user_3F0G0vBzSnzuSbF0F0g5zLwIR6B/hf_20260616_001732_46f16e64-8d76-4a97-b989-36028f7f1abb.png",
  "https://d8j0ntlcm91z4.cloudfront.net/user_3F0G0vBzSnzuSbF0F0g5zLwIR6B/hf_20260616_001814_a5f278fa-5a72-4dd7-aa14-414786f48e46.png",
];

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
                <img
                  src={TEAM_IMAGES[i]}
                  alt={member.name}
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
