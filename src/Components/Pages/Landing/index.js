import React from "react";
import {Box} from "grommet";
import NavHeader from "./NavHeader";
import Hero from "../../Commom/Hero";
import RegisterBeta from "../../Commom/RegisterBeta";
import Features from "../../Commom/Features";
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
      </Box>
      <Box>
        <Features/>
        <Talents/>
      </Box>
      <Section>
        <Footer/>
      </Section>
    </>
  );
}

export default Landing;
