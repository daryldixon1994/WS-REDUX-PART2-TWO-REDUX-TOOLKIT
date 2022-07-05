import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    counter: 0,
};
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increaseCounter: (state, action) => {
            let { payload } = action;
            console.log(payload);
            state.counter++;
        },
    },
});
export const { increaseCounter } = counterSlice.actions;
export default counterSlice.reducer;
