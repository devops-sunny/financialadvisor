/* eslint-disable */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const DetailsContact = () => {
    const navigate = useNavigate();
  return (
    <>
     <div className="ak-height-125 ak-height-lg-80"></div>
    <section>
      <div className="cta-container">
        <div className="ak-height-125 ak-height-lg-80"></div>
        <img src="../assets/img/bg/cta-bg.png" className="footer-bg-img" alt="...." />
        <div className="container">
          <div className="cta-info">
            <h2 className="cta-title">
              Secure Your Financial Future Today
              <span className="cta-title ak-bold"
                >Schedule a Free Consultation!</span
              >
            </h2>
            <p className="cta-desp">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <Link to={navigate('/contact')} className="common-btn">
              <span> Contact Us</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <g clip-path="url(#clip0_201_97823245676)">
                    <path
                      d="M1.42236 6.99728H13.089M13.089 6.99728L7.48903 1.39728M13.089 6.99728L7.48903 12.5973"
                      stroke="#030917"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_201_97823245676">
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
        </div>
        <div className="ak-height-125 ak-height-lg-80"></div>
      </div>
    </section>
    </>
  )
}

export default DetailsContact
