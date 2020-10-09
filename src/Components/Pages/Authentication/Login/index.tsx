import React, {useState} from "react";
import Centered from "../../../Styled/Centered";
import {Col, Layout, message, Row} from "antd";
import logo from "./logo.svg";
import './styles.css';
import {Credentials, useFirebase} from "react-redux-firebase";
import {useHistory} from "react-router-dom";
import {HOME} from "../../../../Routes/AppRoutes";
import AuthMethod from "../../../../Model/Authentication/AuthMethod";
import {User} from "firebase";
import CenteredSpin from "../../../Others/CenteredSpin";
import {useTranslation} from "react-i18next";
import LoginForm from "../../../Others/LoginForm";

function Login() {
    const firebase = useFirebase();
    const history = useHistory();
    const {t} = useTranslation(['login']);

    const [loading, setLoading] = useState<boolean>(false);

    function signInWithEmailAndPassword(email: string, password: string) {
        signIn(() => AuthMethod.EMAIL_AND_PASSWORD(email, password));
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
        return <CenteredSpin tip={t('login:loggingIn')}/>
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
                            <LoginForm
                                signInWithEmailAndPassword={signInWithEmailAndPassword}
                                signInWithGoogle={signInWithGoogle}
                                signInWithFacebook={signInWithFacebook}
                                signInWithTwitter={signInWithTwitter}/>
                        </Col>
                    </Row>
                </Centered>
            </Layout.Content>
        </Layout>
    );
}

export default Login;
