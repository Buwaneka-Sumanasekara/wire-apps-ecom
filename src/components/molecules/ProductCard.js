import React from "react";
import { Image, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const ProductCard = ({ item }) => {

    return <View className={"flex-1 px-1 pb-2"}>
        <View className={"bg-white rounded-md justify-content-center p-3"}>
            <Image source={{ uri: item.mainImage }} className={"w-3/4 aspect-square self-center"} />
            <Text className={"text-base text-black font-semibold"}>{`${item.price.amount} ${item.price.currency}`}</Text>
            <View className={"flex flex-row justify-between "}>
                <Text ellipsizeMode={"tail"} numberOfLines={2} className={"text-sm text-slate-500 basis-4/5"}>{item.name}</Text>
                <Ionicons name="heart-outline" size={25}  />
            </View>
        </View>
    </View>;

}

export default ProductCard;