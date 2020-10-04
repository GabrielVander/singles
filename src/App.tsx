import React, {Suspense} from 'react';
import DefaultApp from "./Components/Pages/DefaultApp";
import {BrowserRouter, Switch} from 'react-router-dom';
import {HOME} from "./Routes/AppRoutes";
import RouteWrapper from "./Components/Others/RouteWrapper";
import CenteredSpin from "./Components/Others/CenteredSpin";

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <RouteWrapper route={HOME}>
                        <Suspense fallback={<CenteredSpin/>}>
                            <DefaultApp/>
                        </Suspense>
                    </RouteWrapper>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
