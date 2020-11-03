import React from "react";
import {Box, Button, FormField, Heading, Image, Main, Paragraph, TextInput} from "grommet";
import logo from "../../../Assets/logoWithText.svg";
import {Facebook, Google, Twitter} from "grommet-icons";
import {Link, useHistory} from "react-router-dom";
import {HOME, LOGIN} from "../../../Routes/AppRoutes";
import {Trans, useTranslation} from "react-i18next";
import {useAuth} from "reactfire";
import {toast} from "react-toastify";
import firebase from "firebase/app";
import LogRocket from "logrocket";
import * as Yup from 'yup';
import {Form, Formik} from "formik";

function Register() {
    const {t} = useTranslation(['register']);
    const auth = useAuth();
    const history = useHistory();

    const registerSchema = Yup.object({
        email: Yup
            .string()
            .email(t('register:invalidEmail'))
            .required(t('register:required')),
        password: Yup
            .string()
            .required(t('register:required'))
            .min(6, t('register:minPassword'))
            .max(15, t('register:maxPassword')),
        passwordConfirmation: Yup
            .string()
            .required(t('register:required'))
            .oneOf([Yup.ref('password')], t('register:passwordsMatch'))
    });

    function submit(values: any, {setSubmitting}: any) {
        const {email, password} = values;
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(credential => {
                LogRocket.identify(credential.user?.uid!, {
                    name: credential.user?.displayName || '',
                    email: credential.user?.email!,
                });
                toast.success(t('register:registeredSuccessfully', {name: credential.user?.displayName || credential.user?.email}));
                history.push(HOME.path);
            })
            .catch(reason => {
                toast.error(reason.message);
                setSubmitting(false);
            })
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
                toast.error(reason.message);
            });
    }

    return (
        <>
            <Main justify="center" align="center">
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
                    <Box width="medium">
                        <Heading textAlign="center">
                            {t('register:title')}
                        </Heading>
                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                                passwordConfirmation: ''
                            }}
                            onSubmit={submit}
                            validationSchema={registerSchema}>
                            {({
                                  errors,
                                  handleChange,
                                  handleBlur,
                                  handleSubmit
                              }) => (
                                <Form
                                    onSubmit={event => {
                                        event.preventDefault();
                                        handleSubmit();
                                    }}>
                                    <FormField
                                        error={errors.email}
                                        label={t('register:emailLabel')}>
                                        <TextInput
                                            placeholder={t('register:emailPlaceholder')}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name="email"/>
                                    </FormField>
                                    <FormField
                                        error={errors.password}
                                        label={t('register:passwordLabel')}>
                                        <TextInput
                                            type="password"
                                            placeholder={t('register:passwordPlaceholder')}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name="password"/>
                                    </FormField>
                                    <FormField
                                        error={errors.passwordConfirmation}
                                        label={t('register:passwordConfirmationLabel')}>
                                        <TextInput
                                            type="password"
                                            placeholder={t('register:passwordConfirmationPlaceholder')}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
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
                            )}
                        </Formik>
                    </Box>
                </Box>
            </Main>
        </>
    );
}

export default Register;
