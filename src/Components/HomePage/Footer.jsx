import React from "react";
import "../../Style/Home/Footer.css";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "/src/assets/Logo.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-section bg-light pt-5 mt-5">
      <div className="container">
        <div className="row gy-5">

          {/* Left Side — Contact Form */}
          <div className="col-lg-6 pb-5 mb-4">
            <h4 className="fw-bold mb-4 text-gradient">
              {t("Contact.title", { defaultValue: "Contact Us" })}
            </h4>
            <form className="p-4 shadow-sm rounded-4 bg-white">
              {/* name */}
              <div className="mb-3">
                <label className="form-label fw-semibold text-primary-custom">
                  {t("Contact.name", { defaultValue: "Name" })}
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("Contact.placeholderName", { defaultValue: "Enter your name" })}
                />
              </div>

              {/* email */}
              <div className="mb-3">
                <label className="form-label fw-semibold text-primary-custom">
                  {t("Contact.email", { defaultValue: "Email" })}
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder={t("Contact.placeholderEmail", { defaultValue: "Enter your email" })}
                />
              </div>

              {/* messege */}
              <div className="mb-3">
                <label className="form-label fw-semibold text-primary-custom">
                  {t("Contact.message", { defaultValue: "Message" })}
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder={t("Contact.placeholderMessage", { defaultValue: "Write your message here..." })}
                ></textarea>
              </div>

              <button type="submit" className="btn w-100 fw-semibold send-btn">
                {t("Contact.send", { defaultValue: "Send Message" })}
              </button>
            </form>
          </div>

          {/* Right Side — Info & Links */}
          <div className="col-lg-6 d-flex flex-column justify-content-between pb-5 mb-4">
            <div>
              <div className="d-flex align-items-center mb-4">
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "45px", height: "45px", marginRight: "10px" }}
                />
                <h4 className="fw-bold mb-0">ACADEMY</h4>
              </div>

              <p className="text-muted small mb-4">
                {t("Footer.desc", {
                  defaultValue:
                    "Learn, grow, and achieve your goals with us every day.",
                })}
              </p>

              <ul className="list-inline mb-4">
                <li className="list-inline-item mx-2">
                  <a href="#" className="text-decoration-none text-dark small">
                    {t("Footer.about", { defaultValue: "About" })}
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a href="#" className="text-decoration-none text-dark small">
                    {t("Footer.contact", { defaultValue: "Contact" })}
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a href="#" className="text-decoration-none text-dark small">
                    {t("Footer.privacy", { defaultValue: "Privacy" })}
                  </a>
                </li>
                <li className="list-inline-item mx-2">
                  <a href="#" className="text-decoration-none text-dark small">
                    {t("Footer.terms", { defaultValue: "Terms" })}
                  </a>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="social-icons">
                <a href="#" className="text-dark mx-2 fs-5"><FaFacebook /></a>
                <a href="#" className="text-dark mx-2 fs-5"><FaTwitter /></a>
                <a href="#" className="text-dark mx-2 fs-5"><FaInstagram /></a>
                <a href="#" className="text-dark mx-2 fs-5"><FaLinkedin /></a>
              </div>
            </div>

            {/* copy-right  */}
            <p className="small text-muted mt-4 mb-0 text-center text-lg-start pb-4">
              {t("Footer.rights", { year: new Date().getFullYear() })}
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
