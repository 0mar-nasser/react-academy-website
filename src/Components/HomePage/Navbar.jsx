import React, { useState , useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons/css/boxicons.min.css";
import "../../Style/Home/Navbar.css";

const Navbar = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const { i18n, t } = useTranslation();

  const toggleLanguages = () => setShowLanguages(!showLanguages);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setShowLanguages(false);

  };
  useEffect(() => {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    document.body.style.paddingBottom = `${navbar.offsetHeight + 10}px`;
  }
}, []);


  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-bottom shadow-sm py-2">
      <div className="container d-flex justify-content-center position-relative">
        <ul className="nav justify-content-around w-100">

          {/* Sign Up */}
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              <i className="bx bx-user"></i>
              <span className="nav-text">{t("nav.signup")}</span>
            </NavLink>
          </li>

          {/* Language */}
          <li className=" position-relative">
            <button className="nav-link" onClick={toggleLanguages}>
              <i className="bx bx-globe"></i>
              <span className="nav-text">{t("nav.language")}</span>
            </button>

            {showLanguages && (
              <div className="language-menu">
                <button onClick={() => changeLanguage("en")}>English</button>
                <button onClick={() => changeLanguage("ar")}>العربية</button>
              </div>
            )}
          </li>

          {/* Home */}
          <li className="">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              <i className="bx bx-home"></i>
              <span className="nav-text">{t("nav.home")}</span>
            </NavLink>
          </li>

          {/*  My Courses */}
          <li className="">
            <NavLink
              to="/coursespage"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              <i className="bx bx-book-open"></i>
              <span className="nav-text">{t("nav.courses")}</span>
            </NavLink>
          </li>

          {/* About */}
          <li className="">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              <i className="bx bx-info-circle"></i>
              <span className="nav-text">{t("nav.about")}</span>
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
