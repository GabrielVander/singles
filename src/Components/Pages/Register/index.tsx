import React, {useState} from "react";
import {Box, Button, Form, FormField, Heading, Main, Paragraph, TextInput} from "grommet";
import logo from "../../../Assets/logoWithText.svg";
import {Facebook, Google, Twitter} from "grommet-icons";
import {Link, useHistory} from "react-router-dom";
import {HOME, LOGIN} from "../../../Routes/AppRoutes";
import {Trans, useTranslation} from "react-i18next";
import {useAuth} from "reactfire";
import {toast} from "react-toastify";
import Loader from "react-loader-spinner";
import firebase from "firebase/app";

function Register() {
    const {t} = useTranslation(['register']);
    const auth = useAuth();
    const history = useHistory();

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>();
    const [registering, setRegistering] = useState<boolean>(false);

    function loginWithEmailAndPassword() {
        setRegistering(true);
        auth
            .signInWithEmailAndPassword(email!, password!)
            .then(credential => {
                toast.success(t('register:successfullyLoggedIn', {name: credential.user?.displayName || credential.user?.email}));
                history.push(HOME.path);
            })
            .catch(reason => {
                setRegistering(false);
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
        setRegistering(true);
        auth.useDeviceLanguage();
        auth.signInWithPopup(provider)
            .then(credential => {
                toast.success(t('register:successfullyLoggedIn', {name: credential.user?.displayName || credential.user?.email}));
                history.push(HOME.path);
            })
            .catch(reason => {
                setRegistering(false);
                toast.error(reason);
            });
    }

    return (
        <>
            <Main justify="center" align="center">
                {registering ? <Loader type="ThreeDots"/> :
                    <Box
                        direction="row-responsive"
                        align="center"
                        justify="between"
                        width="large">
                        <Box
                            justify="center"
                            align="center"
                        >
                            <img
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%"
                                }}
                                src={logo}
                                alt={t('register:logoLabel')}/>
                        </Box>
                        <Box>
                            <Heading textAlign="center">
                                {t('register:title')}
                            </Heading>
                            <Form
                                value={{
                                    email,
                                    password,
                                    passwordConfirmation
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
                                    label={t('register:emailLabel')}>
                                    <TextInput
                                        id="email-input-id"
                                        autoFocus={true}
                                        type="email"
                                        placeholder={t('register:emailPlaceholder')}
                                        onChange={event => setEmail(event.target.value)}
                                        name="email"/>
                                </FormField>
                                <FormField
                                    name="password"
                                    value={password}
                                    required
                                    // @ts-ignore
                                    htmlfor="password-input-id"
                                    label={t('register:passwordLabel')}>
                                    <TextInput
                                        id="password-input-id"
                                        type="password"
                                        autoFocus={true}
                                        placeholder={t('register:passwordPlaceholder')}
                                        onChange={event => setPassword(event.target.value)}
                                        name="password"/>
                                </FormField>
                                <FormField
                                    name="passwordConfirmation"
                                    value={passwordConfirmation}
                                    required
                                    // @ts-ignore
                                    htmlfor="passwordConfirmation-input-id"
                                    label={t('register:passwordConfirmationLabel')}>
                                    <TextInput
                                        id="passwordConfirmation-input-id"
                                        type="password"
                                        autoFocus={true}
                                        placeholder={t('register:passwordConfirmationPlaceholder')}
                                        onChange={event => setPasswordConfirmation(event.target.value)}
                                        name="passwordConfirmation"/>
                                </FormField>
                                <Box
                                    direction="row"
                                    gap="medium"
                                    justify="center"
                                    margin="medium"
                                >
                                    <Button type="submit" primary label={t('register:registerButtonLabel')}/>
                                </Box>
                                <Box
                                    direction="row"
                                    justify="center"
                                    align="center"
                                    margin="small"
                                >
                                    <Paragraph margin="none">
                                        {t('register:registerVia')}
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
                                <Box margin="small" align="center">
                                    <Paragraph margin="none" textAlign="center">
                                        <Trans i18nKey="register:register">
                                            Already have an account? <Link to={LOGIN.path}>Login</Link>
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

export default Register;
