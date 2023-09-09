import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export const ProductImage = ({ img = '' }) => {

    const { product } = useContext(ProductContext)

    let imgToShow: string | undefined;

    if (img) {
        imgToShow = img;
    } else if (product.id) {
        imgToShow = product.img;
    } else {
        imgToShow = noImage;
    }

    return (
        <img className={styles.productImg} src={imgToShow} alt="coffee" />
    )
}