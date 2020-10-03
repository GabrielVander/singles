import React from 'react';
import DefaultApp from "./Components/DefaultApp";
import {BrowserRouter, Switch} from 'react-router-dom';
import {HOME} from "./Routes/AppRoutes";
import RouteWrapper from "./Components/RouteWrapper";

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
