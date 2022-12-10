import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer/counter-reducer";
import cartReducer from "./reducer/cart-reducer";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartReducer
    }
});