import React, {Suspense} from 'react';
import {Redirect, Route as ReactRouterRoute} from 'react-router-dom';
import Route from "../../../Models/Route";
import {LOGIN} from "../../../Routes/AppRoutes";
import {useUser} from "reactfire";
import UserDetails from "../../../Models/Authentication/UserDetails";

const RouteWithSubRoutes = (route: Route) => {
    const user = useUser<UserDetails>();

    function userIsAuthenticated(): boolean {
        return user !== null;
    }

    return (
        <Suspense fallback={route.fallback}>
            <ReactRouterRoute
                path={route.path}
                render={(props) =>
                    route.redirect ? <Redirect to={route.redirect}/> :
                        route.private ? (
                            userIsAuthenticated() ? route.component &&
                              <route.component {...props} routes={route.routes}/> : <Redirect to={LOGIN.path}/>
                        ) : route.component && <route.component {...props} routes={route.routes}/>
                }
            />
        </Suspense>
    );
};

export default RouteWithSubRoutes;
