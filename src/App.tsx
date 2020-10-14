import React, {Suspense} from 'react';
import DefaultApp from "./Components/Pages/DefaultApp";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {HOME, LOGIN, REGISTER} from "./Routes/AppRoutes";
import CenteredSpin from "./Components/Others/CenteredSpin";
import Login from "./Components/Pages/Authentication/Login";
import Signup from "./Components/Pages/Authentication/Signup";

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
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
