import React from 'react';
import { View } from 'react-native';
import { ProductContextProvider } from '../context/ProductContext';

const withProductContext = (WrappedScreen) => {

    const WithProductContext = (props)=>{
        

        return (
            <ProductContextProvider>
                <WrappedScreen {...props}/>
            </ProductContextProvider>
        )


    }

    return WithProductContext;
} 

export default withProductContext;