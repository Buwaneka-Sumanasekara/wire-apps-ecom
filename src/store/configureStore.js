import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from './modules/cartSlice'
import productsReducer from './modules/productsSlice'
import { productsApiSlice } from '../services/productsApi'

//persist storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer, persistStore, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
  cart: cartReducer,
  products: productsReducer,
  [productsApiSlice.reducerPath]: productsApiSlice.reducer,
}))


export function setupStore(preloadedState = {}) {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(productsApiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState
  })
}

export const store = setupStore({})
export const persistor = persistStore(store)