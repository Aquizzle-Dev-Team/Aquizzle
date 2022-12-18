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
        },
        incrementTimeStamp: (state) => {
            state.value += 1;
        }
    }
})

export const { changeTimeStamp, incrementTimeStamp } = timeStampSlice.actions;

export default timeStampSlice.reducer;