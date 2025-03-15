/* eslint-disable */
import React from "react";

const MovingSection = () => {
  return (
    <>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="moving-section-wrap cs-bold">
        <div className="moving-section-in">
          {[...Array(3)].map((_, index) => (
            <div className="moving-section" key={index}>
              <h2>Empowering Your Financial Future Expert Guidance from Trusted Advisors</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovingSection;
