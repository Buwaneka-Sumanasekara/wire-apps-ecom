import React from 'react';
import { useNavigation } from '@react-navigation/native';

import ProductList from '../components/organisms/ProductList';
import { useGetAllProductsQuery } from '../services/productsApi'
import { useAddProductToCache } from '../hooks/useProducts';
import { useAddItemToCart } from '../hooks/useCart';
import { showMessage } from 'react-native-flash-message';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { data, isLoading } = useGetAllProductsQuery();

  const { addToCart } = useAddItemToCart(() => showMessage({ message: "Success", description: "Item added to the cart", type: "success" }));

  const { showItem } = useAddProductToCache((item) => {
    navigation.navigate('ProductScreen', {
      itemId: item.id
    })
  })

  return (
    <ProductList
      items={data?.data || []}
      isLoading={isLoading}
      onPressItem={(item) =>{
        showItem(item)
      }}
      onAddToCart={addToCart}
    />
  );
}

export default HomeScreen;