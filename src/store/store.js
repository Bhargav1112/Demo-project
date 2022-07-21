import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter-slice";

const store = configureStore({
    reducer: {
        count: counterSlice.reducer,
    },
});

export default store;
