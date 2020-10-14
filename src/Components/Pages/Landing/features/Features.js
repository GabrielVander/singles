import React from "react";
import {Box} from "grommet";
import Tile from "./Tile";
import {data} from "./data";
import FeatureEmoji from "../emojis/FeatureEmoji";
import {isAppleProduct} from "../emojis/utils";

const Features = ({...rest}) => (
  <Box
    direction="row-responsive"
    justify="center"
    align="center"
    {...rest}
    margin={{top: "xlarge"}}
  >
    <Tile direction="row" action="comment stream" summary={data[0]}>
      <FeatureEmoji name=":speech_balloon:"/>
    </Tile>
    <Tile direction="row" action="how to vote with emojis" summary={data[1]}>
      <FeatureEmoji flip name=":thumbsup:"/>
      <FeatureEmoji name=":thumbsdown:"/>
    </Tile>
    <Tile direction="row" action="the next form of celebrity" summary={data[2]}>
      {/* https://github.com/tommoor/react-emoji-render/pull/35 */}
      {isAppleProduct() ? (
        <span role="img" aria-label="money" style={{fontSize: "150px"}}>
          👨🏻‍🎤
        </span>
      ) : (
        <FeatureEmoji name=":dancer:"/>
      )}
    </Tile>
  </Box>
);

export default Features;
