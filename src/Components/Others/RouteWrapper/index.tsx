import React from "react";
import {Route as ReactRouterRoute,} from "react-router-dom";
import Route from "../../../Model/Route";

interface RouteWrapperProps {
    route: Route
    children: any
}

function RouteWrapper({children, route}: RouteWrapperProps) {
    return (
        <ReactRouterRoute exact={route.exact} path={route.path}>
            {children}
        </ReactRouterRoute>
    );
}

export default RouteWrapper;
