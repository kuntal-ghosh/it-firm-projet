import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <header class="background-color">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="/vmv">
              <img src="assets/ICON/Logo.png" alt="rgreg" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ml-auto margin-right">
                <a class="nav-item nav-link active m-auto mr-lg-3" href="#book">
                  Book <span class="sr-only">(current)</span>
                </a>
                <a class="nav-item nav-link m-auto mr-lg-3" href="#course">
                  Courses
                </a>
                <a class="nav-item nav-link m-auto mr-lg-3" href="#other">
                  Others
                </a>
                <a class="nav-item nav-link m-auto mr-lg-3" href="#blog">
                  Blog
                </a>
                <a class="primary-button sign-in-button m-auto mr-lg-3">
                  sign in
                </a>
              </div>
            </div>
          </nav>

          <div class="introduction ">
            <div class="row d-flex align-items-center">
              <div class="col-md-5 introduction-padding">
                <p style={{ color: "#FD511A" }}>Are you ready to Learn?</p>
                <h2>
                  Learn With fun <br />
                  on <span style={{ color: "#21B573" }}>any schedule</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Varius blandit facilisis quam netus.
                </p>
                <button class="primary-button">Get Started</button>
              </div>
              <div class="col-md-7">
                <img
                  src="assets/Photos/Illustration.png"
                  class="intro-img"
                  alt="efwe"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default LandingPage;
