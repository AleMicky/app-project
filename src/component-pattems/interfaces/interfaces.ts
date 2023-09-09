import { ReactElement } from 'react';
export interface Props {
    product: Product,
    children?: ReactElement | ReactElement[]
}
export interface Product {
    id: number;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number,
    increaseBy: (value: number) => void,
    product: Product
}



export interface ProductCardHOCProps {
    ({ children, product }: Props): JSX.Element,
    Title: ({ title }: {
        title?: string | undefined;
    }) => JSX.Element;
    Image: ({ img }: {
        img?: string | undefined;
    }) => JSX.Element;
    Buttos: () => JSX.Element;
}