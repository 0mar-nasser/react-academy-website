// src/Components/Courses/CourseDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaBook,
  FaUser,
  FaStar,
  FaClock,
  FaClipboardList,
  FaChalkboardTeacher,
} from "react-icons/fa";
import courses from "../../data/courses.json";
import "../../Style/PageStyle/CourseDetails.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CourseDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return <h3 className="text-center my-5">{t("CourseDetails.notFound")}</h3>;
  }

  const renderStars = (rating) =>
    [...Array(5)].map((_, i) => (
      <FaStar key={i} className={i < rating ? "text-warning" : "text-secondary"} />
    ));

  return (
    <div className="container my-5 course-details">
      <div className="row align-items-center">
        <motion.div
          className="col-lg-6 mb-4 mb-lg-0 text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={course.image}
            alt={course.title}
            className="img-fluid rounded-4 shadow-sm"
          />
        </motion.div>

        <motion.div
          className="col-lg-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="fw-bold mb-3">{course.title}</h2>
          <div className="d-flex align-items-center gap-2 mb-3">
            {renderStars(course.rating)}
          </div>

          <p className="text-muted mb-3">{course.description}</p>

          <ul className="list-unstyled mb-3">
            <li>
              <FaBook className="me-2 text-primary" /> {t("CourseDetails.lessons")}: {course.lessons}
            </li>
            <li>
              <FaClipboardList className="me-2 text-warning" /> {t("CourseDetails.exams")}: {course.exams}
            </li>
            <li>
              <FaClock className="me-2 text-danger" /> {t("CourseDetails.duration")}: {course.duration}
            </li>
            <li>
              <FaUser className="me-2 text-success" /> {t("CourseDetails.students")}: {course.students}
            </li>
            <li>
              <FaChalkboardTeacher className="me-2 text-info" /> {t("CourseDetails.instructor")}: {course.instructor}
            </li>
            <li>{t("CourseDetails.level")}: <strong>{course.level}</strong></li>
            <li>{t("CourseDetails.price")}: <strong>${course.price}</strong></li>
          </ul>

          <div className="d-flex gap-3">
            <button className="btn btn-primary px-4 py-2 rounded-3">
              {t("CourseDetails.enroll")}
            </button>
            <Link to="/coursespage" className="btn btn-outline-secondary px-4 py-2 rounded-3">
              {t("CourseDetails.back")}
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h4 className="fw-semibold mb-3">{t("CourseDetails.details")}</h4>
        <p className="text-muted">{course.details}</p>
      </motion.div>

      <div className="mt-5">
        <h4 className="fw-semibold mb-3">{t("CourseDetails.learn")}</h4>
        <ul className="list-unstyled">
          {course.whatYouWillLearn.map((item, i) => (
            <li key={i}>✅ {item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <h4 className="fw-semibold mb-3">{t("CourseDetails.requirements")}</h4>
        <ul className="list-unstyled">
          {course.requirements.map((req, i) => (
            <li key={i}>💡 {req}</li>
          ))}
        </ul>
      </div>

      <div className="mt-5 d-flex align-items-center gap-3">
        <img
          src={course.instructorInfo.image}
          alt={course.instructorInfo.name}
          className="rounded-circle shadow-sm"
          width="80"
          height="80"
        />
        <div>
          <h5 className="fw-bold mb-1">{course.instructorInfo.name}</h5>
          <p className="text-muted mb-0">{course.instructorInfo.bio}</p>
        </div>
      </div>

      <div className="mt-5">
        <h4 className="fw-semibold mb-3">{t("CourseDetails.reviews")}</h4>
        {course.reviews.map((review, i) => (
          <div key={i} className="border rounded-3 p-3 mb-3 shadow-sm bg-light">
            <h6 className="fw-bold">{review.name}</h6>
            <div>{renderStars(review.rating)}</div>
            <p className="text-muted mb-0">{review.comment}</p>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <h4 className="fw-semibold mb-3">{t("CourseDetails.faq")}</h4>
        {course.faq.map((item, i) => (
          <div key={i} className="mb-3">
            <strong>Q: {item.question}</strong>
            <p className="text-muted mb-0">A: {item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
