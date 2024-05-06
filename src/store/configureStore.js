import { configureStore,applyMiddleware } from '@reduxjs/toolkit'
import cartReducer from './modules/cartSlice'
import productsReducer from './modules/productsSlice'
import {productsApi} from '../services/productsApi'


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})