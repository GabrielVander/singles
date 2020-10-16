import React from "react";
import {Box} from "grommet";
import Tile from "./Tile";
import FeatureEmoji from "../FeatureEmoji";
import {useTranslation} from "react-i18next";

const Features = () => {
    const {t} = useTranslation(['features']);

    return (
        <Box
            direction="row-responsive"
            justify="center"
            align="center"
            margin={{top: "xlarge"}}
        >
            <Tile
                direction="row"
                action={t('features:chatAction')}
                summary={t('features:chatSummary')}>
                <FeatureEmoji name=":speech_balloon:"/>
            </Tile>
            <Tile
                direction="row"
                action={t('features:ratingAction')}
                summary={t('features:ratingSummary')}>
                <FeatureEmoji flip name=":thumbsup:"/>
                <FeatureEmoji name=":thumbsdown:"/>
            </Tile>
            <Tile
                direction="row"
                action={t('features:postAction')}
                summary={t('features:postSummary')}>
                <FeatureEmoji name=":family_woman_girl_boy:"/>
            </Tile>
        </Box>
    );
};

export default Features;
