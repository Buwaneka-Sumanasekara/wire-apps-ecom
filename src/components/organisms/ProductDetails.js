import React from "react"
import { Image } from "react-native"
import withScroll from "../../templates/withScroll";
import ProductDetailsBody from "../molecules/ProductDetailsBody";
import { useAddItemToCart, useUpdateItemToCart } from "../../hooks/useCart";
import { showMessage } from "react-native-flash-message";

const ProductDetails  = ({item}) => {
    const {mainImage} = item;
    const {addToCart}=useAddItemToCart(()=>showMessage({message:"Success",description:"Item added to the cart",type:"success"}));
    
    return (
       <React.Fragment>
            <Image source={{uri:mainImage}} className={"w-full h-[350px]"} />
            <ProductDetailsBody item={item} onChangeQty={(item,size,qty)=>addToCart(item,size,qty)} />
       </React.Fragment>
    )
}



export default withScroll(ProductDetails)