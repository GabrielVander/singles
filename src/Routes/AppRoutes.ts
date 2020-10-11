import Route from "../Model/Route";

export const HOME: Route = {
    path: '/',
    exact: true,
    private: true
}

export const LOGIN: Route = {
    path: '/login',
    exact: false,
    private: false
}

export const NOT_FOUND: Route = {
    path: '*',
    exact: true,
    private: false
}
