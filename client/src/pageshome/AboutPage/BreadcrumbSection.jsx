/* eslint-disable */
import React from "react";
import IMG2  from "../../assets/img/bg/about-bg.png"

const BreadcrumbSection = () => {
  return (
    <section className="ak-about-hero-1">
      <img
        src={IMG2}
        className="about-hero-bg ak-bg object-cover"
        alt="..."
        data-swiper-parallax="1152"
      />
      <div className="container">
        <div className="about-hero-content">
          <div className="ak-section-heading ak-style-1 animation-title-content animation-style3">
            <p className="ak-section-subtitle animation-title">About Us</p>
            <h2 className="ak-section-title animation-title">
              About Expert Finance Advisor Services
            </h2>
          </div>
          <a href="/home" className="back-btn">
            Home / About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbSection;
