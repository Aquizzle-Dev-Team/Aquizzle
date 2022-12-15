import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState =  {
    value: false,
};

export const promiseStateSlice = createSlice({
    name: "promiseState",
    initialState,
    reducers: {
        addPromiseState: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        }
    }
})

export const { addPromiseState } = promiseStateSlice.actions

export default promiseStateSlice.reducer;
