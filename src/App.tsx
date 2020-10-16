import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {HOME, LOGIN, REGISTER} from "./Routes/AppRoutes";
import Signup from "./Components/Pages/Authentication/Signup";
import Landing from "./Components/Pages/Landing";
import {Grommet} from "grommet";
import {customTheme} from "./theme";
import Login from "./Components/Pages/Login";
import Loader from "react-loader-spinner";
import Centered from "./Components/Styled/Centered";

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
                        <Route path={HOME.path} exact={HOME.exact}>
                            <Suspense fallback={
                                <Centered>
                                    <Loader type="Puff"/>
                                </Centered>
                            }>
                                <Landing/>
                            </Suspense>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </Grommet>
        </>
    );
}

export default App;
