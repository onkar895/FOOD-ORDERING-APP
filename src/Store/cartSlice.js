import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {

    addToCart: (state, action) => {
      const itemInCart = state.items.find((item) => item.id === action.payload);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

     incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
     
     decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
     
     removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
     

    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { addToCart, incrementQuantity, decrementQuantity,  removeItem, clearCart } = cartSlice.actions

export const cartReducer = cartSlice.reducer
