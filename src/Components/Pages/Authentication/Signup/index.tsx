import React, {useState} from "react";
import {message} from "antd";
import './styles.css';
import {Credentials, useFirebase} from "react-redux-firebase";
import {useHistory} from "react-router-dom";
import {HOME} from "../../../../Routes/AppRoutes";
import AuthMethod from "../../../../Model/Authentication/AuthMethod";
import {User, UserInfo} from "firebase";
import CenteredSpin from "../../../Others/CenteredSpin";
import {useTranslation} from "react-i18next";
import SignupForm from "./SignupForm";
import AuthLayout from "../../../Others/AuthLayout";

function Signup() {
    const firebase = useFirebase();
    const history = useHistory();
    const {t} = useTranslation(['login']);

    const [loading, setLoading] = useState<boolean>(false);

    function signInWithEmailAndPassword(email: string, password: string) {
        setLoading(true);

        firebase.createUser({
            email,
            password,
        })
            .then(result => {
                message.success(`Successfully logged in as ${result!.displayName || result!.email}`);
                history.push(HOME.path);
            })
            .catch(reason => handleAuthError(reason));
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

    function handleAuthSuccess(result: { user: User | UserInfo | null, displayName?: string }): void {
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
        <AuthLayout>
            <SignupForm
                signInWithEmailAndPassword={signInWithEmailAndPassword}
                signInWithGoogle={signInWithGoogle}
                signInWithFacebook={signInWithFacebook}
                signInWithTwitter={signInWithTwitter}/>
        </AuthLayout>
    );
}

export default Signup;
