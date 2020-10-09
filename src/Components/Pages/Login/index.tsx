import React, {useState} from "react";
import Centered from "../../Styled/Centered";
import {Button, Col, Divider, Form, Input, Layout, message, Row} from "antd";
import {FacebookFilled, GoogleCircleFilled, LockOutlined, MailOutlined, TwitterCircleFilled} from "@ant-design/icons";
import logo from "./logo.svg";
import './styles.css';
import {Credentials, useFirebase} from "react-redux-firebase";
import {useHistory} from "react-router-dom";
import {HOME} from "../../../Routes/AppRoutes";
import AuthMethod from "../../../Model/Authentication/AuthMethod";
import {User} from "firebase";
import CenteredSpin from "../../Others/CenteredSpin";
import {Trans, useTranslation} from "react-i18next";

function Login() {
    const firebase = useFirebase();
    const history = useHistory();
    const {t} = useTranslation(['login']);

    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    function signInWithEmailAndPassword() {
        signIn(() => AuthMethod.EMAIL_AND_PASSWORD(email!, password!));
    }

    function signInWithGoogle() {
        signIn(AuthMethod.GOOGLE)
    }

    function signInWithFacebook() {
        signIn(AuthMethod.FACEBOOK)
    }

    function signInWithTwitter() {
        signIn(AuthMethod.TWITTER)
    }

    function signIn(signInMethod: () => Credentials): void {
        setLoading(true);

        firebase.login(signInMethod())
            .then(result => handleAuthSuccess(result))
            .catch(reason => handleAuthError(reason));
    }

    function handleAuthSuccess(result: { user: User | null, displayName?: string }): void {
        const user = result.user;

        message.success(`Successfully logged in as ${user!.displayName || user!.email}`);
        history.push(HOME.path);
    }

    function handleAuthError(error: { code: string; message: string; }): void {
        message.error(`${(error.code)} - ${(error.message)}`, 5);
        setLoading(false);
    }

    if (loading) {
        return <CenteredSpin tip="Logging in..."/>
    }

    return (
        <Layout style={{height: "100%"}}>
            <Layout.Content>
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
                                <img src={logo} className="logo" alt="logo"/>
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
                                onFinish={signInWithEmailAndPassword}
                            >
                                <Row justify="space-around" align="middle">
                                    <Col>
                                        <h1 className="login-title">{t('login:loginTitle')}</h1>
                                    </Col>
                                </Row>
                                <Row justify="space-around" align="middle">
                                    <Col>
                                        <Form.Item
                                            name="email"
                                            rules={[{required: true, message: t("login:emailInputError")}]}
                                        >
                                            <Input
                                                prefix={<MailOutlined className="site-form-item-icon"/>}
                                                placeholder={t("login:emailInputPlaceholder")}
                                                onChange={event => setEmail(event.target.value)}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row justify="space-around" align="middle">
                                    <Col>
                                        <Form.Item
                                            name="password"
                                            rules={[{required: true, message: t("login:passwordInputError")}]}
                                        >
                                            <Input
                                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                                type="password"
                                                placeholder={t("login:passwordInputPlaceholder")}
                                                onChange={event => setPassword(event.target.value)}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row justify="space-around" align="middle">
                                    <Col>
                                        <Form.Item>
                                            <Button type="primary" htmlType="submit" className="login-form-button">
                                                {t("login:loginButton")}
                                            </Button>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row justify="space-around" align="middle" style={{textAlign: "center"}}>
                                    <Col>
                                        <span>
                                            <Trans i18nKey="login:noAccount">
                                             Don't have an account? <a href="/register">Register now!</a>
                                            </Trans>
                                        </span>
                                    </Col>
                                </Row>
                                <Divider plain>{t('login:oauthSubdivision')}</Divider>
                                <Row
                                    justify="space-around"
                                    align="middle"
                                    gutter={[16, 24]}
                                >
                                    <Col
                                        xs={24}
                                        xl={8}
                                        className="oauth-button"
                                    >
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
                                    <Col
                                        xs={24}
                                        xl={8}
                                        className="oauth-button"
                                    >
                                        <Centered>
                                            <Button
                                                type="primary"
                                                icon={<FacebookFilled/>}
                                                onClick={signInWithFacebook}
                                            >
                                                Facebook
                                            </Button>
                                        </Centered>
                                    </Col
                                    >
                                    <Col
                                        xs={24}
                                        xl={8}
                                        className="oauth-button"
                                    >
                                        <Centered>
                                            <Button
                                                type="primary"
                                                icon={<TwitterCircleFilled/>}
                                                onClick={signInWithTwitter}
                                            >
                                                Twitter
                                            </Button>
                                        </Centered>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Centered>
            </Layout.Content>
        </Layout>
    );
}

export default Login;
