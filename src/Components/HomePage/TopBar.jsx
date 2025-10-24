import React from "react";
import "../../Style/Home/TopBar.css";

const TopBar = () => {
  const items = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "PHP",
    "Laravel",
    "MySQL",
    "Excel",
    "Word",
    "PowerPoint",
    "VS Code",
    "GitHub",
  ];

  return (
    <div className="top-bar">
      <div className="scroll-container">
        {[...items, ...items].map((item, index) => (
          <span key={index} className="scroll-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
