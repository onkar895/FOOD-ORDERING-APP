import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../Store/cartSlice'

const appStore = configureStore({
  reducer: {
    cart: cartReducer
  }
})

export default appStore
