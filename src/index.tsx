import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/performance";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./Configurations/firebaseConfig";
import rrfConfig from "./Configurations/rrfConfig";
import Store from "./Redux/Store";
import {createFirestoreInstance} from "redux-firestore";
import {Provider} from "react-redux";
import {ReactReduxFirebaseProvider} from "react-redux-firebase";

firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.performance();
firebase.auth();
firebase.firestore();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={Store.store}>
            <ReactReduxFirebaseProvider
                firebase={firebase}
                config={rrfConfig}
                dispatch={Store.store.dispatch}
                createFirestoreInstance={createFirestoreInstance}
            >
                <App/>
            </ReactReduxFirebaseProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
