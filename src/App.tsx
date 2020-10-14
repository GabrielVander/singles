import React, {Suspense} from 'react';
import DefaultApp from "./Components/Pages/DefaultApp";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {HOME, LOGIN, NOT_FOUND, REGISTER} from "./Routes/AppRoutes";
import CenteredSpin from "./Components/Others/CenteredSpin";
import Login from "./Components/Pages/Authentication/Login";
import Signup from "./Components/Pages/Authentication/Signup";
import NotFound from "./Components/Pages/NotFound";

function App() {
    return (
        <>
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
                            <DefaultApp/>
                        </Suspense>
                    </Route>
                    <Route path={NOT_FOUND.path} exact={NOT_FOUND.exact}>
                        <Suspense fallback={<CenteredSpin/>}>
                            <NotFound/>
                        </Suspense>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
