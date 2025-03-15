/* eslint-disable */

import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import BreadcrumbSection from './BreadcrumbSection'
import FeatureSection from '../FeatureSection'
import About from '../About'
import Skills from './Skills'
import Strategic from './Strategic'
import Team from '../Team'
import VideoSection from '../Video'
import FunFactCounter from '../FunFactCounter'
import Testmonial from './Testmonial'
import AboutContact from './AboutContact'

const AboutSection = () => {
  return (
    <>
        <Header />
        <BreadcrumbSection />
        <FeatureSection />
        <About />
        <Skills />
        <Strategic />
        <Team />
        <VideoSection />
        <FunFactCounter />
        {/* <Testmonial /> */}
        <AboutContact />
        <Footer />
    </>
  )
}

export default AboutSection
