import React from "react";
import "./../../Style/Home/Courses.css";
import { FaBook, FaUser, FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import courses from "../../data/courses.json";

const Courses = () => {
  const { t } = useTranslation();

  const renderStars = (rating) =>
    [...Array(5)].map((_, i) => (
      <FaStar key={i} className={i < rating ? "text-warning" : "text-secondary"} />
    ));

  return (
    <div id="course" className="container my-5">
      {/* Title */}
      <div className="text-center">
        <h1 className="mt-5 fw-bold text-white px-5 py-2 rounded-3 d-inline-block">
          {t("Course.newCourses")}
        </h1>
      </div>

      {/* Courses */}
      <div className="row g-4 mt-4">
        {courses.map((course) => (
          <div className="col-sm-6 col-lg-3" key={course.id}>
            <Link to={`/course/${course.id}`} className="text-decoration-none text-dark">
              <div className="card h-100 shadow border-0 course-card overflow-hidden">
                <div className="course-img-container">
                  <img src={course.image} className="card-img-top" alt={course.title} />
                </div>

                <div className="card-body d-flex flex-column align-items-center text-center">
                  <h6 className="card-title fw-semibold mb-3">{course.title}</h6>

                  <ul className="list-unstyled small text-muted mb-3">
                    <li>
                      <FaBook className="me-1 text-primary" /> {course.lessons} {t("Course.lessons")}
                    </li>
                    <li>
                      <FaUser className="me-1 text-success" /> {course.students} {t("Course.students")}
                    </li>
                    <li>
                      <span className="badge bg-light text-dark">{course.level}</span>
                    </li>
                  </ul>

                  <div className="d-flex justify-content-between align-items-center w-100 mt-auto">
                    <button className="btn btn-primary btn-sm fw-semibold">
                      {t("Course.start")}
                    </button>
                    <div className="d-flex">{renderStars(course.rating)}</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* More*/}
      <div className="text-center mt-5">
        <Link to="/coursespage" className="btn more-btn fw-semibold px-4 py-2 rounded-3">
          {t("Course.more")}
        </Link>
      </div>
    </div>
  );
};

export default Courses;
