import React from "react"
import { Image } from "react-native"
import withScroll from "../../templates/withScroll";
import ProductDetailsBody from "../molecules/ProductDetailsBody";


const ProductDetails = ({ item, onPressAddToCart, onChangeSize, selectedSize }) => {
    const { mainImage } = item;
    return (
        <React.Fragment>
            <Image source={{ uri: mainImage }} className={"w-full h-[350px]"} />
            <ProductDetailsBody
                selectedSize={selectedSize}
                item={item} onAddToCart={(item, size, qty) => onPressAddToCart(item, size, qty)} onChangeSize={onChangeSize} />
        </React.Fragment>
    )
}



export default withScroll(ProductDetails)