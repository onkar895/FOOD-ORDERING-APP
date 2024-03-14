import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload)
    },

    removeItem: (state, action) => {
      const indexToRemove = state.items.findIndex(item => item.id === action.payload.id)
      if (indexToRemove !== -1) {
        state.items.splice(indexToRemove, 1)
      }
    },

    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { addToCart, removeItem, clearCart} = cartSlice.actions

export const cartReducer = cartSlice.reducer
