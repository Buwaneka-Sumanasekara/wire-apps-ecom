import React from "react"
import { Text, View } from "react-native"
import ProductBasicInfo from "../atoms/ProductBasicInfo"
import withPaddings from "../../templates/withPaddings"
import ProductSizes from "../atoms/ProductSizes"
import { useChangeProductSize } from "../../context/ProductContext"
import QtyInput from "../atoms/QtyInput"
import AddToCartButton from "../atoms/AddToCartButton"



const ProductDetailsBody = (props) => {
    
    const {onChangeSize,selectedSize}=useChangeProductSize();
    return (
        <View className={"pt-3 pb-32"}>
            <ProductBasicInfo {...props} />
            <ProductSizes {...props} selectedSize={selectedSize} onChange={onChangeSize} />
            <View className={"mt-5 flex flex-row"}>
                <QtyInput onChangeQty={()=>{}} />
                <AddToCartButton  isDisabled={!selectedSize}/>
            </View>
            <View className={"mt-5 w-fit"}>
                <Text>{props.description}</Text>
            </View>
        </View>
    )
}

export default withPaddings(ProductDetailsBody)