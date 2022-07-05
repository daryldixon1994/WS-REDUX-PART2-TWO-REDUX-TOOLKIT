import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    name: "",
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = "Anwar";
        },
    },
});
export const { setName } = userSlice.actions;
export default userSlice.reducer;
