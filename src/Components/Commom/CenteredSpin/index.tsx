import React from "react";
import Centered from "../../Styled/Centered";
import {Spin} from "antd";

interface CenteredSpinProps {
    tip?: string
}

function CenteredSpin({tip}: CenteredSpinProps) {
    return (
        <Centered>
            <Spin tip={tip}/>
        </Centered>
    );
}

export default CenteredSpin;
