import {Trans, useTranslation} from "react-i18next";
import React, {useState} from "react";
import {Button, Col, Form, Input, Row} from "antd";
import {LockOutlined, MailOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import "./styles.css";
import OAuth from "../../../../Commom/OAuth";

interface LoginFormProps {
    signInWithEmailAndPassword: (email: string, password: string) => void;
}

function LoginForm(props: LoginFormProps) {
    const {t} = useTranslation(['loginForm']);
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    return <Form
        name="normal_login"
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
                     Don't have an account? <Link to="/register">Register now!</Link>
                    </Trans>
                </span>
            </Col>
        </Row>
        <OAuth
            sectionTitle={t('loginForm:oauthSubdivision')}
        />
    </Form>;
}

export default LoginForm;
