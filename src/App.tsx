import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import {routes} from "./Routes/AppRoutes";
import {Grommet} from "grommet";
import {customTheme} from "./theme";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import RouteWithSubRoutes from "./Components/Commom/RouteWithSubRoutes";
import Route from "./Models/Route";

function App() {
    return (
        <>
            <Grommet theme={customTheme} full>
                <BrowserRouter>
                    <Switch>
                        {routes.map((route: Route) => <RouteWithSubRoutes key={route.path} {...route} />)}
                    </Switch>
                </BrowserRouter>
                <ToastContainer progressStyle={{color: "accent-1"}}/>
            </Grommet>
        </>
    );
}

export default App;
