import React from "react";
import {Box} from "grommet";
import NavHeader from "./NavHeader";
import Hero from "../../Others/Hero";
import RegisterBeta from "../../Others/RegisterBeta";
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
        <RegisterBeta/>
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
