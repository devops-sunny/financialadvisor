/* eslint-disable */

import React from 'react'
import IMG1 from "../../assets/img/testmonial/testimonial_1.png"
import IMG2  from "../../assets/img/testmonial/testimonial_2.png"
const Testmonial = () => {
  return (
    <>
    <div className="ak-height-125 ak-height-lg-80"></div>
    <section>
      <div className="container">
        <div className="testmonial-content ak-slider ak-slider-testmonial">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testmonial-slider">
                <div className="testmonial-img">
                  <img
                    src={IMG1}
                    data-swiper-parallax="200"
                    alt="..."
                  />
                </div>
                <div className="testmonial-info">
                  <div className="person-info">
                    <div>
                      <p className="name">Andrew Taylor</p>
                      <p className="form">From USA</p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="43"
                        height="38"
                        viewBox="0 0 43 38"
                        fill="none"
                      >
                        <path
                          d="M19.2291 14.229C19.2291 20.8709 17.6233 26.0703 14.4117 29.8272C11.2 33.5841 6.68822 36.0531 0.876244 37.2343V30.4171C5.28972 29.064 8.25971 26.6176 9.7862 23.078C10.6236 21.3935 10.9863 19.5127 10.8351 17.6376H0.548283L0.548283 0.39867L19.2291 0.39867V14.229ZM42.9883 14.229C42.9883 20.7836 41.4261 25.962 38.3018 29.7642C35.1775 33.5664 30.6221 36.0571 24.6354 37.2363V30.4191C29.0929 29.0193 32.0862 26.6159 33.6154 23.209C34.3942 21.4604 34.7318 19.5472 34.5983 17.6376L24.3075 17.6376V0.39867H42.9883L42.9883 14.229Z"
                          fill="#485B60"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ak-height-40 ak-height-lg-30"></div>
                  <h3 className="testmonial-title">
                    Thanks, we've gained clarity and confidence in our financial
                    future. Personalized approach and expert guidance have been
                    invaluable. Highly recommend!
                  </h3>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testmonial-slider">
                <div className="testmonial-img">
                  <img
                    src={IMG2}
                    data-swiper-parallax="200"
                    alt="..."
                  />
                </div>
                <div className="testmonial-info">
                  <div className="person-info">
                    <div>
                      <p className="name">Andrew Taylor</p>
                      <p className="form">From USA</p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="43"
                        height="38"
                        viewBox="0 0 43 38"
                        fill="none"
                      >
                        <path
                          d="M19.2291 14.229C19.2291 20.8709 17.6233 26.0703 14.4117 29.8272C11.2 33.5841 6.68822 36.0531 0.876244 37.2343V30.4171C5.28972 29.064 8.25971 26.6176 9.7862 23.078C10.6236 21.3935 10.9863 19.5127 10.8351 17.6376H0.548283L0.548283 0.39867L19.2291 0.39867V14.229ZM42.9883 14.229C42.9883 20.7836 41.4261 25.962 38.3018 29.7642C35.1775 33.5664 30.6221 36.0571 24.6354 37.2363V30.4191C29.0929 29.0193 32.0862 26.6159 33.6154 23.209C34.3942 21.4604 34.7318 19.5472 34.5983 17.6376L24.3075 17.6376V0.39867H42.9883L42.9883 14.229Z"
                          fill="#485B60"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ak-height-40 ak-height-lg-30"></div>
                  <h3 className="testmonial-title">
                    Expert guidance have been invaluable. Highly recommend!
                    Thanks, we've gained clarity and confidence in our financial
                    future. Personalized approach and
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="testmonial-controller">
            <div className="testmonial-swiper-controller">
              <button className="testmonial-next-btn slider-btn next">
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00928 0.73999L1.00928 8.73999L9.00928 16.74"
                    stroke="#030917"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button className="testmonial-prev-btn slider-btn prev">
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.00928 0.73999L9.00928 8.73999L1.00928 16.74"
                    stroke="#030917"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div>
              <p className="ak-black-color mb-0 ak-medium">350+ Over</p>
              <p className="ak-font-16 mb-0">User Feedback</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Testmonial
