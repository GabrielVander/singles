import React from "react";
// @ts-ignore
import Emoji, {EmojioneV4} from "react-emoji-render";
import styled from "styled-components";

const StyledEmoji = styled(Emoji)`
  span {
    margin: 0 !important;
  }
`;

export const getEmoji = (name: string, size?: number) => {
    return isAppleProduct() ? (
        <StyledEmoji text={name}/>
    ) : (
        <EmojioneV4 size={size || 128} text={name}/>
    );
};

export const isAppleProduct = () => {
    return navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i);
};
