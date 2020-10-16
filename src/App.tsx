import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {HOME, LOGIN, REGISTER} from "./Routes/AppRoutes";
import CenteredSpin from "./Components/Commom/CenteredSpin";
import Login from "./Components/Pages/Authentication/Login";
import Signup from "./Components/Pages/Authentication/Signup";
import Landing from "./Components/Pages/Landing";
import {Grommet} from "grommet";
import {customTheme} from "./theme";

function App() {
    return (
        <>
            <Grommet theme={customTheme} full>
                <BrowserRouter>
                    <Switch>
                        <Route path={LOGIN.path} exact={LOGIN.exact}>
                            <Suspense fallback={<CenteredSpin/>}>
                                <Login/>
                            </Suspense>
                        </Route>
                        <Route path={REGISTER.path} exact={REGISTER.exact}>
                            <Suspense fallback={<CenteredSpin/>}>
                                <Signup/>
                            </Suspense>
                        </Route>
                        <Route path={HOME.path} exact={HOME.exact}>
                            <Suspense fallback={<CenteredSpin/>}>
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
