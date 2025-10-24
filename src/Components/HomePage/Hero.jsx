import React from "react";
import hero from "/src/assets/hero.png";
import "../../Style/Home/Hero.css";
import "../HomePage/TopBar.jsx";
import { useTranslation } from "react-i18next";
import TopBar from "../HomePage/TopBar.jsx";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <TopBar/>
    <div className="d-flex flex-column flex-lg-row align-items-center container mt-5">
      <div className="text-center text-lg-start mb-4 mb-lg-0">
        <p className="fw-bolder fs-2">
          {t("hero.title")} <br />
          {t("hero.subtitle")} <span>{t("hero.course")}</span>{" "}
          {t("hero.together")}
        </p>
        <a href="#course" className="btn fw-bold mt-4 hero-btn px-3 py-2 rounde rounded-3">
          {t("hero.button")}
        </a>
      </div>

      <div>
        <img src={hero} alt="hero" className="hero-img" />
      </div>
    </div>
    </>
  );
};

export default Hero;
