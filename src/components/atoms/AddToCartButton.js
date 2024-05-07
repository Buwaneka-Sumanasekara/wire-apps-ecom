import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

const AddToCartButton = ({ isMini, onPress , isDisabled }) => {


    return (
        <TouchableOpacity onPress={onPress} disabled={isDisabled}>
            {isMini ? <Ionicons name="heart-outline" size={25} color={(isDisabled?"grey":"white")} className={"self-end"} /> :
                <View className={"bg-primary flex flex-row  justify-center  items-center p-2 rounded-md"}>
                    <Ionicons name="heart" color={(isDisabled?"grey":"white")} size={25}  />
                    <Text className={`${isDisabled?'text-slate-500':'text-white'} ml-1`}>{"Add To Cart"}</Text>
                </View>}
        </TouchableOpacity>
    )

}

export default AddToCartButton;