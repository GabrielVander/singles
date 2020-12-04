import React from 'react';

import {Box, Heading, Paragraph} from 'grommet';
import FeatureEmoji from '../FeatureEmoji';
import RegisterBeta from '../RegisterBeta';
import {useTranslation} from 'react-i18next';

const JoinUs = () => {
    const { t } = useTranslation(['joinUs']);

    return (
        <Box align="center" pad="large">
            <Heading size="large">{t('joinUs:title')}</Heading>
            <Paragraph size="xlarge" textAlign="center">
                {t('joinUs:primarySummary')}
            </Paragraph>
            <Paragraph size="large" textAlign="center">
                {t('joinUs:secondarySummary')}
            </Paragraph>
            <Box>
                <FeatureEmoji name=":winking_face:" />
            </Box>
            <RegisterBeta />
        </Box>
    );
};

export default JoinUs;
