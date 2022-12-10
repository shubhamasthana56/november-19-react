//either adding state or updating state
import { createSlice } from "@reduxjs/toolkit";

const initialState = {count: 0};

//Reducers are function which either add  or update state
//slice is combination of reducer and action
const counterSlice = createSlice({
    name: "counter",
    // initialState: {count: 0},
    initialState,
    reducers: {
        increment: (state)=> {
            //return {...state, count: state.count + 1}
            state.count += 1;
        },
        decrement: (state)=> {
            state.count -= 1;
        },
        reset: (state)=> {
            state.count = 0;
        }
    }
}
)
export const {increment, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer;