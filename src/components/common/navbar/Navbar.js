import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";
import cx from "classname";
const Navbar = () => {
  const appRef = useRef(null);
  const [navBackGround, setNavBackGround] = useState("backgroundTransparent");
  appRef.current = navBackGround;

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setNavBackGround("backgroundColor");
      } else {
        setNavBackGround("backgroundTransparent");
      }
    }

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={cx(
          "navbar navbar-expand-lg navbar-light",
          style.nav,
          style[navBackGround]
        )}
      >
        <Link className="navbar-brand" to="/">
          {/* <img src="/images/Illustration.png" alt="rgreg" /> */}
          <h1 style={{ fontWeight: "900" }}>KrazyIT</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto margin-right">
            <Link
              className="nav-item nav-link active m-auto mr-lg-3"
              to="/customize-image"
            >
              CustomizedImage <span className="sr-only">(current)</span>
            </Link>
            <Link
              className="nav-item nav-link m-auto mr-lg-3"
              to="/multiple-image"
            >
              Image Upload
            </Link>
            <Link
              className="nav-item nav-link m-auto mr-lg-3"
              to="/customize-image"
            >
              Courses
            </Link>
            <Link
              className="nav-item nav-link m-auto mr-lg-3"
              to="/customize-image"
            >
              Others
            </Link>

            <Link
              className="primary-button  sign-in-button m-auto mr-lg-3"
              style={{ textDecoration: "none" }}
              to="/customize-image"
            >
              ORDER NOW
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
