import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar" class="nav">
      <ul class="nav-list">
        <li>
          <a href="#welcome-section">About</a>
        </li>
        <li>
          <a href="#work-section">Work</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
