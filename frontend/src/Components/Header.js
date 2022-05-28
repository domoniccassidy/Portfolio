import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ secretClick, isDomonic }) => {
  const location = useLocation().pathname;
  return (
    <header>
      <div className={`me ${isDomonic && "purplify"}`} onClick={secretClick}>
        Domonic Cassidy
      </div>
      <div className="links">
        <Link className={`page ${location === "/" && "active"}`} to="/">
          Home
        </Link>
        <Link
          to="/projects"
          className={`page ${location === "/projects" && "active"}`}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className={`page ${location === "/contact" && "active"}`}
        >
          Contact Me
        </Link>
      </div>
    </header>
  );
};

export default Header;
