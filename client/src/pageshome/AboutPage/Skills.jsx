/* eslint-disable */
import React from 'react'

import Img1  from "../../assets/img/clientLogo/log_1.png"
import Img2  from "../../assets/img/clientLogo/log_2.png"
import Img3  from "../../assets/img/clientLogo/log_3.png"
import Img4  from "../../assets/img/clientLogo/log_4.png"
import Img5  from "../../assets/img/clientLogo/log_1.png"
import Img6  from "../../assets/img/clientLogo/log_2.png"

const Skills = () => {
  return (
    <div className="service-bg">
    <div className="container">
      <div className="ak-height-100 ak-height-lg-50"></div>
      <div className="atd-skills">
        <div className="atd-skill">
          <div className="atd-circle color-2" data-percentage="85">
            <div className="atd-circle-mini">
              <div className="percentage"><span>85%</span></div>
            </div>
          </div>
          <div className="atd-skill-text">
            <h6 className="title ak-white-color">Assessment Process</h6>
            <p className="desp ak-darkwhite-color">
              Initialization, Data, Analysis & Real Goal Setting
            </p>
          </div>
        </div>
        <div className="atd-skill">
          <div className="atd-circle color-2" data-percentage="75">
            <div className="atd-circle-mini">
              <div className="percentage"><span>75%</span></div>
            </div>
          </div>
          <div className="atd-skill-text">
            <h6 className="title ak-white-color">Planning Process</h6>
            <p className="desp ak-darkwhite-color">
              Plan Development, Presentation & Implementation
            </p>
          </div>
        </div>
        <div className="atd-skill">
          <div className="atd-circle color-2" data-percentage="65">
            <div className="atd-circle-mini">
              <div className="percentage"><span>65%</span></div>
            </div>
          </div>
          <div className="atd-skill-text">
            <h6 className="title ak-white-color">Review Process</h6>
            <p className="desp ak-darkwhite-color">
              Regular Monitoring, Performance Evaluation & Plan Review.
            </p>
          </div>
        </div>
      </div>
      <div className="ak-height-100 ak-height-lg-50"></div>
      <div className="ak-border-width"></div>
      <div className="ak-slider ak-slider-client-logo">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={Img1} alt="..." />
          </div>
          <div className="swiper-slide">
            <img src={Img2} alt="..." />
          </div>
          <div className="swiper-slide">
            <img src={Img3} alt="..." />
          </div>
          <div className="swiper-slide">
            <img src={Img4} alt="..." />
          </div>
          <div className="swiper-slide">
            <img src={Img5} alt="..." />
          </div>
          <div className="swiper-slide">
            <img src={Img6} alt="..." />
          </div>
        </div>
      </div>
      <div className="ak-height-65 ak-height-lg-50"></div>
    </div>
  </div>
  )
}

export default Skills
