import { Footer, Text } from 'grommet';
import packageJson from '../../../../package.json';
import React, { ReactElement } from 'react';

function AppFooter(): ReactElement {
    // noinspection HtmlUnknownTarget
    return (
        <Footer background="brand" pad="medium" justify="center">
            <Text>Singles - v{packageJson.version}</Text>
        </Footer>
    );
}

export default AppFooter;
