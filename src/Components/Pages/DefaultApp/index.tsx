import React from 'react';
import logo from './logo.svg';
import './DefaultApp.css';
import {Trans, useTranslation} from 'react-i18next';
import DynamicFont from '../../Styled/DynamicFont';

function DefaultApp() {
    const { t } = useTranslation(['defaultApp']);

    return (
        <DynamicFont>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        <Trans i18nKey="defaultApp:editAndSave">
                            Edit <code>src/App.tsx</code> and save to reload.
                        </Trans>
                    </p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        {t('defaultApp:learnReact')}
                    </a>
                </header>
            </div>
        </DynamicFont>
    );
}

export default DefaultApp;
