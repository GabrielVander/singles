import React, {Suspense} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {HOME, LANDING, LOGIN, REGISTER} from "./Routes/AppRoutes";
import Signup from "./Components/Pages/Authentication/Signup";
import Landing from "./Components/Pages/Landing";
import {Grommet} from "grommet";
import {customTheme} from "./theme";
import Login from "./Components/Pages/Login";
import Loader from "react-loader-spinner";
import Centered from "./Components/Styled/Centered";
import DefaultApp from "./Components/Pages/DefaultApp";
import {AuthCheck} from "reactfire";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <>
            <Grommet theme={customTheme} full>
                <BrowserRouter>
                    <Switch>
                        <Route path={LOGIN.path} exact={LOGIN.exact}>
                            <Suspense fallback={
                                <Centered>
                                    <Loader type="Puff"/>
                                </Centered>
                            }>
                                <Login/>
                            </Suspense>
                        </Route>
                        <Route path={REGISTER.path} exact={REGISTER.exact}>
                            <Suspense fallback={
                                <Centered>
                                    <Loader type="Puff"/>
                                </Centered>
                            }>
                                <Signup/>
                            </Suspense>
                        </Route>
                        <Route path={LANDING.path} exact={LANDING.exact}>
                            <Suspense fallback={
                                <Centered>
                                    <Loader type="Puff"/>
                                </Centered>
                            }>
                                <Landing/>
                            </Suspense>
                        </Route>
                        <Route path={HOME.path} exact={HOME.exact}>
                            <Suspense fallback={
                                <Centered>
                                    <Loader type="Puff"/>
                                </Centered>
                            }>
                                <AuthCheck fallback={<Redirect to={LOGIN.path}/>}>
                                    <DefaultApp/>
                                </AuthCheck>
                            </Suspense>
                        </Route>
                    </Switch>
                </BrowserRouter>
                <ToastContainer progressStyle={{color: "accent-1"}}/>
            </Grommet>
        </>
    );
}

export default App;
