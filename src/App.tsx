import React, {Suspense} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {HOME, LANDING, LOGIN, NOT_FOUND, PROFILE, REGISTER} from "./Routes/AppRoutes";
import Landing from "./Components/Pages/Landing";
import {Grommet} from "grommet";
import {customTheme} from "./theme";
import Login from "./Components/Pages/Login";
import Loader from "react-loader-spinner";
import Centered from "./Components/Styled/Centered";
import DefaultApp from "./Components/Pages/DefaultApp";
import NotFound from "./Components/Pages/NotFound";
import {AuthCheck} from "reactfire";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import Register from "./Components/Pages/Register";
import Profile from "./Components/Pages/Profile";

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
                                <Register/>
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
                        <Route path={PROFILE.path} exact={PROFILE.exact}>
                            <Suspense fallback={
                                <Centered>
                                    <Loader type="Puff"/>
                                </Centered>
                            }>
                                <AuthCheck fallback={<Redirect to={LOGIN.path}/>}>
                                    <Profile/>
                                </AuthCheck>
                            </Suspense>
                        </Route>
                        <Route path={NOT_FOUND.path} exact={NOT_FOUND.exact}>
                            <Suspense fallback={
                                <Centered>
                                    <Loader type="Puff"/>
                                </Centered>
                            }>
                                <NotFound/>
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
