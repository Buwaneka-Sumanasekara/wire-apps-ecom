import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import AddToCartButton from "../atoms/AddToCartButton";
import withProductContext from "../../templates/withProductContext";


const ProductCard = ({ item, onPressItem }) => {

    return <TouchableOpacity onPress={() => onPressItem(item)} className={"w-1/2 px-1 pb-2"}>
        <View className={"flex-1  bg-white rounded-md justify-content-center p-3"}>
            <Image source={{ uri: item.mainImage }} className={"w-3/4 aspect-square self-center"} />
            <Text className={"text-base text-black font-semibold"}>{`${item.price.amount} ${item.price.currency}`}</Text>
            <View className={"flex flex-row"}>
                <Text ellipsizeMode={"tail"} numberOfLines={2} className={"text-sm text-slate-500 w-4/5"}>{item.name}</Text>
                <AddToCartButton productId={item.id} isMini={true} />
            </View>
        </View>
    </TouchableOpacity>;

}

export default withProductContext(ProductCard);