import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: 10
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state)=> {
            state.cart +=1
        },
        removeFromCart: (state)=> {
            state.cart -=1
        }
    }
})
export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer;