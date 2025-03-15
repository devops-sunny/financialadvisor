/* eslint-disable */
import React from 'react'

const Hero = () => {
  return (
    <>
    <section className="common-page-hero">
      <img
        src="../assets/img/bg/common-bg.png"
        className="common-hero-bg ak-bg"
        alt="..."
      />
      <div className="common-hero-content">
        <div className="common-hero-info">
          <div
            className="ak-section-heading ak-style-1 animation-title-content animation-style3"
          >
            <p className="ak-section-subtitle animation-title">Service Details</p>
            <h2 className="ak-section-title animation-title">
              Investment Planning & Management
            </h2>
          </div>
          <p className="back-btn"><a href="/">Home</a> / Service Details</p>
        </div>
        <a href="" className="phone-number">(406) 555-0120</a>
      </div>
    </section>
    </>
  )
}

export default Hero
