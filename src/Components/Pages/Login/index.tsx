import React from "react";
import {Box, Button, FormField, Image, Main, Paragraph, TextInput} from "grommet";
import logo from "../../../Assets/logoWithText.svg";
import {Facebook, Google, Twitter} from "grommet-icons";
import {Link, useHistory} from "react-router-dom";
import {HOME, REGISTER} from "../../../Routes/AppRoutes";
import {Trans, useTranslation} from "react-i18next";
import {useAuth} from "reactfire";
import {toast} from "react-toastify";
import firebase from "firebase/app";
import LogRocket from "logrocket";
import {Form, Formik} from "formik";
import * as Yup from 'yup';

function Login() {
    const {t} = useTranslation(['login']);
    const auth = useAuth();
    const history = useHistory();

    const loginSchema = Yup.object().shape({
        email: Yup
            .string()
            .email('Invalid email')
            .required('Required'),
        password: Yup
            .string()
            .required('Required')
            .min(6, 'Passwords are at least 6 characters long')
            .max(15, 'Passwords are no longer than 15 characters')
    });

    function submit(values: any, {setSubmitting}: any) {
        const {email, password} = values;
        auth
            .signInWithEmailAndPassword(email, password)
            .then(credential => {
                LogRocket.identify(credential.user?.uid!, {
                    name: credential.user?.displayName || '',
                    email: credential.user?.email!,
                });
                toast.success(t('login:successfullyLoggedIn', {name: credential.user?.displayName || credential.user?.email}));
                history.push(HOME.path);
            })
            .catch(reason => {
                toast.error(reason.message);
            })
            .finally(() => setSubmitting(false));
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
        auth.useDeviceLanguage();
        auth.signInWithPopup(provider)
            .then(credential => {
                LogRocket.identify(credential.user?.uid!, {
                    name: credential.user?.displayName || '',
                    email: credential.user?.email!,
                });
                toast.success(t('login:successfullyLoggedIn', {name: credential.user?.displayName || credential.user?.email}));
                history.push(HOME.path);
            })
            .catch(reason => {
                toast.error(reason.message);
            });
    }

    return (
        <Main justify="center" align="center">
            <Box align="center" justify="around" pad="large">
                <Box
                    justify="center"
                    align="center"
                    width="small"
                    height="small"
                >
                    <Image fit="cover" src={logo} a11yTitle={t('login:logoLabel')}/>
                </Box>
                <Box>
                    <Formik
                        onSubmit={submit}
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        validationSchema={loginSchema}>
                        {({
                              errors,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isSubmitting
                          }) => (
                            <Form onSubmit={event => {
                                event.preventDefault();
                                handleSubmit();
                            }}>
                                <FormField
                                    error={errors.email}
                                    label={t('login:emailLabel')}>
                                    <TextInput
                                        id="email-input-id"
                                        placeholder={t('login:emailPlaceholder')}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="email"/>
                                </FormField>
                                <FormField
                                    error={errors.password}
                                    label={t('login:passwordLabel')}>
                                    <TextInput
                                        id="password-input-id"
                                        type="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder={t('login:passwordPlaceholder')}
                                        name="password"/>
                                </FormField>
                                <Box
                                    direction="row"
                                    gap="medium"
                                    justify="center"
                                    margin="medium"
                                >
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        primary
                                        label={t('login:loginButtonLabel')}/>
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
                        )}
                    </Formik>
                </Box>
            </Box>
        </Main>
    );
}

export default Login;
