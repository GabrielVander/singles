import React from 'react';
// import sections
import './assets/scss/style.scss';
import Hero from './components/sections/Hero';
import LayoutDefault from "./layouts/LayoutDefault";

const Home = () => {

  return (
    <LayoutDefault>
      <Hero className="illustration-section-01"/>
    </LayoutDefault>
  );
}

export default Home;
