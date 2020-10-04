import React from "react";
import Centered from "../../Styled/Centered";
import {Button, Checkbox, Form, Input, Layout} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import DynamicFont from "../../Styled/DynamicFont";
import logo from "./logo.svg";

function Login() {
    const loginWithEmailAndPassword = () => {
        console.log('Logging in with email anda password');
    }

    return (
        <Layout style={{height: "100%"}}>
            <Layout.Content>
                <DynamicFont>
                    <Centered>
                        <img src={logo} alt="logo"/>
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
                                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
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
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <a className="login-form-forgot" href="#/">
                                    Forgot password
                                </a>
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
                                Or <a href="#/">register now!</a>
                                </span>
                            </Centered>
                        </Form>
                    </Centered>
                </DynamicFont>
            </Layout.Content>
        </Layout>
    );
}

export default Login;
