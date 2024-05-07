import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const AddToCartButton = ({ productId,isMini }) => {

    if(isMini){
        return (
            <Ionicons name="heart-outline" size={25} className={"self-end"}  />
        )
    }
    return (
        <Ionicons name="heart-outline" size={25} className={"self-end"}  />
    )
}

export default AddToCartButton;