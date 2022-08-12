import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
import { paymentReducer } from "./paymentModalSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    payment: paymentReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
