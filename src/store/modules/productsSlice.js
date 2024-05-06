import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    cachedItems: []
  },
  reducers: {
    addItemToCache: (state, action) => {
        const isExists = state.cachedItems.find(item => item.id === action.payload.id)
        if(!isExists){
            state.cachedItems.push(action.payload)
        }
    },
    invalidateCache: (state) => {
        state.cachedItems = []
    },
  }
})

// Action creators are generated for each case reducer function
export const { invalidateCache,addItemToCache} = productsSlice.actions

export default productsSlice.reducer