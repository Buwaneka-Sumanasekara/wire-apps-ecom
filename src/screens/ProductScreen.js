import React from 'react';
import ProductDetails from '../components/organisms/ProductDetails';
import { useGetProductFromCache } from '../hooks/useProducts';
import withProductContext from '../templates/withProductContext';
import { useGetSelectedProductSize } from '../context/ProductContext';



const ProductScreen = ({ route }) => {
    const { itemId } = route.params;


    const product = useGetProductFromCache(itemId);

  

    return (
            <ProductDetails
                item={product}
            />
    );
}

export default withProductContext(ProductScreen);