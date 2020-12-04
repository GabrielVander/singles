import React from 'react';
import {Anchor, Box, ResponsiveContext, Text} from 'grommet';
import Logo from '../Logo';
import {useTranslation} from 'react-i18next';

const NavHeader = () => {
    const { t } = useTranslation(['navHeader']);

    return (
        <ResponsiveContext.Consumer>
            {(size) => (
                <Box
                    direction="row"
                    justify="between"
                    alignSelf="center"
                    gap="medium"
                    pad={{ top: 'large', horizontal: 'xlarge' }}
                >
                    <Anchor
                        href="/"
                        icon={<Logo />}
                        color="black"
                        label={
                            size !== 'xsmall' &&
                            size !== 'small' && <Text size="large">{t('navHeader:brandName')}</Text>
                        }
                    />
                </Box>
            )}
        </ResponsiveContext.Consumer>
    );
};

export default NavHeader;
