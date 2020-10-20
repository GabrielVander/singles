import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import FirebaseConfig from "./Configurations/FirebaseConfig";
import Store from "./Redux/Store";
import {Provider} from "react-redux";
import "./Configurations/i18nConfig";
import {FirebaseAppProvider, SuspenseWithPerf} from "reactfire";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

FirebaseConfig.initialize();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={Store.store}>
            <FirebaseAppProvider
                firebaseConfig={FirebaseConfig.config}
            >
                <SuspenseWithPerf fallback={
                    <Loader
                        type="RevolvingDot"
                    />
                } traceId="load-app">
                    <App/>
                </SuspenseWithPerf>
            </FirebaseAppProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
