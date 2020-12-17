import React, { lazy } from 'react';
import Route from '../Models/Route';
import PageLoader from '../Components/Commom/PageLoader';

export const HOME: Route = {
    component: lazy(() => import('../Components/Pages/DefaultApp/index')),
    fallback: <PageLoader />,
    path: '/home',
    exact: false,
    private: true,
};

export const PROFILE: Route = {
    component: lazy(() => import('../Components/Pages/Profile/index')),
    fallback: <PageLoader />,
    path: '/profile',
    exact: false,
    private: true,
};

export const LOGIN: Route = {
    component: lazy(() => import('../Components/Pages/Login/index')),
    fallback: <PageLoader />,
    path: '/login',
    exact: false,
    private: false,
};

export const NOT_FOUND: Route = {
    component: lazy(() => import('../Components/Pages/NotFound/index')),
    fallback: <PageLoader />,
    path: '*',
    exact: true,
    private: false,
};

export const REGISTER: Route = {
    component: lazy(() => import('../Components/Pages/Register/index')),
    fallback: <PageLoader />,
    path: '/register',
    exact: false,
    private: false,
};

export const FEED: Route = {
    component: lazy(() => import('../Components/Pages/FeedPage/index')),
    fallback: <PageLoader />,
    path: '/feed',
    exact: false,
    private: true,
};

export const LANDING: Route = {
    component: lazy(() => import('../Components/Pages/Landing/index')),
    fallback: <PageLoader />,
    path: '/',
    exact: true,
    private: false,
};

export const routes: Route[] = [LANDING, LOGIN, REGISTER, HOME, PROFILE, FEED, NOT_FOUND];
