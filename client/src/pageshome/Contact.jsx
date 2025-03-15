/* eslint-disable */
import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="ak-height-125 ak-height-lg-80"></div>
    <div className="container-fluid px-md-0">
      <div className="contact-form-content">
        <div className="contact-form-img image-hov-one">
          <img src="assets/img/contact/contact-img.png" alt="..." />
        </div>
        <div className="contact-form">
          <div>
            <h5 className="contact-title">
              Ready to take control of your financial future? Our team of
              seasoned experts is here to guide you every step of the way. Fill
              out the form below to get in touch with us today!
            </h5>
            <div className="ak-height-40 ak-height-lg-30"></div>
          </div>
          <form>
            <div className="form-inputs">
              <div className="type_1">
                <label for="fullname" className="form-label">Your Name</label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="csame"
                  placeholder="Write your name here..."
                />
              </div>
            </div>
            <div className="form-inputs">
              <div className="type_1">
                <label for="YourPhone" className="form-label">Your Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="YourPhone"
                  className="csame"
                  placeholder="Write your phone number here..."
                />
              </div>
              <div className="type_1">
                <label for="emailInput" className="form-label">Your Email*</label>
                <input
                  type="email"
                  name="email"
                  id="emailInput"
                  className="csame"
                  placeholder="Write your email here..."
                  required
                />
              </div>
            </div>
            <div className="form-textarea">
              <div className="type_1">
                <label for="textareaInput" className="form-label"
                  >Description</label
                >
                <textarea
                  name="description"
                  rows="3"
                  id="textareaInput"
                  className="csame"
                  placeholder="Write description details..."
                ></textarea>
              </div>
            </div>
            <div className="ak-height-40 ak-height-lg-40"></div>
            <button type="submit" className="common-btn border-0">
              <span>Send Message</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <g clip-path="url(#clip0_201_978343789)">
                    <path
                      d="M1.42236 6.99728H13.089M13.089 6.99728L7.48903 1.39728M13.089 6.99728L7.48903 12.5973"
                      stroke="#030917"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_201_978343789">
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
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
