import React, {Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {HOME, LOGIN} from "./Routes/AppRoutes";
import CenteredSpin from "./Components/Others/CenteredSpin";
import Login from "./Components/Pages/Login";
import Home from "./Components/Pages/Landing/Home";

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
                    <Route path={HOME.path} exact={HOME.exact}>
                        <Suspense fallback={<CenteredSpin/>}>
                            <Home/>
                        </Suspense>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
