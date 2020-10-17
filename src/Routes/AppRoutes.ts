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

export const REGISTER: Route = {
    path: '/register',
    exact: false,
    private: false
}

export const LANDING: Route = {
    path: '/landing',
    exact: false,
    private: false
}
