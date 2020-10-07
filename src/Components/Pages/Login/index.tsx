import React, {useState} from "react";
import Centered from "../../Styled/Centered";
import {Button, Col, Divider, Form, Input, Layout, message, Row} from "antd";
import {FacebookFilled, GoogleCircleFilled, LockOutlined, MailOutlined, TwitterCircleFilled} from "@ant-design/icons";
import DynamicFont from "../../Styled/DynamicFont";
import logo from "./logo.svg";
import './styles.css';
import {useFirebase} from "react-redux-firebase";
import {useHistory} from "react-router-dom";
import {HOME} from "../../../Routes/AppRoutes";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import firebase from "firebase";

function Login() {
    const firebase = useFirebase();
    const history = useHistory();

    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    function handleAuthSuccess(result: firebase.auth.UserCredential) {
        const user = result.user;
        message.success(`Successfully logged in as ${user!.displayName || user!.email}`);
        history.push(HOME.path);
    }

    function loginWithEmailAndPassword() {
        firebase.auth().signInWithEmailAndPassword(email!, password!)
            .then(result => handleAuthSuccess(result))
            .catch(error => handleAuthError(error));
    }

    function signInWithGoogle() {
        // @ts-ignore
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().useDeviceLanguage();
        firebase.auth().signInWithPopup(provider)
            .then(result => handleAuthSuccess(result))
            .catch(error => handleAuthError(error));
    }

    function handleAuthError(error: { code: number; message: string; }) {
        const errorCode = error.code;
        const errorMessage = error.message;

        message.error(`${errorCode} - ${errorMessage}`);
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
                                        name="email"
                                        rules={[{required: true, message: 'Please input your Email!'}]}
                                    >
                                        <Input
                                            prefix={<MailOutlined className="site-form-item-icon"/>}
                                            placeholder="Email"
                                            onChange={event => setEmail(event.target.value)}
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        rules={[{required: true, message: 'Please input your Password!'}]}
                                    >
                                        <Input
                                            prefix={<LockOutlined className="site-form-item-icon"/>}
                                            type="password"
                                            placeholder="Password"
                                            onChange={event => setPassword(event.target.value)}
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
