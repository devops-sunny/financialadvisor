/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import Img3 from "../assets/img/bg/video-bg.png"
const VideoSection = () => {
  return (
    <div>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="video-home ak-video-section">
        <img src={Img3} className="parallax-bg" alt="Background" />
        <div className="container container-custom">
          <div className="video-info-content">
            <Link
              to="https://www.youtube.com/watch?v=VcaAVWtP48A"
              className="video-btn ak-video-block ak-style1 ak-video-open"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="cricle-btn"></div>
            </Link>
            <div className="video-title-content">
              <h2 className="video-title">
                Expert Financial Solutions Tailored to Your Needs
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;