import React from "react";
import {Box} from "grommet";
import NavHeader from "./NavHeader";
import Hero from "../../Commom/Hero";
import RegisterBeta from "../../Commom/RegisterBeta";
import Features from "../../Commom/Features";
import JoinUs from "../../Commom/JoinUs";

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
      </Box>
      <Box>
        <JoinUs/>
      </Box>
    </>
  );
}

export default Landing;
