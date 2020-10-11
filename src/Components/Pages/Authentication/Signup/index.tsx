import React from "react";
import {message} from "antd";
import './styles.css';
import {useFirebase} from "react-redux-firebase";
import {useHistory} from "react-router-dom";
import {HOME} from "../../../../Routes/AppRoutes";
import CenteredSpin from "../../../Others/CenteredSpin";
import {useTranslation} from "react-i18next";
import SignupForm from "./SignupForm";
import AuthLayout from "../../../Others/AuthLayout";
import {useDispatch, useSelector} from "react-redux";
import RootState from "../../../../Redux/States/RootState";
import {toggleLoading} from "../../../../Redux/Actions/AppActions";

function Signup() {
    const firebase = useFirebase();
    const history = useHistory();
    const loading = useSelector<RootState>((state) => state.app.loading)
    const dispatch = useDispatch();
    const {t} = useTranslation(['signup']);

    function signInWithEmailAndPassword(email: string, password: string) {
        dispatch(toggleLoading());

        firebase.createUser({
            email,
            password,
        })
            .then(result => {
                message.success(`Successfully logged in as ${result!.displayName || result!.email}`);
                history.push(HOME.path);
            })
            .catch(reason => {
                message.error(`${(reason.code)} - ${(reason.message)}`, 5);
                dispatch(toggleLoading());
            });
    }

    if (loading) {
        return <CenteredSpin tip={t('signup:signingIn')}/>
    }

    return (
        <AuthLayout>
            <SignupForm
                signInWithEmailAndPassword={signInWithEmailAndPassword}
            />
        </AuthLayout>
    );
}

export default Signup;
