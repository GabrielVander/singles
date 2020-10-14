import {Col, Divider, message, Row} from "antd";
import GoogleButton from "../GoogleButton";
import FacebookButton from "../FacebookButton";
import TwitterButton from "../TwitterButton";
import React from "react";
import AuthMethod from "../../../Model/Authentication/AuthMethod";
import {Credentials, useFirebase} from "react-redux-firebase";
import {User, UserInfo} from "firebase";
import {HOME} from "../../../Routes/AppRoutes";
import {useDispatch} from "react-redux";
import {toggleLoading} from "../../../Redux/Actions/AppActions";
import {useHistory} from "react-router-dom";

interface OAuthProps {
    sectionTitle: string;
}

function OAuth(props: OAuthProps) {
    const firebase = useFirebase();
    const dispatch = useDispatch();
    const history = useHistory();

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
        dispatch(toggleLoading());

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
        dispatch(toggleLoading());
    }

    return <>
        <Divider plain>{props.sectionTitle}</Divider>
        <Row
            justify="space-around"
            align="middle"
            gutter={[16, 24]}
        >
            <Col xs={24} xl={8} className="oauth-button"
            >
                <GoogleButton onClick={signInWithGoogle}/>
            </Col>
            <Col xs={24} xl={8} className="oauth-button"
            >
                <FacebookButton onClick={signInWithFacebook}/>
            </Col>
            <Col xs={24} xl={8} className="oauth-button"
            >
                <TwitterButton onClick={signInWithTwitter}/>
            </Col>
        </Row>
    </>;
}

export default OAuth;
