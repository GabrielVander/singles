import React from 'react';
// import sections
import './assets/scss/style.scss';
import Hero from './components/sections/Hero';
import FeaturesTiles from './components/sections/FeaturesTiles';
import FeaturesSplit from './components/sections/FeaturesSplit';
import Testimonial from './components/sections/Testimonial';
import Cta from './components/sections/Cta';
import LayoutDefault from "./layouts/LayoutDefault";

const Home = () => {

  return (
    <LayoutDefault>
      <Hero className="illustration-section-01"/>
      <FeaturesTiles/>
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02"/>
      <Testimonial topDivider/>
      <Cta split/>
    </LayoutDefault>
  );
}

export default Home;
