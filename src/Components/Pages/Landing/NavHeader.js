import React from "react";
import {Anchor, Box, ResponsiveContext, Text} from "grommet";
import SocialMedia from "./SocialMedia";
import Logo from "./Logo";

const NavHeader = () => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box
        direction="row"
        justify="between"
        alignSelf="center"
        gap="medium"
        pad={{top: "large", horizontal: "xlarge"}}
      >
        <Anchor
          href="/"
          icon={<Logo/>}
          color="black"
          label={
            size !== "xsmall" &&
            size !== "small" && <Text size="large">App Teaser</Text>
          }
        />
        <SocialMedia/>
      </Box>
    )}
  </ResponsiveContext.Consumer>
);

export default NavHeader;
