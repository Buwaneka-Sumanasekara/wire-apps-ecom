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
        const {amount,currency}=newItem.price
        const uniqueId=`${newItem.id}-${newItem.seletedSize}`
        const existingItem = state.items.find(item => (item.uniqueId === newItem.uniqueId))

        const price=parseFloat(amount)
        const lineAmount = price * newItem.qty

        state.totalAmount += lineAmount
        if (!existingItem) {
            state.items.push({
                uniqueId: uniqueId,
                id: newItem.id,
                name: newItem.name,
                price: price,
                qty: newItem.qty || 1,
                currency: currency,
                size: newItem.seletedSize,
                productInfo: newItem,
                lineAmount: lineAmount
            })
        } else {
           existingItem.qty += newItem.qty
            existingItem.lineAmount = existingItem.price * newItem.qty

            state.items = state.items.map(item => item.id === existingItem.id ? { ...item, ...existingItem } : item)
        }
    },
    removeItemFromCart: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id)
        state.totalAmount = state.items.reduce((acc, item) => acc + item.price * item.qty, 0)
    },
    clearCart: (state) => {
        state.items = []
        state.totalAmount = 0
    },
    recalCulateTotalAmount: (state) => {
        state.totalAmount = state.items.reduce((acc, item) => acc + item.price * item.qty, 0)
    },
    updateItemQty: (state, action) => {
        const { uniqueId, qty } = action.payload
        const foundItem = state.items.find(item => item.uniqueId === uniqueId)

        if(foundItem){
            foundItem.qty = qty
            foundItem.lineAmount = foundItem.price * foundItem.qty
            state.items=state.items.map(item => (item.uniqueId === uniqueId ? { ...foundItem } : item))
            state.totalAmount = state.items.reduce((acc, item) => acc + item.price * item.qty, 0)
        }
      
    }
  }
})

// Action creators are generated for each case reducer function
export const { addItemToCart,removeItemFromCart,updateItemQty } = cartSlice.actions

export default cartSlice.reducer