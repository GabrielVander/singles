import React, {Suspense} from 'react';
import DefaultApp from "./Components/DefaultApp";
import {BrowserRouter, Switch} from 'react-router-dom';
import {HOME} from "./Routes/AppRoutes";
import RouteWrapper from "./Components/RouteWrapper";
import {Spin} from "antd";

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <RouteWrapper route={HOME}>
                        <Suspense fallback={<Spin/>}>
                            <DefaultApp/>
                        </Suspense>
                    </RouteWrapper>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
