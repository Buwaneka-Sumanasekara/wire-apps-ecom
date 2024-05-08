import React, { useState } from "react"
import { Text, View } from "react-native"
import ProductBasicInfo from "../atoms/ProductBasicInfo"
import withPaddings from "../../templates/withPaddings"
import ProductSizes from "../atoms/ProductSizes"
import { useChangeProductSize } from "../../context/ProductContext"
import QtyInput from "../atoms/QtyInput"
import AddToCartButton from "../atoms/AddToCartButton"
import { useAddItemToCart } from "../../hooks/useCart"
import { showMessage } from "react-native-flash-message"



const ProductDetailsBody = (props) => {
    const [qty,setQty]=useState(1)
    const {onChangeSize,selectedSize}=useChangeProductSize();
    const {addToCart}=useAddItemToCart(()=>showMessage({message:"Success",description:"Item added to the cart",type:"success"}));

    return (
        <View className={"pt-3 pb-32"}>
            <ProductBasicInfo {...props} />
            <ProductSizes {...props} selectedSize={selectedSize} onChange={onChangeSize} />
            <View className={"mt-5 flex flex-row"}>
                <QtyInput onChangeQty={setQty} qty={qty} />
                <AddToCartButton  isDisabled={!selectedSize} onPress={()=>{
                    addToCart(props,selectedSize,qty)
                }}/>
            </View>
            <View className={"mt-5 w-fit"}>
                <Text>{props.description}</Text>
            </View>
        </View>
    )
}

export default withPaddings(ProductDetailsBody)