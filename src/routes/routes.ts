import { lazy, LazyExoticComponent } from "react";


type JSXComponent = () => JSX.Element;

export interface Route {
    to: string,
    path: string,
    component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string,
}


const Lazy1 = lazy(() => import(/*webpackChunkName: "LazyPageOne"*/'../lazyload/pages/LazyPageOne'))
const Lazy2 = lazy(() => import(/*webpackChunkName: "LazyPageTwo"*/'../lazyload/pages/LazyPageTwo'))
const Lazy3 = lazy(() => import(/*webpackChunkName: "LazyPageTree"*/'../lazyload/pages/LazyPageTree'))



export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        component: Lazy1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        component: Lazy2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        component: Lazy3,
        name: 'Lazy-3'
    }
]