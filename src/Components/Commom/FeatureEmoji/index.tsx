import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {getEmoji} from './utils';

const StyledFlip = styled.span`
    -moz-transform: scale(-1, 1);
    -webkit-transform: scale(-1, 1);
    -o-transform: scale(-1, 1);
    -ms-transform: scale(-1, 1);
    transform: scale(-1, 1);
`;

interface FeatureEmojiProps {
    name: string;
    flip?: boolean;
}

const FeatureEmoji = ({ name, flip }: FeatureEmojiProps): ReactElement => {
    return flip ? (
        <StyledFlip style={{ fontSize: '128px' }}>{getEmoji(name)}</StyledFlip>
    ) : (
        <span style={{ fontSize: '128px' }}>{getEmoji(name)}</span>
    );
};

export default FeatureEmoji;
