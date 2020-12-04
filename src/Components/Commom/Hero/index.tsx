import React, { Fragment, ReactElement } from 'react';

import { Box, Heading, Paragraph } from 'grommet';
import { Trans, useTranslation } from 'react-i18next';

interface HeroProps {
    size: string;
}

const Hero = ({ size }: HeroProps): ReactElement => {
    const { t } = useTranslation(['hero']);

    return (
        <Fragment>
            <Box direction="row">
                <Heading size={size}>{t('hero:heading')}</Heading>
            </Box>
            <Paragraph margin={{ top: 'none' }} textAlign="center" size="xxlarge">
                <Trans i18nKey={'hero:description'}>
                    Get beta access to one of the newest social media out there and connect with your peers around the
                    world with <b>Singles</b>
                </Trans>
            </Paragraph>
        </Fragment>
    );
};

export default Hero;
