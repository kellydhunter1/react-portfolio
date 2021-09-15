import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-info">
        <div className="container">
    <ul className="col justify-content-between navbar-nav">
      <li className="nav-item">
          <a className="nav-link" href="#about">About Me</a>
      </li>
      <li className="nav-item">
          <a className="nav-link" href="#about">Portfolio</a>
      </li>
      <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
      </li>
      <li className="nav-item">
          <a className="nav-link" href="#resume">Resume</a>
      </li>
    </ul>
    </div>
    </nav>
  );
}

export default Nav;