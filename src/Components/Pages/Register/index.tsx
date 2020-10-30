import React, {useState} from "react";
import {Box, Button, Form, FormField, Heading, Image, Main, Paragraph, TextInput} from "grommet";
import logo from "../../../Assets/logoWithText.svg";
import {Facebook, Google, Twitter} from "grommet-icons";
import {Link, useHistory} from "react-router-dom";
import {HOME, LOGIN} from "../../../Routes/AppRoutes";
import {Trans, useTranslation} from "react-i18next";
import {useAuth} from "reactfire";
import {toast} from "react-toastify";
import Loader from "react-loader-spinner";
import firebase from "firebase/app";
import LogRocket from "logrocket";

interface FormErrors {
    email?: string;
    password?: string;
    passwordConfirmation?: string;
}

function Register() {
    const {t} = useTranslation(['register']);
    const auth = useAuth();
    const history = useHistory();

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>();
    const [registering, setRegistering] = useState<boolean>(false);
    const [errors, setErrors] = useState<FormErrors>();

    function validateFields(): boolean {
        let hasErrors = false

        if (!email) {
            setErrors(prevState => ({
                ...prevState,
                email: t('register:emailRequired')
            }));
            hasErrors = true;
        } else {
            setErrors(prevState => ({
                ...prevState,
                email: undefined,
            }));
        }

        if (!password) {
            setErrors(prevState => ({
                ...prevState,
                password: t('register:passwordRequired')
            }));
            hasErrors = true;
        } else {
            setErrors(prevState => ({
                ...prevState,
                password: undefined
            }));
        }

        if (!passwordConfirmation) {
            setErrors(prevState => ({
                ...prevState,
                passwordConfirmation: t('register:passwordConfirmationRequired')
            }));
            hasErrors = true;
        } else {
            setErrors(prevState => ({
                ...prevState,
                passwordConfirmation: undefined
            }));
        }

        if (password !== passwordConfirmation) {
            setErrors(prevState => ({
                ...prevState,
                password: t('register:passwordsDontMatch'),
                passwordConfirmation: t('register:passwordsDontMatch')
            }));
            hasErrors = true;
        } else {
            setErrors(prevState => ({
                ...prevState,
                password: undefined,
                passwordConfirmation: undefined
            }));
        }

        if (!hasErrors) setErrors(undefined);

        return !hasErrors;
    }

    function registerWithEmailAndPassword() {
        if (!validateFields()) return;
        setRegistering(true);
        auth
            .createUserWithEmailAndPassword(email!, password!)
            .then(credential => {
                LogRocket.identify(credential.user?.uid!, {
                    name: credential.user?.displayName || '',
                    email: credential.user?.email!,
                });
                toast.success(t('register:registeredSuccessfully', {name: credential.user?.displayName || credential.user?.email}));
                history.push(HOME.path);
            })
            .catch(reason => {
                setRegistering(false);
                toast.error(reason);
            });
    }

    function registerWithGoogle() {
        oAuthLogin(new firebase.auth.GoogleAuthProvider());
    }

    function registerWithFacebook() {
        oAuthLogin(new firebase.auth.FacebookAuthProvider());
    }

    function registerWithTwitter() {
        oAuthLogin(new firebase.auth.TwitterAuthProvider());
    }

    function oAuthLogin(provider: firebase.auth.AuthProvider) {
        setRegistering(true);
        auth.useDeviceLanguage();
        auth.signInWithPopup(provider)
            .then(credential => {
                LogRocket.identify(credential.user?.uid!, {
                    name: credential.user?.displayName || '',
                    email: credential.user?.email!,
                });
                toast.success(t('register:registeredSuccessfully', {name: credential.user?.displayName || credential.user?.email}));
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
                        pad="medium"
                        justify="between"
                        width="xlarge">
                        <Box
                            width="medium"
                            height="medium"
                        >
                            <Image
                                fit="contain"
                                src={logo}
                                a11yTitle={t('register:logoLabel')}/>
                        </Box>
                        <Box>
                            <Heading textAlign="center">
                                {t('register:title')}
                            </Heading>
                            <Form
                                errors={errors}
                                onReset={() => {
                                    setEmail(undefined);
                                    setPassword(undefined);
                                }}
                                onSubmit={registerWithEmailAndPassword}
                            >
                                <FormField
                                    name="email"
                                    // @ts-ignore
                                    htmlfor="email-input-id"
                                    label={t('register:emailLabel')}>
                                    <TextInput
                                        id="email-input-id"
                                        autoFocus={true}
                                        type="email"
                                        placeholder={t('register:emailPlaceholder')}
                                        onChange={event => {
                                            setEmail(event.target.value);
                                            validateFields();
                                        }}
                                        name="email"/>
                                </FormField>
                                <FormField
                                    name="password"
                                    value={password}
                                    // @ts-ignore
                                    htmlfor="password-input-id"
                                    label={t('register:passwordLabel')}>
                                    <TextInput
                                        id="password-input-id"
                                        type="password"
                                        autoFocus={true}
                                        placeholder={t('register:passwordPlaceholder')}
                                        onChange={event => {
                                            setPassword(event.target.value);
                                            validateFields();
                                        }}
                                        name="password"/>
                                </FormField>
                                <FormField
                                    name="passwordConfirmation"
                                    value={passwordConfirmation}
                                    // @ts-ignore
                                    htmlfor="passwordConfirmation-input-id"
                                    label={t('register:passwordConfirmationLabel')}>
                                    <TextInput
                                        id="passwordConfirmation-input-id"
                                        type="password"
                                        autoFocus={true}
                                        placeholder={t('register:passwordConfirmationPlaceholder')}
                                        onChange={event => {
                                            setPasswordConfirmation(event.target.value);
                                            validateFields();
                                        }}
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
                                        onClick={registerWithGoogle}
                                        icon={<Google color="plain"/>}/>
                                    <Button
                                        onClick={registerWithFacebook}
                                        icon={<Facebook color="plain"/>}/>
                                    <Button
                                        onClick={registerWithTwitter}
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
