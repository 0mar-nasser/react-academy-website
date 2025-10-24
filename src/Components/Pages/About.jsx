import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaBookOpen,
  FaUsers,
  FaChalkboardTeacher,
  FaGlobe,
  FaRocket,
  FaCertificate,
  FaHeart,
} from "react-icons/fa";
import "../../Style/PageStyle/About.css";
import logo from "/src/assets/card.jpg";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page container my-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold tx-gradient">
          {t("About.title", { defaultValue: "About Our Academy" })}
        </h2>
        <p className="text-muted mt-2">
          {t("About.subtitle", {
            defaultValue:
              "A modern learning platform that combines technology and creativity to empower learners worldwide.",
          })}
        </p>
      </div>

      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 text-center">
          <img
            src={logo}
            alt={t("About.title", { defaultValue: "About Us" })}
            className="about-logo img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-6 fade-in">
          <h4 className="fw-semibold tx-color mb-3">
            {t("About.whoWeAreTitle", { defaultValue: "Who We Are" })}
          </h4>
          <p className="text-muted lh-lg">
            {t("About.whoWeAreDesc", {
              defaultValue:
                "We are a digital academy dedicated to delivering high-quality, interactive, and accessible online education. Our mission is to make learning simple, engaging, and available for everyone.",
            })}
          </p>

          <h4 className="fw-semibold mt-4 tx-color mb-2">
            {t("About.missionTitle", { defaultValue: "Our Mission" })}
          </h4>
          <p className="text-muted lh-lg">
            {t("About.missionDesc", {
              defaultValue:
                "To empower learners through innovative technology, personalized content, and practical learning experiences.",
            })}
          </p>
        </div>
      </div>

      {/* قيمنا */}
      <section className="values-section py-5">
        <h3 className="fw-bold text-center mb-4 tx-gradient">
          {t("About.valuesTitle", { defaultValue: "Our Core Values" })}
        </h3>
        <div className="row text-center">
          {[
            {
              icon: <FaBookOpen />,
              title: "Knowledge",
              desc: "We believe knowledge is the foundation of success and growth.",
            },
            {
              icon: <FaUsers />,
              title: "Community",
              desc: "We build a strong, supportive environment where learners grow together.",
            },
            {
              icon: <FaChalkboardTeacher />,
              title: "Excellence",
              desc: "We aim for top-quality learning and innovative methods.",
            },
            {
              icon: <FaHeart />,
              title: "Passion",
              desc: "We love what we do and inspire learners to feel the same way.",
            },
          ].map((val, i) => (
            <div key={i} className="col-md-3 mb-4 fade-up">
              <div className="value-card p-4 rounded shadow-sm h-100">
                <div className="fs-1 tx-color mb-3">{val.icon}</div>
                <h5 className="fw-semibold">{val.title}</h5>
                <p className="text-muted small">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ليه تختارنا */}
      <section className="why-choose-us py-5">
        <h3 className="fw-bold text-center mb-4 tx-gradient">
          {t("About.whyChooseUsTitle", { defaultValue: "Why Choose Us?" })}
        </h3>
        <div className="row text-center">
          {[
            {
              icon: <FaGlobe />,
              title: "Global Access",
              desc: "Learn from anywhere, anytime, with our 24/7 online platform.",
            },
            {
              icon: <FaChalkboardTeacher />,
              title: "Expert Instructors",
              desc: "All courses are taught by experienced professionals.",
            },
            {
              icon: <FaCertificate />,
              title: "Certificates",
              desc: "Receive certificates to boost your career path.",
            },
            {
              icon: <FaRocket />,
              title: "Career Growth",
              desc: "Gain real skills that help you reach your professional goals.",
            },
          ].map((item, i) => (
            <div key={i} className="col-md-3 mb-4 fade-up">
              <div className="why-card p-4 rounded shadow-sm h-100">
                <div className="fs-1 tx-color mb-2">{item.icon}</div>
                <h6 className="fw-semibold">{item.title}</h6>
                <p className="text-muted small">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
