import React from "react"
import { Image } from "react-native"
import withScroll from "../../templates/withScroll";
import ProductDetailsBody from "../molecules/ProductDetailsBody";

const ProductDetails  = ({item}) => {
    const {mainImage} = item;

    
    return (
       <React.Fragment>
            <Image source={{uri:mainImage}} className={"w-full h-[350px]"} />
            <ProductDetailsBody {...item}  />
       </React.Fragment>
    )
}



export default withScroll(ProductDetails)