import { createSlice, PayloadAction } from "@reduxjs/toolkit"
const initialState = {
  openMultiStepModal: false,
}

const paymentModalSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<boolean>) => {
      state.openMultiStepModal = action.payload
    },
  },
})

export const { openModal } = paymentModalSlice.actions
export const paymentReducer = paymentModalSlice.reducer
