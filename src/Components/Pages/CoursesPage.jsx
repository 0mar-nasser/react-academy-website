import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaStar, FaBook, FaUser, FaSearch, FaHeart } from "react-icons/fa";
import courses from "../../data/courses.json";
import "../../Style/PageStyle/CoursesPage.css"; // ✅ CSS File Added
import TopBar from "../HomePage/TopBar";

const CoursesPage = () => {
  const { t } = useTranslation();

  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterLevel, setFilterLevel] = useState("All");
  const [filterPrice, setFilterPrice] = useState("All");
  const [sort, setSort] = useState("default");
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredCourses = courses
    .filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory =
        filterCategory === "All" || course.category === filterCategory;
      const matchesLevel = filterLevel === "All" || course.level === filterLevel;
      const matchesPrice = filterPrice === "All" || course.price === filterPrice;
      return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
    })
    .sort((a, b) => {
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "students") return b.students - a.students;
      if (sort === "lessons") return b.lessons - a.lessons;
      return 0;
    });

  const renderStars = (rating, reviews = 0) => (
    <div className="d-flex align-items-center">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={i < rating ? "text-warning" : "text-secondary"}
        />
      ))}
      <small className="ms-2 text-muted">({reviews} reviews)</small>
    </div>
  );

  return (
    <>
    <TopBar />
    <div className="container my-5 courses-page">
      {/* العنوان */}
      <section className="text-center mb-5">
        <h2 className="fw-bold mb-3">
          {t("AllCourse.title")} <span className="text-primary">58340</span>{" "}
          {t("AllCourse.course")}
          <br />
          {t("AllCourse.subtitle")}
        </h2>

        {/* البحث والفلاتر */}
        <div className="filters-container shadow-sm p-3 rounded-4">
          <div className="input-group search-group mb-3">
            <span className="input-group-text bg-primary text-white">
              <FaSearch />
            </span>
            <input
              type="text"
              className="form-control search-input"
              placeholder={t("AllCourse.searchPlaceholder")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filters d-flex flex-wrap justify-content-center gap-2">
            <select
              className="filter-select"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="All">{t("AllCourse.allCategories")}</option>
              <option value="Programming">{t("AllCourse.programming")}</option>
              <option value="Design">{t("AllCourse.design")}</option>
              <option value="Business">{t("AllCourse.business")}</option>
            </select>

            <select
              className="filter-select"
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value)}
            >
              <option value="All">{t("AllCourse.allLevels")}</option>
              <option value="Beginner">{t("AllCourse.beginner")}</option>
              <option value="Intermediate">{t("AllCourse.intermediate")}</option>
              <option value="Advanced">{t("AllCourse.advanced")}</option>
            </select>

            <select
              className="filter-select"
              value={filterPrice}
              onChange={(e) => setFilterPrice(e.target.value)}
            >
              <option value="All">{t("AllCourse.allPrices")}</option>
              <option value="Free">{t("AllCourse.free")}</option>
              <option value="Paid">{t("AllCourse.paid")}</option>
            </select>

            <select
              className="filter-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">{t("AllCourse.sort")}</option>
              <option value="rating">{t("AllCourse.topRated")}</option>
              <option value="students">{t("AllCourse.mostStudents")}</option>
              <option value="lessons">{t("AllCourse.mostLessons")}</option>
            </select>
          </div>
        </div>

        <p className="text-muted mt-3">{t("AllCourse.orView")}</p>
      </section>

      {/* الكورسات */}
      <div className="row g-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div className="col-sm-6 col-lg-3" key={course.id}>
              <div className="card h-100 shadow-sm border-0 course-card">
                <img
                  src={course.image}
                  className="card-img-top rounded-top"
                  alt={course.title}
                  style={{ height: "180px", objectFit: "cover" }}
                />

                <div className="card-body d-flex flex-column p-3">
                  <h6 className="card-title fw-semibold mb-2">{course.title}</h6>

                  <ul className="list-unstyled small text-muted d-flex flex-wrap gap-2 mb-3">
                    <li>
                      <FaBook className="me-1 text-primary" /> {course.lessons}{" "}
                      {t("AllCourse.lessons")}
                    </li>
                    <li>
                      <FaUser className="me-1 text-success" /> {course.students}{" "}
                      {t("AllCourse.students")}
                    </li>
                    <li>
                      <span className="badge bg-light text-dark">{course.level}</span>
                    </li>
                    <li>
                      <span className="badge bg-info text-white">{course.price}</span>
                    </li>
                  </ul>

                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <Link
                      to={`/course/${course.id}`}
                      className="btn btn-outline-primary btn-sm px-3"
                    >
                      {t("AllCourse.details")}
                    </Link>

                    <button
                      className={`btn btn-sm ${
                        wishlist.includes(course.id)
                          ? "btn-danger"
                          : "btn-outline-danger"
                      }`}
                      onClick={() => toggleWishlist(course.id)}
                    >
                      <FaHeart />
                    </button>
                  </div>

                  <div className="mt-2">
                    {renderStars(course.rating, course.reviews?.length)}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">{t("AllCourse.noResults")}</p>
        )}
      </div>
    </div>
    </>
  );
};

export default CoursesPage;
