import React from "react";
import about_photo from "/src/assets/About-home-photo.jpg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "../../Style/Home/AboutHome.css";

const AboutHome = () => {
  const { t } = useTranslation();

  return (
    <section className="about-home-section my-5 p-5 d-flex flex-column flex-lg-row align-items-center gap-4">
      <motion.div
        className="about-img col-lg-6 text-center"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src={about_photo}
          alt={t("about.alt") || "About us"}
          className="img-fluid rounded-4 shadow-sm"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        className="about-text col-lg-6 text-center text-lg-start"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="fw-bold mb-3">{t("about.title")}</h2>
        <p className="text-muted mb-4">{t("about.desc1")}</p>
        <p className="text-muted mb-4">{t("about.desc2")}</p>

        <a
          href="#course"
          className="btn about-btn px-4 py-2 rounded-3 fw-semibold"
        >
          {t("about.button")}
        </a>
      </motion.div>
    </section>
  );
};

export default AboutHome;
