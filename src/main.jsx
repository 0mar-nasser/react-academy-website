import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter , Routes, Route } from "react-router-dom";
import "./Style/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Components/HomePage/Navbar";
import Hero from "./Components/HomePage/Hero";
import About_Home from "./Components/HomePage/About-Home";
import Courses from "./Components/HomePage/Courses";
import Footer from "./Components/HomePage/Footer";
import About from "./Components/Pages/About";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import CoursesPage from "./Components/Pages/CoursesPage";
import CourseDetails from "./Components/Pages/CourseDetails";

import "./i18n";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* 🏠 Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About_Home />
              <Courses />
              <Footer />
            </>
          }
        />

        {/* ℹ️ About Page */}
        <Route
          path="/about"
          element={
            <>
              <About />
              <Footer />
            </>
          }
        />

        {/* 🔐 Auth Pages */}
        <Route
          path="/login"
          element={
            <>
              <Login />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Signup />
              <Footer />
            </>
          }
        />

        {/* 📚 Courses Pages */}
        <Route
          path="/coursespage"
          element={
            <>
              <CoursesPage />
              <Footer />
            </>
          }
        />

        {/* 🧩 Course Details Page */}
        <Route
          path="/course/:id"
          element={
            <>
              <CourseDetails />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
