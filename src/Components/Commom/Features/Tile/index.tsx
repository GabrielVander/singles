import React, {ReactElement} from 'react';
import {Anchor, Box, Paragraph} from 'grommet';

interface TileProps {
    children?: React.ReactNode;
    action?: string;
    summary?: string;
    direction?: 'row' | 'column' | 'row-responsive' | 'row-reverse' | 'column-reverse' | undefined;
}

const Tile = ({ children, action, summary, direction }: TileProps): ReactElement => (
    <Box basis="medium" align="center" margin="medium">
        <Box height="small" align="center" justify="center" direction={direction}>
            {children}
        </Box>
        <Paragraph size="large" textAlign="center">
            {summary}
        </Paragraph>
        <Box align="center">
            <Anchor href="/" alignSelf="center">
                {action}
            </Anchor>
        </Box>
    </Box>
);

export default Tile;
