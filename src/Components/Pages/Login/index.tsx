import React, {useState} from "react";
import {Box, Button, Form, FormField, Main, Paragraph, TextInput} from "grommet";
import logo from "../../../Assets/logoWithText.svg";
import {Facebook, Google, Twitter} from "grommet-icons";
import {Link, useHistory} from "react-router-dom";
import {HOME, REGISTER} from "../../../Routes/AppRoutes";
import {Trans, useTranslation} from "react-i18next";
import {useAuth} from "reactfire";
import {toast} from "react-toastify";
import Loader from "react-loader-spinner";
import firebase from "firebase/app";

function Login() {
    const {t} = useTranslation(['login']);
    const auth = useAuth();
    const history = useHistory();

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [signingIn, setSigningIn] = useState<boolean>(false);

    function loginWithEmailAndPassword() {
        setSigningIn(true);
        auth
            .signInWithEmailAndPassword(email!, password!)
            .then(credential => {
                toast.success(t('login:successfullyLoggedIn', {name: credential.user?.displayName || credential.user?.email}));
                history.push(HOME.path);
            })
            .catch(reason => {
                setSigningIn(false);
                toast.error(reason);
            });
    }

    function loginWithGoogle() {
        oAuthLogin(new firebase.auth.GoogleAuthProvider());
    }

    function loginWithFacebook() {
        oAuthLogin(new firebase.auth.FacebookAuthProvider());
    }

    function loginWithTwitter() {
        oAuthLogin(new firebase.auth.TwitterAuthProvider());
    }

    function oAuthLogin(provider: firebase.auth.AuthProvider) {
        setSigningIn(true);
        auth.useDeviceLanguage();
        auth.signInWithPopup(provider)
            .then(credential => {
                toast.success(t('login:successfullyLoggedIn', {name: credential.user?.displayName || credential.user?.email}));
                history.push(HOME.path);
            })
            .catch(reason => {
                setSigningIn(false);
                toast.error(reason);
            });
    }

    return (
        <>
            <Main justify="center" align="center">
                {signingIn ? <Loader type="ThreeDots"/> :
                    <Box align="center" justify="around" pad="large">
                        <Box
                            justify="center"
                            align="center"
                            width="small"
                            height="small"
                        >
                            <img src={logo} alt={t('login:logoLabel')}/>
                        </Box>
                        <Box>
                            <Form
                                value={{
                                    email,
                                    password
                                }}
                                onReset={() => {
                                    setEmail(undefined);
                                    setPassword(undefined);
                                }}
                                onSubmit={loginWithEmailAndPassword}
                            >
                                <FormField
                                    name="email"
                                    // @ts-ignore
                                    htmlfor="email-input-id"
                                    required
                                    label={t('login:emailLabel')}>
                                    <TextInput
                                        id="email-input-id"
                                        autoFocus={true}
                                        type="email"
                                        placeholder={t('login:emailPlaceholder')}
                                        onChange={event => setEmail(event.target.value)}
                                        name="email"/>
                                </FormField>
                                <FormField
                                    name="password"
                                    value={password}
                                    required
                                    // @ts-ignore
                                    htmlfor="password-input-id"
                                    label={t('login:passwordLabel')}>
                                    <TextInput
                                        id="password-input-id"
                                        type="password"
                                        autoFocus={true}
                                        placeholder={t('login:passwordPlaceholder')}
                                        onChange={event => setPassword(event.target.value)}
                                        name="password"/>
                                </FormField>
                                <Box
                                    direction="row"
                                    gap="medium"
                                    justify="center"
                                    margin="medium"
                                >
                                    <Button type="submit" primary label={t('login:loginButtonLabel')}/>
                                </Box>
                                <Box
                                    direction="row"
                                    justify="center"
                                    align="center"
                                    margin="small"
                                >
                                    <Paragraph margin="none">
                                        {t('login:loginVia')}
                                    </Paragraph>
                                </Box>
                                <Box
                                    direction="row"
                                    justify="around"
                                >
                                    <Button
                                        onClick={loginWithGoogle}
                                        icon={<Google color="plain"/>}/>
                                    <Button
                                        onClick={loginWithFacebook}
                                        icon={<Facebook color="plain"/>}/>
                                    <Button
                                        onClick={loginWithTwitter}
                                        icon={<Twitter color="plain"/>}/>
                                </Box>
                                <Box
                                    direction="row"
                                    margin="small">
                                    <Paragraph margin="none">
                                        <Trans i18nKey="login:register">
                                            Don't have an account? <Link to={REGISTER.path}>Register now</Link>
                                        </Trans>
                                    </Paragraph>
                                </Box>
                            </Form>
                        </Box>
                    </Box>
                }
            </Main>
        </>
    );
}

export default Login;
