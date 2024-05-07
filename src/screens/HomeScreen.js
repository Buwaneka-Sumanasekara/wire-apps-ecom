import React from 'react';
import ProductList from '../components/organisms/ProductList';

import {useGetAllProductsQuery} from '../services/productsApi'

const HomeScreen  = ()=>{
    
    const {data}=useGetAllProductsQuery();
    return (
        <ProductList
          items={data?.data || []}
          
        />
    );
}

export default HomeScreen;