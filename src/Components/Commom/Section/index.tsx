import React from 'react';
import {Box} from 'grommet';

interface SectionProps {
    children?: React.ReactNode;
    width?: string;
}

const Section = ({ children, width }: SectionProps) => (
    <Box align="center" pad="large">
        <Box width={width}>{children}</Box>
    </Box>
);

export default Section;
