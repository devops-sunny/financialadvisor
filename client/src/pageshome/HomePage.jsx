/* eslint-disable */
import React from "react";
import Header from "./Header";
import PreLoading from "./PreLoading";
import HeroSection from "./HeroSection";
import MovingSection from "./MovingSection";
import About from "./About";
import FeatureSection from "./FeatureSection";
import ServicesSection from "./Service";
import TestimonialSection from "./Testimonial";
import FunFactCounter from "./FunFactCounter";
import VideoSection from "./Video";
import Team from "./Team";
import Strategic from "./Strategic";
import Blog from "./Blog";
import Footer from "./Footer";
import Contact from "./Contact";
import AboutContact from "./AboutPage/AboutContact";

const HomePage = () => {
  return (
    <div>
      {/* <PreLoading /> */}
      <Header />
      <HeroSection />
      <MovingSection />
      <About />
      <FeatureSection />
      <ServicesSection />
      <TestimonialSection />
      <FunFactCounter />
      <VideoSection />
      <Team />
      <Strategic />
      <Blog />
      <AboutContact />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
