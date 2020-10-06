import React from "react";
import Centered from "../../Styled/Centered";
import {Button, Col, Divider, Form, Input, Layout, message, Row} from "antd";
import {FacebookFilled, GoogleCircleFilled, LockOutlined, TwitterCircleFilled, UserOutlined} from "@ant-design/icons";
import DynamicFont from "../../Styled/DynamicFont";
import logo from "./logo.svg";
import './styles.css';
import {useFirebase} from "react-redux-firebase";
import {useHistory} from "react-router-dom";
import {HOME} from "../../../Routes/AppRoutes";

function Login() {
    const firebase = useFirebase();
    const history = useHistory();

    function loginWithEmailAndPassword() {
        console.log('Logging in with email anda password');
    }

    function signInWithGoogle() {
        // @ts-ignore
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().useDeviceLanguage();
        firebase.auth().signInWithPopup(provider).then(result => {
            const user = result.user;
            message.success(`Successfully logged in as ${user!.displayName}`);
            history.push(HOME.path);
        }).catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;

            message.error(`${errorCode} - ${errorMessage}`);
        });
    }

    return (
        <Layout style={{height: "100%"}}>
            <Layout.Content>
                <DynamicFont>
                    <Centered>
                        <Row
                            className="main-row"
                            justify="space-around"
                            align="middle"
                        >
                            <Col
                                xs={16}
                                sm={16}
                                md={16}
                                lg={12}
                                xl={12}
                            >
                                <Centered>
                                    <img src={logo} alt="logo"/>
                                </Centered>
                            </Col>
                            <Col
                                xs={16}
                                sm={16}
                                md={16}
                                lg={12}
                                xl={12}
                            >
                                <Form
                                    name="normal_login"
                                    className="login-form"
                                    initialValues={{remember: true}}
                                    onFinish={loginWithEmailAndPassword}
                                >
                                    <Form.Item
                                        name="username"
                                        rules={[{required: true, message: 'Please input your Username!'}]}
                                    >
                                        <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                                               placeholder="Username"/>
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        rules={[{required: true, message: 'Please input your Password!'}]}
                                    >
                                        <Input
                                            prefix={<LockOutlined className="site-form-item-icon"/>}
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </Form.Item>
                                    <Centered>
                                        <Form.Item>
                                            <Button type="primary" htmlType="submit" className="login-form-button">
                                                Log in
                                            </Button>
                                        </Form.Item>
                                    </Centered>
                                    <Centered>
                                            <span>
                                                 Don't have an account? <a href="/register">Register now!</a>
                                            </span>
                                    </Centered>
                                    <Divider plain>Or login via</Divider>
                                    <Row justify="space-around" align="middle">
                                        <Col xs={24} xl={8}>
                                            <Centered>
                                                <Button
                                                    type="primary"
                                                    icon={<GoogleCircleFilled/>}
                                                    onClick={signInWithGoogle}
                                                >
                                                    Google
                                                </Button>
                                            </Centered>
                                        </Col>
                                        <Col xs={24} xl={8}>
                                            <Centered>
                                                <Button type="primary" icon={<FacebookFilled/>}>
                                                    Facebook
                                                </Button>
                                            </Centered>
                                        </Col>
                                        <Col xs={24} xl={8}>
                                            <Centered>
                                                <Button type="primary" icon={<TwitterCircleFilled/>}>
                                                    Twitter
                                                </Button>
                                            </Centered>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Centered>
                </DynamicFont>
            </Layout.Content>
        </Layout>
    );
}

export default Login;
