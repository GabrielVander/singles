import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase/app";
import FirebaseConfig from "./Configurations/FirebaseConfig";
import ReactReduxFirebaseConfig from "./Configurations/ReactReduxFirebaseConfig";
import Store from "./Redux/Store";
import {createFirestoreInstance} from "redux-firestore";
import {Provider} from "react-redux";
import {ReactReduxFirebaseProvider} from "react-redux-firebase";

FirebaseConfig.initialize();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={Store.store}>
            <ReactReduxFirebaseProvider
                firebase={firebase}
                config={ReactReduxFirebaseConfig.config}
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
