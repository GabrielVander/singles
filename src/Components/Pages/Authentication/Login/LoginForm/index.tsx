import {Trans, useTranslation} from "react-i18next";
import React, {useState} from "react";
import {Button, Col, Divider, Form, Input, Row} from "antd";
import {LockOutlined, MailOutlined} from "@ant-design/icons";
import GoogleButton from "../../../../Others/GoogleButton";
import FacebookButton from "../../../../Others/FacebookButton";
import TwitterButton from "../../../../Others/TwitterButton";

interface LoginFormProps {
    signInWithEmailAndPassword: (email: string, password: string) => void;
    signInWithGoogle: () => void;
    signInWithFacebook: () => void;
    signInWithTwitter: () => void;
}

function LoginForm(props: LoginFormProps) {
    const {t} = useTranslation(['loginForm']);
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    return <Form
        name="normal_login"
        className="login-form"
        initialValues={{remember: true}}
        onFinish={() => props.signInWithEmailAndPassword(email!, password!)}
    >
        <Row justify="space-around" align="middle">
            <Col>
                <h1 className="login-title">{t('loginForm:loginTitle')}</h1>
            </Col>
        </Row>
        <Row justify="space-around" align="middle">
            <Col>
                <Form.Item
                    name="email"
                    rules={[{required: true, message: t("loginForm:emailInputError")}]}
                >
                    <Input
                        prefix={<MailOutlined className="site-form-item-icon"/>}
                        placeholder={t("loginForm:emailInputPlaceholder")}
                        onChange={event => setEmail(event.target.value)}
                    />
                </Form.Item>
            </Col>
        </Row>
        <Row justify="space-around" align="middle">
            <Col>
                <Form.Item
                    name="password"
                    rules={[{required: true, message: t("loginForm:passwordInputError")}]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder={t("loginForm:passwordInputPlaceholder")}
                        onChange={event => setPassword(event.target.value)}
                    />
                </Form.Item>
            </Col>
        </Row>
        <Row justify="space-around" align="middle">
            <Col>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        {t("loginForm:loginButton")}
                    </Button>
                </Form.Item>
            </Col>
        </Row>
        <Row justify="space-around" align="middle" style={{textAlign: "center"}}>
            <Col>
                <span>
                    <Trans i18nKey="loginForm:noAccount">
                     Don't have an account? <a href="/register">Register now!</a>
                    </Trans>
                </span>
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
    </Form>;
}

export default LoginForm;
