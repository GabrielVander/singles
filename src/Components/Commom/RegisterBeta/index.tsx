import React, {useState} from "react";
import {Box, Button, Text, TextInput} from "grommet";
import {useTranslation} from "react-i18next";

const RegisterBeta = () => {
    const {t} = useTranslation(['registerBeta'])

    const [email, setEmail] = useState<string>();
    const [hasFocus, setHasFocus] = useState<boolean>();

    // noinspection HtmlUnknownTarget
    return (
        <Box direction="row" width="large" justify="center">
            <Box
                direction="row"
                align="center"
                width="medium"
                border={{
                    side: "bottom",
                    color: hasFocus ? "focus" : "brand"
                }}
            >
                <TextInput
                    plain
                    placeholder={<Text size="small">{t('registerBeta:emailPlaceholder')}</Text>}
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    onFocus={() => setHasFocus(true)}
                    onBlur={() => setHasFocus(false)}
                />
            </Box>
            <Button onClick={() => {
            }}>
                <Box
                    round="xlarge"
                    background="accent-1"
                    pad={{
                        vertical: "small",
                        horizontal: "medium"
                    }}
                >
                    <Text size="small" color="brand" weight="bold" textAlign="center">
                        {t('registerBeta:applyButton')}
                    </Text>
                </Box>
            </Button>
        </Box>
    );
}

export default RegisterBeta;
