import Route from '../Model/Route';

export const HOME: Route = {
    path: '/home',
    exact: false,
    private: true,
};

export const PROFILE: Route = {
    path: '/profile',
    exact: false,
    private: true,
};

export const LOGIN: Route = {
    path: '/login',
    exact: false,
    private: false,
};

export const NOT_FOUND: Route = {
    path: '*',
    exact: true,
    private: false,
};

export const REGISTER: Route = {
    path: '/register',
    exact: false,
    private: false,
};

export const LANDING: Route = {
    path: '/',
    exact: true,
    private: false,
};
