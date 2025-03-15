/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import Img1  from "../assets/img/bg/strategic-bg.png"
import Img2  from "../assets/img/icon/target.svg"
import Img3  from "../assets/img/icon/line-chart.svg"

import Img4  from "../assets/img/strategic/sticky-1.png"
import Img5  from "../assets/img/bg/strategic-bg.png"

import Img6  from "../assets/img/strategic/sticky-2.png"
import Img7  from "../assets/img/bg/strategic-bg.png"
import Img8  from "../assets/img/strategic/sticky-3.png"


const Strategic = () => {
  return (
   <>
    <div className="ak-height-125 ak-height-lg-80"></div>
    <section className="container-xxl" id="strategicCard">
      <div className="strategic-card-content">
        <div className="strategic" data-src={Img1}>
          <div className="strategic-info">
            <div className="ak-section-heading ak-style-1">
              <p className="ak-section-subtitle animation-title">Strategic</p>
              <h2 className="ak-section-title title-anim">
                Strategic Investment Plan Tailored to Your Goals
              </h2>
            </div>
            <div className="ak-height-50 ak-height-lg-30"></div>
            <div className="personalized-long-term">
              <div className="personalized">
                <img className="icon" src={Img2} alt="..." />
                <h5 className="title">Personalized Strategies</h5>
                <p className="desp">
                  Personalized financial plans tailored to individual or
                  business needs.
                </p>
              </div>
              <div className="personalized-divder"></div>
              <div className="long-term">
                <img
                  className="icon"
                  src={Img3}
                  alt="..."
                />
                <h5 className="title">Personalized Strategies</h5>
                <p className="desp">
                  Personalized financial plans tailored to individual or
                  business needs.
                </p>
              </div>
            </div>
            <div className="ak-height-50 ak-height-lg-30"></div>
            <Link to="contact.html" className="common-btn">
              <span> Get Started</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <g clip-path="url(#clip0_201_978321290)">
                    <path
                      d="M1.42236 6.99728H13.089M13.089 6.99728L7.48903 1.39728M13.089 6.99728L7.48903 12.5973"
                      stroke="#030917"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_201_978321290">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(0.00927734)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </Link>
          </div>
          <div className="strategic-img">
            <img src={Img4} alt="..." />
          </div>
        </div>
        <div
          className="strategic style-2 ak-secondary-bg"
          data-src={Img5}
        >
          <div className="strategic-info">
            <div className="ak-section-heading ak-style-1 color-2 animation-style4">
              <p className="ak-section-subtitle animation-title">
                Retirement Solutions
              </p>
              <h2 className="ak-section-title title-anim">
                Secure Future Tailored Retirement Solutions
              </h2>
              <p className="ak-section-desp">
                Experts help clients navigate retirement planning challenges
              </p>
            </div>
            <div className="ak-height-50 ak-height-lg-30"></div>
            <div className="atd-skills">
              <div className="atd-skill">
                <div className="atd-circle color-2" data-percentage="85">
                  <div className="atd-circle-mini">
                    <div className="percentage"><span>85%</span></div>
                  </div>
                </div>
                <div className="atd-skill-text">
                  <h6 className="title ak-white-color">Income</h6>
                  <p className="desp ak-white-color">Assessment</p>
                </div>
              </div>
              <div className="atd-skill">
                <div className="atd-circle color-2" data-percentage="65">
                  <div className="atd-circle-mini">
                    <div className="percentage"><span>65%</span></div>
                  </div>
                </div>
                <div className="atd-skill-text">
                  <h6 className="title ak-white-color">Tax Withdrawal</h6>
                  <p className="desp ak-white-color">Strategies</p>
                </div>
              </div>
            </div>
            <div className="ak-height-50 ak-height-lg-30"></div>
            <Link to="contact.html" className="common-btn">
              <span> Get Started</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <g clip-path="url(#clip0_201_97821)">
                    <path
                      d="M1.42236 6.99728H13.089M13.089 6.99728L7.48903 1.39728M13.089 6.99728L7.48903 12.5973"
                      stroke="#030917"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_201_97821">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(0.00927734)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </Link>
          </div>
          <div className="strategic-img">
            <img src={Img6} alt="..." />
          </div>
        </div>
        <div className="strategic" data-src={Img7}>
          <div className="strategic-info">
            <div className="ak-section-heading ak-style-1">
              <p className="ak-section-subtitle animation-title">Tax Planning</p>
              <h2 className="ak-section-title title-anim">
                Wealth Strategic Tax Planning Solutions
              </h2>
            </div>
            <div className="ak-height-50 ak-height-lg-30"></div>
            <div className="ak-skill-box">
              <div className="ak-skill-text">
                <p className="ak-skill-title">Strategic Tax Minimization</p>
                <p className="ak-skill-per">95%</p>
              </div>
              <div className="ak-skill-bar">
                <div className="ak-skill-fill" data-percentage="95"></div>
              </div>
            </div>
            <div className="ak-skill-box">
              <div className="ak-skill-text">
                <p className="ak-skill-title">Long-Term Tax Efficiency</p>
                <p className="ak-skill-per">80%</p>
              </div>
              <div className="ak-skill-bar">
                <div className="ak-skill-fill" data-percentage="80"></div>
              </div>
            </div>
            <div className="ak-skill-box">
              <div className="ak-skill-text">
                <p className="ak-skill-title">Asset Location Optimization</p>
                <p className="ak-skill-per">65%</p>
              </div>
              <div className="ak-skill-bar">
                <div className="ak-skill-fill" data-percentage="65"></div>
              </div>
            </div>

            <div className="ak-height-50 ak-height-lg-30"></div>
            <Link to="contact.html" className="common-btn">
              <span> Get Started</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <g clip-path="url(#clip0_201_97854456)">
                    <path
                      d="M1.42236 6.99728H13.089M13.089 6.99728L7.48903 1.39728M13.089 6.99728L7.48903 12.5973"
                      stroke="#030917"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_201_97854456">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(0.00927734)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </Link>
          </div>
          <div className="strategic-img">
            <img src={Img8} alt="..." />
          </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default Strategic
