import {ComponentType, LazyExoticComponent, ReactNode} from "react";

interface Route {
    path: string;
    exact: boolean;
    private: boolean;
    fallback: NonNullable<ReactNode> | null;
    component?: LazyExoticComponent<ComponentType<any>>;
    routes?: Route[];
    redirect?: string;
}

export default Route;
