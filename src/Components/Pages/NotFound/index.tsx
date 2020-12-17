import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { HOME } from '../../../Routes/AppRoutes';
import { Box, Button, Heading, Image, Main } from 'grommet';
import notFound from '../../../Assets/page-not-found.svg';
import AppFooter from '../../Commom/AppFooter';

function NotFound(): ReactElement {
    const { t } = useTranslation(['notFound']);

    return (
        <>
            <Main align="center" justify="center">
                <Box direction="column" gap="large" align="center" justify="around" pad="medium">
                    <Box
                        align="center"
                        animation="pulse"
                        justify="center"
                        width="medium"
                        height="medium"
                        style={{ fontSize: '10vw' }}
                    >
                        <Image
                            fit="contain"
                            style={{ width: '100%', height: '100%' }}
                            src={notFound}
                            a11yTitle={t('notFound:illustrationAccessibilityLabel')}
                        />
                    </Box>
                    <Box gap="small">
                        <Heading level="3">{t('notFound:description')}</Heading>
                        <Box align="center">
                            <Link to={HOME.path}>
                                <Button primary label={t('notFound:buttonLabel')} />
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Main>
            <AppFooter />
        </>
    );
}

export default NotFound;
