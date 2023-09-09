import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../lazyload/pages/NoLazy";


type JSXComponent = () => JSX.Element;

export interface Route {
    to: string,
    path: string,
    component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string,
}


const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyLayout"*/'../lazyload/layout/LazyLayout'))
  


export const routes: Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        component: LazyLayout,
        name: 'LazyLayout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        component: NoLazy,
        name: 'No Lazy'
    }, 
]