import Centered from "../../Styled/Centered";
import {Button} from "antd";
import {TwitterCircleFilled} from "@ant-design/icons";
import React from "react";

function TwitterButton(props: { onClick: () => void }) {
    return <Centered>
        <Button
            type="primary"
            icon={<TwitterCircleFilled/>}
            onClick={props.onClick}
        >
            Twitter
        </Button>
    </Centered>;
}

export default TwitterButton;
