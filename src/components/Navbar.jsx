import React, { useEffect, useRef, useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-scroll";
import Contact from "../components/Contact";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    console.log(window, "Window");
    if (window.scrollY >= 120) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <>
      <div className="main-container">
        <div
          className="navbar-container"
          style={{ backgroundColor: navbar ? "black" : "transparent" }}
        >
          <Link
            activeClass="active"
            smooth
            spy
            to="home"
            style={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            <h2 className="logo"> Gurjant's Portfolio</h2>
          </Link>
          <div className="links">
            <ul className="links-btn">
              <Link
                activeClass="active"
                smooth
                spy
                to="home"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li className="link">Home</li>
              </Link>

              <Link
                activeClass="active"
                smooth
                spy
                to="about"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li className="link">About</li>
              </Link>

              <Link
                activeClass="active"
                smooth
                spy
                to="projects"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li className="link">Projects</li>
              </Link>

              <Link
                activeClass="active"
                smooth
                spy
                to="contact"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li className="link">Contact us</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Navbar;
