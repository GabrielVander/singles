import React from 'react';
import logo from './logo.svg';
import './DefaultApp.css';
import {Trans, useTranslation} from "react-i18next";
import DynamicFont from "../../Styled/DynamicFont";
import {useFirebase} from "react-redux-firebase";
import {useHistory} from 'react-router-dom';
import {LOGIN} from "../../../Routes/AppRoutes";

function DefaultApp() {
    const firebase = useFirebase();
    const history = useHistory();

    const userIsSignedIn = firebase.auth().currentUser;
    if (!userIsSignedIn) {
        history.push(LOGIN.path);
    }
    const {t} = useTranslation(['defaultApp']);

    return (
        <DynamicFont>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        <Trans i18nKey="defaultApp:editAndSave">
                            Edit <code>src/App.tsx</code> and save to reload.
                        </Trans>
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t('defaultApp:learnReact')}
                    </a>
                </header>
            </div>
        </DynamicFont>
    );
}

export default DefaultApp;
