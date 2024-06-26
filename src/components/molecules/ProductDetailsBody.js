import React, { useState } from "react"
import { Text, View } from "react-native"
import ProductBasicInfo from "../atoms/ProductBasicInfo"
import withPaddings from "../../templates/withPaddings"
import ProductSizes from "../atoms/ProductSizes"
import QtyInput from "../atoms/QtyInput"
import AddToCartButton from "../atoms/AddToCartButton"

const ProductDetailsBody = (props) => {
    const { onAddToCart, item, onChangeSize, selectedSize } = props;
    const [qty, setQty] = useState(1)
    return (
        <View className={"pt-3 pb-32"}>
            <ProductBasicInfo item={item} />
            <ProductSizes sizes={(item?.sizes || [])} selectedSize={selectedSize} onChange={onChangeSize} />
            <View className={"mt-5 flex flex-row"}>
                <QtyInput onChangeQty={setQty} qty={qty} />
                <View className={"pr-2"}/>
                <AddToCartButton isDisabled={!selectedSize} onPress={() => {
                    onAddToCart(item, selectedSize, qty)
                }} />
            </View>
            <View className={"mt-5 w-fit"}>
                <Text>{item.description}</Text>
            </View>
        </View>
    )
}

export default withPaddings(ProductDetailsBody)