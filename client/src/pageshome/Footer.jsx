/* eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'
import Img1 from  "../assets/img/bg/footer-bg.png"
import IMG2 from "../assets/img/white-logo.svg"

const Footer = () => {
  return (
   <>
    <footer className="ak-footer style-1 fixed-footer footer-bg">
      <div className="ak-height-125 ak-height-lg-50"></div>
      <div className="ak-footer-container">
        <img
          src={Img1}
          className="footer-bg-img"
          alt="...."
        />
        <div className="container">
          <div className="footer-content">
            <div className="company-info">
              <Link className="ak-site_branding logo" to="index.html">
                <img src={IMG2} alt="..." className="logo" />
              </Link>
              <p className="text">
                We are a team of dedicated financial experts committed to
                guiding you towards financial growth and success.
              </p>

              <div className="social-icon">
                <Link to="#" className="icon">
                  <svg
                    width="9"
                    height="15"
                    viewBox="0 0 9 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.60386 14.7891L5.60386 8.40347H7.74638L8.06782 5.91416H5.60386V4.32509C5.60386 3.6046 5.80312 3.1136 6.83746 3.1136L8.15454 3.11306V0.886523C7.92677 0.856924 7.14492 0.789063 6.23492 0.789063C4.3347 0.789063 3.03378 1.94894 3.03378 4.07855L3.03378 5.91416H0.884766L0.884766 8.40347H3.03378L3.03378 14.7891H5.60386Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link to="#" className="icon">
                  <svg
                    height="15"
                    viewBox="0 0 128 128"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                  >
                    <g>
                      <path d="m16.452 47.708h20.914v62.915h-20.914z" />
                      <path
                        d="m27.048 17.377c-7.155 0-11.838 4.695-11.838 10.868 0 6.041 4.545 10.877 11.562 10.877h.141c7.293 0 11.832-4.836 11.832-10.877-.138-6.173-4.539-10.868-11.697-10.868z"
                      />
                      <path
                        d="m88.706 46.229c-11.11 0-16.075 6.116-18.853 10.396v.204h-.135c.039-.064.096-.138.135-.204v-8.917h-20.916c.279 5.904 0 62.915 0 62.915h20.917v-35.137c0-1.884.141-3.754.693-5.1 1.515-3.761 4.954-7.65 10.734-7.65 7.569 0 10.597 5.772 10.597 14.227v33.661h20.914v-36.079c-.001-19.325-10.319-28.316-24.086-28.316z"
                      />
                    </g>
                  </svg>
                </Link>
                <Link to="#" className="icon">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_77_259)">
                      <path
                        d="M10.7298 0.789062H4.3092C2.21954 0.789062 0.519531 2.48907 0.519531 4.57873V10.9995C0.519531 13.089 2.21954 14.789 4.3092 14.789H10.7299C12.8195 14.789 14.5195 13.089 14.5195 10.9995V4.57873C14.5195 2.48907 12.8195 0.789062 10.7298 0.789062ZM13.6988 10.9995C13.6988 12.6365 12.3669 13.9683 10.7298 13.9683H4.3092C2.6721 13.9683 1.34027 12.6365 1.34027 10.9995V4.57873C1.34027 2.94163 2.6721 1.6098 4.3092 1.6098H10.7299C12.3669 1.6098 13.6988 2.94163 13.6988 4.57873V10.9995Z"
                        fill="white"
                      />
                      <path
                        d="M7.51942 3.96094C5.40861 3.96094 3.69141 5.67814 3.69141 7.78895C3.69141 9.89975 5.40861 11.617 7.51942 11.617C9.63022 11.617 11.3474 9.89975 11.3474 7.78895C11.3474 5.67814 9.63022 3.96094 7.51942 3.96094ZM7.51942 10.7962C5.86128 10.7962 4.51214 9.44719 4.51214 7.78895C4.51214 6.13081 5.86128 4.78168 7.51942 4.78168C9.17766 4.78168 10.5267 6.13081 10.5267 7.78895C10.5267 9.44719 9.17766 10.7962 7.51942 10.7962Z"
                        fill="white"
                      />
                      <path
                        d="M11.4392 2.60156C10.8155 2.60156 10.3081 3.10902 10.3081 3.73269C10.3081 4.35647 10.8155 4.86393 11.4392 4.86393C12.063 4.86393 12.5705 4.35647 12.5705 3.73269C12.5705 3.10892 12.063 2.60156 11.4392 2.60156ZM11.4392 4.04309C11.2681 4.04309 11.1288 3.90381 11.1288 3.73269C11.1288 3.56148 11.2681 3.4223 11.4392 3.4223C11.6105 3.4223 11.7497 3.56148 11.7497 3.73269C11.7497 3.90381 11.6105 4.04309 11.4392 4.04309Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_77_259">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="translate(0.519531 0.789062)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link to="#" className="icon">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="path-1-inside-1_77_256" fill="white">
                      <path
                        d="M8.82267 6.71711L13.9224 0.789062H12.7139L8.28583 5.9363L4.74911 0.789062H0.669922L6.01813 8.5726L0.669922 14.7891H1.87847L6.55467 9.3534L10.2897 14.7891H14.3689L8.82237 6.71711H8.82267ZM7.1674 8.64117L6.62551 7.86611L2.31392 1.69883H4.17018L7.64968 6.67602L8.19157 7.45109L12.7145 13.9207H10.8583L7.1674 8.64147V8.64117Z"
                      />
                    </mask>
                    <path
                      d="M8.82267 6.71711L13.9224 0.789062H12.7139L8.28583 5.9363L4.74911 0.789062H0.669922L6.01813 8.5726L0.669922 14.7891H1.87847L6.55467 9.3534L10.2897 14.7891H14.3689L8.82237 6.71711H8.82267ZM7.1674 8.64117L6.62551 7.86611L2.31392 1.69883H4.17018L7.64968 6.67602L8.19157 7.45109L12.7145 13.9207H10.8583L7.1674 8.64147V8.64117Z"
                      fill="white"
                    />
                    <path
                      d="M8.82267 6.71711V7.71711H9.28151L9.58075 7.36927L8.82267 6.71711ZM13.9224 0.789062L14.6805 1.44122L16.1018 -0.210938H13.9224V0.789062ZM12.7139 0.789062V-0.210938H12.2551L11.9559 0.136898L12.7139 0.789062ZM8.28583 5.9363L7.46164 6.50261L8.19703 7.57288L9.0439 6.58847L8.28583 5.9363ZM4.74911 0.789062L5.5733 0.222752L5.27531 -0.210938H4.74911V0.789062ZM0.669922 0.789062V-0.210938H-1.23051L-0.154267 1.35538L0.669922 0.789062ZM6.01813 8.5726L6.7762 9.22478L7.27845 8.64099L6.84232 8.00628L6.01813 8.5726ZM0.669922 14.7891L-0.0881395 14.1369L-1.50956 15.7891H0.669922V14.7891ZM1.87847 14.7891V15.7891H2.33731L2.63655 15.4412L1.87847 14.7891ZM6.55467 9.3534L7.37885 8.78708L6.64345 7.71684L5.79659 8.70124L6.55467 9.3534ZM10.2897 14.7891L9.46552 15.3554L9.76351 15.7891H10.2897V14.7891ZM14.3689 14.7891V15.7891H16.2693L15.1931 14.2227L14.3689 14.7891ZM8.82237 6.71711V5.71711H6.92191L7.99819 7.28343L8.82237 6.71711ZM7.1674 8.64117H8.1674V8.32626L7.98696 8.06818L7.1674 8.64117ZM6.62551 7.86611L5.80594 8.43908L5.80595 8.4391L6.62551 7.86611ZM2.31392 1.69883V0.698834H0.394671L1.49435 2.27181L2.31392 1.69883ZM4.17018 1.69883L4.98976 1.12587L4.69122 0.698834H4.17018V1.69883ZM7.64968 6.67602L6.8301 7.24898L6.83012 7.24902L7.64968 6.67602ZM8.19157 7.45109L9.01114 6.87811L9.01113 6.87809L8.19157 7.45109ZM12.7145 13.9207V14.9207H14.6338L13.5341 13.3477L12.7145 13.9207ZM10.8583 13.9207L10.0387 14.4936L10.3372 14.9207H10.8583V13.9207ZM7.1674 8.64147H6.1674V8.95637L6.34783 9.21445L7.1674 8.64147ZM9.58075 7.36927L14.6805 1.44122L13.1643 0.136904L8.06458 6.06495L9.58075 7.36927ZM13.9224 -0.210938H12.7139V1.78906H13.9224V-0.210938ZM11.9559 0.136898L7.52775 5.28414L9.0439 6.58847L13.472 1.44123L11.9559 0.136898ZM9.11002 5.36999L5.5733 0.222752L3.92492 1.35537L7.46164 6.50261L9.11002 5.36999ZM4.74911 -0.210938H0.669922V1.78906H4.74911V-0.210938ZM-0.154267 1.35538L5.19395 9.13891L6.84232 8.00628L1.49411 0.222747L-0.154267 1.35538ZM5.26007 7.92041L-0.0881395 14.1369L1.42798 15.4412L6.7762 9.22478L5.26007 7.92041ZM0.669922 15.7891H1.87847V13.7891H0.669922V15.7891ZM2.63655 15.4412L7.31275 10.0056L5.79659 8.70124L1.12039 14.1369L2.63655 15.4412ZM5.73048 9.91973L9.46552 15.3554L11.1139 14.2227L7.37885 8.78708L5.73048 9.91973ZM10.2897 15.7891H14.3689V13.7891H10.2897V15.7891ZM15.1931 14.2227L9.64655 6.15078L7.99819 7.28343L13.5447 15.3554L15.1931 14.2227ZM8.82237 7.71711H8.82267V5.71711H8.82237V7.71711ZM7.98696 8.06818L7.44507 7.29311L5.80595 8.4391L6.34784 9.21417L7.98696 8.06818ZM7.44509 7.29314L3.1335 1.12586L1.49435 2.27181L5.80594 8.43908L7.44509 7.29314ZM2.31392 2.69883H4.17018V0.698834H2.31392V2.69883ZM3.3506 2.2718L6.8301 7.24898L8.46926 6.10306L4.98976 1.12587L3.3506 2.2718ZM6.83012 7.24902L7.37201 8.02408L9.01113 6.87809L8.46924 6.10303L6.83012 7.24902ZM7.37199 8.02406L11.8949 14.4936L13.5341 13.3477L9.01114 6.87811L7.37199 8.02406ZM12.7145 12.9207H10.8583V14.9207H12.7145V12.9207ZM11.6778 13.3477L7.98696 8.06848L6.34783 9.21445L10.0387 14.4936L11.6778 13.3477ZM8.1674 8.64147V8.64117H6.1674V8.64147H8.1674Z"
                      fill="white"
                      mask="url(#path-1-inside-1_77_256)"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="footer-nav">
              <div className="new-letter-email">
                <div className="new-letter">
                  <h5 className="title">Newsletter Signup</h5>
                  <p className="desp">
                    As we enter the second quarter of the year, global markets
                    continue to show resilience.
                  </p>
                </div>
                <form className="email-content">
                  <div className="email-input-btn">
                    <input
                      className="email"
                      type="text"
                      name="fristname"
                      placeholder="Enter Your Email Address..."
                    />
                    <button type="submit" className="common-btn style-2 type-2">
                      <span className="arrow-cricle">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_201_9785345)">
                            <path
                              d="M1.42236 6.99728H13.089M13.089 6.99728L7.48903 1.39728M13.089 6.99728L7.48903 12.5973"
                              stroke="#030917"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_201_9785345">
                              <rect
                                width="14"
                                height="14"
                                fill="white"
                                transform="translate(0.00927734)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_201_97834)">
                            <path
                              d="M1.42236 6.99728H13.089M13.089 6.99728L7.48903 1.39728M13.089 6.99728L7.48903 12.5973"
                              stroke="#030917"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_201_97834">
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
                    </button>
                  </div>
                  <p className="text">Stay updated with our advisory</p>
                </form>
              </div>
              <div className="footer-link">
                <div className="link-content">
                  <h5 className="short-title">About Us</h5>
                  <ul className="linek-all">
                    <li><Link to="about.html">About</Link></li>
                    <li><Link to="contact.html">Contact Us</Link></li>
                    <li><Link to="team.html">Our Advisor</Link></li>
                    <li><Link to="pricing.html">Pricing</Link></li>
                    <li><Link to="blog.html">Blog</Link></li>
                  </ul>
                </div>
                <div className="link-content">
                  <h5 className="short-title">Services</h5>
                  <ul className="linek-all">
                    <li>
                      <Link to="service-details.html">Financial Planning</Link>
                    </li>
                    <li>
                      <Link to="service-details.html">Medical Specialist</Link>
                    </li>
                    <li>
                      <Link to="service-details.html">Retirement Planning</Link>
                    </li>
                    <li><Link to="service-details.html">Risk Management</Link></li>
                    <li><Link to="service-details.html">Tax Planning</Link></li>
                  </ul>
                </div>
                <div className="link-content">
                  <h5 className="short-title">Get In Touch</h5>
                  <ul className="linek-all">
                    <li>
                      <Link to="https://www.google.com/maps" className="mb-3"
                        >901 N Pitt Str., Suite 17
                        <br />
                        Alexandria, NY, United States</Link
                      >
                    </li>
                    <li>
                      <Link to="tel:(406)555-0120" className="mb-3"
                        ><span className="ak-font-20">Phone: </span><br />
                        (406) 555-0120</Link
                      >
                    </li>
                    <li>
                      <Link to="mailto:info@domainame.com"
                        ><span className="ak-font-20">Email: </span>
                        <br />
                        info@domainame.com</Link
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ak-height-100 ak-height-lg-50"></div>
      </div>
      <div className="copy-right">
        <p className="copyright-text">
          Copyright 2024, All Rights Reserved. Made by Thememarch
        </p>
      </div>
    </footer>
   </>
  )
}

export default Footer
