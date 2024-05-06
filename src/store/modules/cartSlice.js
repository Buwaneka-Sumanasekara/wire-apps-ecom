import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
        const newItem = action.payload
        const existingItem = state.items.find(item => item.id === newItem.id)
        state.totalAmount += newItem.price
        if (!existingItem) {
            state.items.push({
                id: newItem.id,
                name: newItem.name,
                price: newItem.price,
                qty: 1,
                currency: newItem.currency,
                productInfo: newItem,
                lineAmount: newItem.price
            })
        } else {
            existingItem.qty++
            existingItem.lineAmount = existingItem.price * existingItem.qty

            state.items = state.items.map(item => item.id === existingItem.id ? { ...item, ...existingItem } : item)
        }
    },
    removeItemFromCart: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id)
        state.totalAmount -= state.items.reduce((acc, item) => acc + item.price * item.qty, 0)
    },
    clearCart: (state) => {
        state.items = []
        state.totalAmount = 0
    },
    recalCulateTotalAmount: (state) => {
        state.totalAmount = state.items.reduce((acc, item) => acc + item.price * item.qty, 0)
    },
    updateItemQty: (state, action) => {
        const { id, qty } = action.payload
        const foundItem = state.items.find(item => item.id === id)

        if(foundItem){
            foundItem.qty = qty
            foundItem.lineAmount = foundItem.price * foundItem.qty
            state.items=state.items.map(item => item.id === id ? { ...item, ...foundItem } : item)
            state.totalAmount += (qty - item.qty) * item.price
        }
      
    }
  }
})

// Action creators are generated for each case reducer function
export const { addItemToCart,removeItemFromCart } = cartSlice.actions

export default cartSlice.reducer