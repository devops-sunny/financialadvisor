/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import Img1 from "../assets/img/about/about_1.png"
import Img2 from "../assets/img/about/about_2.png"


const About = () => {
  return (
    <>
     <div className="ak-height-125 ak-height-lg-80"></div>
      <section className="container">
        <div className="about-us-content">
          {/* Image Section */}
          {/* eslint-disable */}
          <div className="image-content">
            <img className="about-img-1" src={Img1} alt="About 1" />
            <img className="about-img-2" src={Img2} alt="About 2" />
          </div>

          {/* Info Section */}
          <div className="info-content">
            <div className="ak-section-heading ak-style-1 animation-title-content animation-style3">
              <p className="ak-section-subtitle animation-title">About Us</p>
              <h2 className="ak-section-title animation-title">
                Financial Potential with Comprehensive Planning
              </h2>
              <p className="ak-section-desp">
                Our finance advisor service offers personalized financial planning
                services tailored to your unique goals and circumstances.
              </p>
            </div>

            {/* Opening Hours */}
            <div className="day-time">
              <div className="ak-height-70 ak-height-lg-10"></div>
              <p className="text-uppercase ak-font-18 ak-black-color ak-medium mb-2">
                SATURDAY: 8 AM – 10 PM
              </p>
              <p className="text-uppercase ak-font-18 ak-black-color ak-medium">
                MON-FRI: 8 AM – 10 PM
              </p>
              <div className="ak-height-50 ak-height-lg-30"></div>

              {/* Get Started Button */}
              <Link to="about.html" className="common-btn">
                <span>Get Started</span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <g clipPath="url(#clip0_201_978353)">
                      <path
                        d="M1.42236 6.99728H13.089M13.089 6.99728L7.48903 1.39728M13.089 6.99728L7.48903 12.5973"
                        stroke="#030917"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_201_978353">
                        <rect width="14" height="14" fill="white" transform="translate(0.00927734)" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
