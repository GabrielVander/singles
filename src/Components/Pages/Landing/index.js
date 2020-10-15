import React from "react";
import {Box} from "grommet";
import NavHeader from "./NavHeader";
import Hero from "./Hero";
import Sign from "./Sign";
import Features from "./features/Features";
import Talents from "./Talents";
import Section from "./Section";
import Footer from "./footer/Footer";

const Landing = () => {
  return (
    <>
      <NavHeader/>
      <Box align="center" pad="large">
        <Hero size="xlarge"/>
        <Sign/>
        <Features/>
      </Box>
      <Talents/>
      <Section>
        <Footer/>
      </Section>
    </>
  );
}

export default Landing;
