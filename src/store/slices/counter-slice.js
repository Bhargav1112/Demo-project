import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state, action) {
            state.counter += 1;
        },
        decrement(state, action) {
            if (state.counter > 0) state.counter -= 1;
        },
        incrementByNumber(state, action) {
            state.counter += action.payload;
        },
    },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
