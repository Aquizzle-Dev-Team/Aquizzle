import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
    value: '',
};

export const resetCodeSlice = createSlice({
    name: 'resetCode',
    initialState,
    reducers: {
        setResetCode: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
});

export const { setResetCode } = resetCodeSlice.actions;

export default resetCodeSlice.reducer;
