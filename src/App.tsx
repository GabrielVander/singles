import React, {Suspense} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {HOME, LANDING, LOGIN, NOT_FOUND, PROFILE, REGISTER} from "./Routes/AppRoutes";
import Landing from "./Components/Pages/Landing";
import {Grommet} from "grommet";
import {customTheme} from "./theme";
import Login from "./Components/Pages/Login";
import DefaultApp from "./Components/Pages/DefaultApp";
import NotFound from "./Components/Pages/NotFound";
import {AuthCheck} from "reactfire";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import Register from "./Components/Pages/Register";
import Profile from "./Components/Pages/Profile";
import PageLoader from "./Components/Commom/PageLoader";
import AppFooter from "./Components/Commom/AppFooter";

function App() {
    return (
        <>
            <Grommet theme={customTheme} full>
                <BrowserRouter>
                    <Switch>
                        <Route path={LOGIN.path} exact={LOGIN.exact}>
                            <Suspense fallback={<PageLoader/>}>
                                <Login/>
                                <AppFooter/>
                            </Suspense>
                        </Route>
                        <Route path={REGISTER.path} exact={REGISTER.exact}>
                            <Suspense fallback={<PageLoader/>}>
                                <Register/>
                                <AppFooter/>
                            </Suspense>
                        </Route>
                        <Route path={LANDING.path} exact={LANDING.exact}>
                            <Suspense fallback={<PageLoader/>}>
                                <Landing/>
                            </Suspense>
                        </Route>
                        <Route path={HOME.path} exact={HOME.exact}>
                            <Suspense fallback={<PageLoader/>}>
                                <AuthCheck fallback={<Redirect to={LOGIN.path}/>}>
                                    <DefaultApp/>
                                </AuthCheck>
                            </Suspense>
                        </Route>
                        <Route path={PROFILE.path} exact={PROFILE.exact}>
                            <Suspense fallback={<PageLoader/>}>
                                <AuthCheck fallback={<Redirect to={LOGIN.path}/>}>
                                    <Profile/>
                                </AuthCheck>
                            </Suspense>
                        </Route>
                        <Route path={NOT_FOUND.path} exact={NOT_FOUND.exact}>
                            <Suspense fallback={<PageLoader/>}>
                                <NotFound/>
                                <AppFooter/>
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
