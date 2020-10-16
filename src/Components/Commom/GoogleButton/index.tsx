import Centered from "../../Styled/Centered";
import {Button} from "antd";
import {GoogleCircleFilled} from "@ant-design/icons";
import React from "react";

function GoogleButton(props: { onClick: () => void }) {
    return <Centered>
        <Button
            type="primary"
            icon={<GoogleCircleFilled/>}
            onClick={props.onClick}
        >
            Google
        </Button>
    </Centered>;
}

export default GoogleButton;
