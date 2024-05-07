import React from 'react';
import { useNavigation } from '@react-navigation/native';

import ProductList from '../components/organisms/ProductList';
import { useGetAllProductsQuery } from '../services/productsApi'
import { useAddProductToCache } from '../hooks/useProducts';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { data, isLoading } = useGetAllProductsQuery();


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
    />
  );
}

export default HomeScreen;