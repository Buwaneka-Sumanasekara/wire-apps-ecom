import React from "react"
import { View, Text } from "react-native"

export default ProductBasicInfo = ({ name, brandName, price }) => {
    return <View className={"flex flex-row justify-between"}>
        <View className={"w-2/3"}>
            <Text className={"text-slate-600 uppercase"}>{brandName}</Text>
            <Text className={"font-bold text-lg"}>{name}</Text>
        </View>
        <View className={"w-1/3 flex flex-row justify-end"}>
            <Text className={"font-bold text-lg"}>{`${price?.amount} ${price?.currency}`}</Text>
        </View>
    </View>
}