import React from 'react';
import logo from './logo.svg';
import './DefaultApp.css';
import {Trans, useTranslation} from "react-i18next";
import DynamicFont from "../../Styled/DynamicFont";
import {isEmpty, isLoaded} from "react-redux-firebase";
import {useHistory} from 'react-router-dom';
import {LOGIN} from "../../../Routes/AppRoutes";
import {useSelector} from "react-redux";
import RootState from "../../../Redux/States/RootState";

function DefaultApp() {
    const auth = useSelector<RootState>(state => state.firebase.auth)
    const history = useHistory();
    const {t} = useTranslation(['defaultApp']);

    if (!isLoaded(auth) || isEmpty(auth)) {
        history.push(LOGIN.path);
    }

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
