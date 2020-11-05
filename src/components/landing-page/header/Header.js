import React from "react";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <header className="background-color">
      <div className="container">
        <div className="introduction ">
          <div className="row d-flex align-items-center">
            <div className="col-md-5 introduction-padding">
              <h2>
                One stop block <br />
                for <span style={{ color: "#21B573" }}>everything IT</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Varius blandit facilisis quam netus.
              </p>
              <button className="primary-button">Get Started</button>
            </div>
            <div className="col-md-7">
              <img
                src="/images/Illustration.png"
                className="intro-img"
                alt="efwe"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
