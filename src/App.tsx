import React from 'react';
import DefaultApp from "./Components/DefaultApp";
import {BrowserRouter, Switch} from 'react-router-dom';
import {HOME} from "./Routes/AppRoutes";
import RouteWrapper from "./Components/RouteWrapper";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/performance";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./Configurations/firebaseConfig";

firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.performance();
firebase.auth();
firebase.firestore();

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <RouteWrapper route={HOME}>
                        <DefaultApp/>
                    </RouteWrapper>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
