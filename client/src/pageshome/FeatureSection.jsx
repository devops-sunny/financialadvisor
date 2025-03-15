/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import IMG1 from "../assets/img/icon/light.svg"
import IMG2 from "../assets/img/icon/hand.svg"
import IMG3 from "../assets/img/icon/note.svg"



const features = [
  {
    icon: IMG1,
    title: "Personalized Financial Planning Tools",
    description:
      "A financial advisor service should offer personalized financial planning tools that allow visitors.",
  },
  {
    icon: IMG2,
    title: "Robust Risk Management Strategies",
    description:
      "A financial advisor service should offer personalized financial planning tools that allow visitors.",
  },
  {
    icon: IMG3,
    title: "Transparent Fee Structure and Accountability",
    description:
      "A financial advisor service should offer personalized financial planning tools that allow visitors.",
  },
];

const FeatureSection = () => {
  return (
    <>
    <div class="ak-height-125 ak-height-lg-80"></div>

    <section className="container"> 
      <div className="feature-content">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <div className="feature-card">
              <img className="feature-icon" src={feature.icon} alt="Feature Icon" />
              <div className="feature-body">
                <h5 className="feature-title">{feature.title}</h5>
                <p className="feature-desp">{feature.description}</p>
                <Link to="#" className="more-btn">
                  <span>Learn More</span>
                  <span className="svg-icon">
                    <SvgIcon />
                  </span>
                </Link>
              </div>
            </div>
            {index < features.length - 1 && <div className="ak-feature-hr"></div>}
          </React.Fragment>
        ))}
      </div>
    </section>
    </>
  );
};

const SvgIcon = () => (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
      <path d="M1.7085 9.01147H16.2918H1.7085ZM16.2918 9.01147L9.29183 2.01147L16.2918 9.01147ZM16.2918 9.01147L9.29183 16.0115L16.2918 9.01147Z" fill="#030917" />
      <path d="M1.7085 9.01147H16.2918M16.2918 9.01147L9.29183 2.01147M16.2918 9.01147L9.29183 16.0115" stroke="#030917" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
      <path d="M1.7085 9.01147H16.2918H1.7085ZM16.2918 9.01147L9.29183 2.01147L16.2918 9.01147ZM16.2918 9.01147L9.29183 16.0115L16.2918 9.01147Z" fill="#030917" />
      <path d="M1.7085 9.01147H16.2918M16.2918 9.01147L9.29183 2.01147M16.2918 9.01147L9.29183 16.0115" stroke="#030917" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </>
);

export default FeatureSection;
