import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from '../Store/cartSlice'

const appStore = configureStore({
  reducer: cartReducer
})

export default appStore
