import Centered from "../../Styled/Centered";
import {Button} from "antd";
import {FacebookFilled} from "@ant-design/icons";
import React from "react";

function FacebookButton(props: { onClick: () => void }) {
    return <Centered>
        <Button
            type="primary"
            icon={<FacebookFilled/>}
            onClick={props.onClick}
        >
            Facebook
        </Button>
    </Centered>;
}

export default FacebookButton;
