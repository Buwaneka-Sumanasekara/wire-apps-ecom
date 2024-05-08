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
            const { amount, currency } = newItem.price
            const uniqueId = `${newItem.id}_${newItem.seletedSize}`
            const existingItem = state.items.find(item => (item.uniqueId === uniqueId))

            const qty=parseInt(newItem.qty || 1)
            const price = parseFloat(amount)
            const lineAmount = parseFloat(price * qty)
           
            if (!existingItem) {
                
                state.items.push({
                    uniqueId: uniqueId,
                    id: newItem.id,
                    name: newItem.name,
                    price: price,
                    qty: qty,
                    currency: currency,
                    size: newItem.seletedSize,
                    productInfo: newItem,
                    lineAmount: lineAmount
                })
            } else {
                existingItem.qty = qty
                existingItem.lineAmount =lineAmount
                state.items = state.items.map(item => item.uniqueId === existingItem.uniqueId ? { ...item, ...existingItem } : item)
            }

            state.totalAmount = state.items.reduce((acc, item) => acc + item.lineAmount, 0)
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
    }
})

// Action creators are generated for each case reducer function
export const { addItemToCart, removeItemFromCart, updateItemQty } = cartSlice.actions

export default cartSlice.reducer