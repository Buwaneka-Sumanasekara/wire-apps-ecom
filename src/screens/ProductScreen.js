import React from 'react';
import ProductDetails from '../components/organisms/ProductDetails';
import { useGetProductFromCache } from '../hooks/useProducts';
import withProductContext from '../templates/withProductContext';



const ProductScreen = ({ route }) => {
    const { itemId } = route.params;
    const product = useGetProductFromCache(itemId);

    if (!product) {
        return null;
    }
    return (
        <ProductDetails
            item={product}
        />
    );
}

export default withProductContext(ProductScreen);