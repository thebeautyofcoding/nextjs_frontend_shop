import { Product } from "../graphql/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
export interface CartState {
  productsInCart: Product[]
  total: number
  cartOpen: boolean
}

const initialState: CartState = {
  productsInCart: [],
  total: 0,
  cartOpen: false,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Product>) => {
      const productIncart = state.productsInCart.find(
        (product) => product.id === action.payload.id
      )
      if (!productIncart) {
        state.productsInCart.push({ ...action.payload, quantity: 1 })

        state.total = state.productsInCart.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        )
      } else {
        productIncart.quantity++

        state.total = state.productsInCart.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        )
      }
    },

    deleteItemFromCart: (state, action: PayloadAction<Product>) => {
      const productInCartIndex = state.productsInCart.findIndex(
        (product) => product.id === action.payload.id
      )

      if (state.productsInCart[productInCartIndex].quantity === 1) {
        state.productsInCart.splice(productInCartIndex, 1)
        state.total = state.productsInCart.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        )
      } else {
        state.productsInCart[productInCartIndex].quantity--
        state.total = state.productsInCart.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        )
      }
    },
    openCart: (state, action: PayloadAction<boolean>) => {
      state.cartOpen = action.payload
    },
  },
})

export const { addItemToCart, deleteItemFromCart, openCart } = cartSlice.actions

export default cartSlice.reducer
