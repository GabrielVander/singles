import React from "react";
import {Box, Stack} from "grommet";
import logo from "../../../Assets/logo.svg";
import {useTranslation} from "react-i18next";

const Logo = () => {
    const {t} = useTranslation(["logo"])

    return (
        <Stack anchor="center">
            <Box
                width="xxsmall"
                height="xxsmall"
                round="small"
                align="center"
                justify="center"
                background={{
                    color: "accent-4"
                }}
            />
            <Box
                width={"32px"}
                height={"32px"}
                round="small"
                align="center"
                justify="center">
                <img src={logo} alt={t('logo:accessibilityLabel')}/>
            </Box>
        </Stack>
    );
};

export default Logo;
