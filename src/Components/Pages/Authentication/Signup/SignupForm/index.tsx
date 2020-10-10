import {useTranslation} from "react-i18next";
import React from "react";
import {Button, Col, Divider, Form, Input, Row} from "antd";
import GoogleButton from "../../../../Others/GoogleButton";
import FacebookButton from "../../../../Others/FacebookButton";
import TwitterButton from "../../../../Others/TwitterButton";
import "./styles.css";

interface SignupFormProps {
    signInWithEmailAndPassword: (email: string, password: string) => void;
    signInWithGoogle: () => void;
    signInWithFacebook: () => void;
    signInWithTwitter: () => void;
}

function SignupForm(props: SignupFormProps) {
    const {t} = useTranslation(['loginForm']);
    const [form] = Form.useForm();

    return (
        <Form
            form={form}
            name="register"
            onFinish={(values) => props.signInWithEmailAndPassword(values.email!, values.password!)}
            scrollToFirstError
            labelAlign="left"
        >
            <Row justify="space-around" align="middle">
                <Col>
                    <h1 className="signup-title">Signup</h1>
                </Col>
            </Row>
            <Row align="middle">
                <Col flex="auto">
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                </Col>
            </Row>
            <Row align="middle">
                <Col flex="auto">
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password/>
                    </Form.Item>
                </Col>
            </Row>
            <Row align="middle">
                <Col flex="auto">
                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({getFieldValue}) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('The two passwords that you entered do not match!');
                                },
                            }),
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>
                </Col>
            </Row>
            <Row justify="space-around" align="middle">
                <Col>
                    <Form.Item /*{...tailFormItemLayout}*/>
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
            <Divider plain>{t('loginForm:oauthSubdivision')}</Divider>
            <Row
                justify="space-around"
                align="middle"
                gutter={[16, 24]}
            >
                <Col xs={24} xl={8} className="oauth-button"
                >
                    <GoogleButton onClick={props.signInWithGoogle}/>
                </Col>
                <Col xs={24} xl={8} className="oauth-button"
                >
                    <FacebookButton onClick={props.signInWithFacebook}/>
                </Col>
                <Col xs={24} xl={8} className="oauth-button"
                >
                    <TwitterButton onClick={props.signInWithTwitter}/>
                </Col>
            </Row>
        </Form>
    );
}

export default SignupForm;
