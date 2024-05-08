import { useCallback, useEffect, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native"
import { Ionicons } from '@expo/vector-icons';

export default QtyInput = ({ onChangeQty,qty }) => {

   




    const onAddQty = useCallback(() => {
        onChangeQty((parseInt(qty) + 1));
    }, [qty])

    const onDeductQty = useCallback(() => {
        if (qty > 1) {
            onChangeQty((parseInt(qty) - 1));
        }
    }, [qty])

    return (
        <View className={"flex flex-row"}>
            <TouchableOpacity className={"bg-black p-2 justify-center items-center"} onPress={()=>onDeductQty()}>
                <Ionicons name={"remove"} size={15} color={"white"} />
            </TouchableOpacity>
            <TextInput editable={false} value={`${qty}`} className={"border border-gray-300  p-2 w-10 text-center  items-center"} />
            <TouchableOpacity className={"bg-black p-2  justify-center  items-center"} onPress={()=>onAddQty()} >
                <Ionicons name={"add"} size={15} color={"white"} />
            </TouchableOpacity>
        </View>
    )
}
