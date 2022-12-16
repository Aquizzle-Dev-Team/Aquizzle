import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const timeStampSlice = createSlice({
    name: "timeStamp",
    initialState,
    reducers: {
        changeTimeStamp: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        }
    }
})

export const { changeTimeStamp } = timeStampSlice.actions;

export default timeStampSlice.reducer;