import React from 'react';
import ProductDetails from '../components/organisms/ProductDetails';
import { useGetProductFromCache } from '../hooks/useProducts';
import withProductContext from '../templates/withProductContext';
import { useAddItemToCart } from '../hooks/useCart';
import { showMessage } from 'react-native-flash-message';
import { useChangeProductSize } from '../context/ProductContext';


const ProductScreen = ({ route }) => {
    const { itemId } = route.params;
    const product = useGetProductFromCache(itemId);
    const { addToCart } = useAddItemToCart(() => showMessage({ message: "Success", description: "Item added to the cart", type: "success" }));
    const {onChangeSize,selectedSize}=useChangeProductSize();

    if (!product) {
        return null;
    }
    return (
        <ProductDetails
            item={product}
            onPressAddToCart={(item, size, qty) => addToCart(item, size, qty)}
            selectedSize={selectedSize}
            onChangeSize={onChangeSize}
        />
    );
}

export default withProductContext(ProductScreen);