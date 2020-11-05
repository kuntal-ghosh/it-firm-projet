import React from "react";
import "./LandingPage.scss";
import { Switch, Route, Link } from "react-router-dom";
import Services from "../../components/landing-page/services/Services";
import Works from "../../components/landing-page/works/works";
import Header from "../../components/landing-page/header/Header";
import ClientFeedBack from "../../components/landing-page/client-feedback/ClientFeedBack";
import Footer from "../../components/landing-page/footer/Footer";
const LandingPage = () => {
  return (
    <div>
      <Header />
      <main>
        {/* section for services */}
        <section className="container-fluid card-description">
          <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
            Our Services
          </h2>
          <Services />
        </section>
        {/* section for work showup */}
        <section className="card-online-course">
          <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
            Our Works
          </h2>
          <Works />
        </section>

        {/* client feedback */}
        <section className="testimonial">
          <ClientFeedBack />
        </section>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default LandingPage;
