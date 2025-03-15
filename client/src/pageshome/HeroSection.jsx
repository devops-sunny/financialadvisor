/* eslint-disable */
import React from "react";

import hero1 from '../assets/img/hero/hero_1.png';
import hero2 from '../assets/img/hero/hero_2.png';
import hero3 from '../assets/img/hero/hero_3.png';
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="ak-slider ak-slider-hero ak-slider-hero-1">
      <div className="swiper-wrapper">
        {[hero1, hero2, hero3].map((image, index) => (
          <div className="swiper-slide" key={index}>
            <div className="ak-hero ak-style1 slide-inner" data-swiper-parallax="100%">
              <div className="ak-hero-featured" data-src={image}>
                <img src={image} className="ak-hero-bg" alt="Hero Background" />
              </div>
              <div className="container-md">
                <div className="hero-slider-info">
                  <div className="slider-info">
                    <div className="hero-title">
                      <p className="mini-title">Welcome to Your Trusted Financial Partner!</p>
                      <h1 className="hero-main-title">
                        Expert Guidance from
                        <span className="hero-main-title-1 style-2"> Our Trusted Advisors</span>
                      </h1>
                      <p className="main-desp">
                        Empowering Your Financial Future. Expert Guidance from Trusted Advisors.
                      </p>
                    </div>
                    <div className="ak-height-50 ak-height-lg-40"></div>
                    <div>
                      <Link to={index === 1 ? "about.html" : "contact.html"} className="common-btn style-2">
                        <span>Free Consultation</span>
                        <span className="arrow-cricle">
                          {[...Array(2)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M0.828613 5H9.16195M9.16195 5L5.16195 1M9.16195 5L5.16195 9" stroke="#030917" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          ))}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="social-hero">
        <div className="content">
          <h6 className="email style-1">(406)5550120</h6>
          <div className="hr style-1"></div>
          <h6 className="email style-1">hello@we.com</h6>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
