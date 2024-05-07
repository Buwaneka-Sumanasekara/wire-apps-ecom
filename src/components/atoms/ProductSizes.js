import React, { useCallback, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';




const ProductSizes = ({ sizes,selectedSize:passedSelectedSize,onChange }) => {
    const [selectedSize, setSelectedSize] = useState(passedSelectedSize || null);



    useEffect(() => {
        onChange(selectedSize);
    }, [selectedSize,onChange])


    const handleSizeSelection = useCallback((size) => {
        setSelectedSize(size);
    }, [sizes])

    return (
        <View className={"mt-3"}>
            <Text>{"Choose size"}</Text>
            <View className={"flex flex-row flex-wrap gap-2 w-screen mt-1"}>
                {(sizes || []).map((size) => {
                    const isSelected = (selectedSize === size);
                    return (
                        <TouchableOpacity
                            key={`size-id-${size}`}
                            onPress={() => handleSizeSelection(size)}
                            className={`${(isSelected ? `bg-black` : `bg-slate-100`)} p-3 rounded-lg`}>
                            <Text className={(isSelected ? "text-white" : "text-black")}>{size}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )

}

export default ProductSizes;