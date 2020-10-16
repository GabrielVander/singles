import React, {Fragment} from "react";
import PropTypes from "prop-types";

import {Box, Heading, Paragraph} from "grommet";
import {Trans, useTranslation} from "react-i18next";

interface HeroProps {
    size: string
}

const Hero = ({size}: HeroProps) => {
    const {t} = useTranslation(['hero']);

    return (
        <Fragment>
            <Box direction="row">
                <Heading size={size}>{t('hero:heading')}</Heading>
            </Box>
            <Paragraph margin={{top: "none"}} textAlign="center" size="xxlarge">
                <Trans i18nKey={"hero:description"}>
                    Get beta access to one of the newest social media out there and connect with
                    your peers around the world with <b>Singles</b>
                </Trans>
            </Paragraph>
        </Fragment>
    );
};

Hero.propTypes = {
    size: PropTypes.string.isRequired
};

export default Hero;
