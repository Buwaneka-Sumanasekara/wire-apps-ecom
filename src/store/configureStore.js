import { configureStore,applyMiddleware } from '@reduxjs/toolkit'
import cartReducer from './modules/cartSlice'
import productsReducer from './modules/productsSlice'
import {productsApiSlice} from '../services/productsApi'


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})