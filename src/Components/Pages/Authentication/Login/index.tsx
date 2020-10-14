import React from "react";
import {message} from "antd";
import './styles.css';
import {useFirebase} from "react-redux-firebase";
import {useHistory} from "react-router-dom";
import {HOME} from "../../../../Routes/AppRoutes";
import CenteredSpin from "../../../Others/CenteredSpin";
import {useTranslation} from "react-i18next";
import LoginForm from "./LoginForm";
import AuthLayout from "../../../Others/AuthLayout";
import {useDispatch, useSelector} from "react-redux";
import RootState from "../../../../Redux/States/RootState";
import {toggleLoading} from "../../../../Redux/Actions/AppActions";

function Login() {
    const firebase = useFirebase();
    const history = useHistory();
    const dispatch = useDispatch();
    const loading = useSelector<RootState>(state => state.app.loading);
    const {t} = useTranslation(['login']);

    function signInWithEmailAndPassword(email: string, password: string) {
        dispatch(toggleLoading());

        firebase.login({
            email,
            password,
        })
            .then(result => {
                const user = result.user;

                message.success(`Successfully logged in as ${user!.displayName || user!.email}`);
                history.push(HOME.path);
            })
            .catch(reason => {
                message.error(`${(reason.code)} - ${(reason.message)}`, 5);
                dispatch(toggleLoading());
            });
    }

    if (loading) {
        return <CenteredSpin tip={t('login:loggingIn')}/>
    }

    return (
        <AuthLayout>
            <LoginForm
                signInWithEmailAndPassword={signInWithEmailAndPassword}/>
        </AuthLayout>
    );
}

export default Login;
