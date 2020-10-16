import {Col, Layout, Row} from "antd";
import Centered from "../../Styled/Centered";
import logo from "./logo.svg";
import React from "react";

interface AuthLayoutProps {
    children?: React.ReactNode;
}

function AuthLayout(props: AuthLayoutProps) {
    return (
        <Layout style={{height: "100%"}}>
            <Layout.Content>
                <Centered>
                    <Row
                        className="main-row"
                        justify="space-around"
                        align="middle"
                    >
                        <Col xs={16} sm={16} md={16} lg={12} xl={12}
                        >
                            <Centered>
                                <img src={logo} className="logo" alt="logo"/>
                            </Centered>
                        </Col>
                        <Col xs={16} sm={16} md={16} lg={12} xl={12}
                        >
                            {props.children}
                        </Col>
                    </Row>
                </Centered>
            </Layout.Content>
        </Layout>
    );
}

export default AuthLayout;
