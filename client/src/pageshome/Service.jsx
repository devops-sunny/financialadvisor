/* eslint-disable */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import IMG1 from "../assets/img/service/service_1.png"
import IMG2 from "../assets/img/service/service_2.png"
import IMG3 from "../assets/img/service/service_3.png"


import IMG4 from "../assets/img/clientLogo/log_1.png"
import IMG5 from "../assets/img/clientLogo/log_2.png"
import IMG6 from "../assets/img/clientLogo/log_3.png"
import IMG7 from "../assets/img/clientLogo/log_4.png"

const services = [
  {
    image: IMG1,
    title: "Financial Planning",
    description: "Customized financial plans tailored to your needs.",
  },
  {
    image:IMG2,
    title: "Investment Management",
    description: "Strategic investment plans for long-term growth.",
  },
  {
    image: IMG3,
    title: "Risk Management",
    description: "Identifying and mitigating financial risks effectively.",
  },
];

const clientLogos = [
  IMG4,IMG5,IMG6,IMG7
];

const ServicesSection = () => {
  return (
    <>
      <div class="ak-height-125 ak-height-lg-80"></div>

      <section>
        <div className="container">
          <div className="service-top">
            <div className="ak-section-heading ak-style-1 ak-w-50">
              <p className="ak-section-subtitle">Services</p>
              <h2 className="ak-section-title">
                Expert Financial Solutions Tailored to Your Needs
              </h2>
            </div>
            <div className="service-swiper-controller">
              <button className="service-next-btn slider-btn next">
                &#8592;
              </button>
              <button className="service-prev-btn slider-btn prev">
                &#8594;
              </button>
            </div>
          </div>
        </div>
        <div className="ak-height-60 ak-height-lg-50"></div>
        <div className="service-bg">
          <div className="ak-white-bg-service"></div>
          <div className="container">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: ".service-next-btn",
                prevEl: ".service-prev-btn",
              }}
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="service-card h-100">
                    <Link to="service-details.html" className="service-thumb">
                      <img src={service.image} alt="service" />
                      <div className="overlay-image">
                        <img src={service.image} alt="service" />
                      </div>
                    </Link>
                    <div className="service-info">
                      <Link to="service-details.html" className="service-title">
                        {service.title}
                      </Link>
                      <p className="service-desp">{service.description}</p>
                    </div>
                    <div className="service-footer">
                      <Link
                        to="service-details.html"
                        className="common-btn style-2 color-2"
                      >
                        <span>Read More</span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="ak-height-100 ak-height-lg-50"></div>
            <div className="ak-border-width"></div>
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              className="ak-slider-client-logo"
            >
              {clientLogos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <img src={logo} alt="client logo" />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="ak-border-width"></div>
            <div className="ak-height-50 ak-height-lg-50"></div>
          </div>
        </div>
      </section>
    </>
  );
};



export default ServicesSection;
