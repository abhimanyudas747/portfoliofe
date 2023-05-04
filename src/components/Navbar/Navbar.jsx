import React from "react";
import "./style.css";

const Navbar = () => {
  const options = [
    {
      name: "Resume",
      link: "/resume",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Projects",
      link: "/projects",
    },
  ];
  return (
    <div className="navbar">
      {options.map((obj) => (
        <span className="nav-item">
          <a href={obj.link}>{obj.name}</a>
        </span>
      ))}
    </div>
  );
};

export default Navbar;
