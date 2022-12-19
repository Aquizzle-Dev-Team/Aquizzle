import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Reset {
    type: string,
    code: string
}

interface ResetState {
    value: Reset
}

const initialState: ResetState = {
    value: {
        type: '',
        code: ''
    }
};

export const resetTypeSlice = createSlice({
    name: 'resetType',
    initialState,
    reducers: {
        setResetType: (state, action: PayloadAction<string>) => {
            state.value.type = action.payload;
        },
        setResetCode: (state, action: PayloadAction<string>) => {
            state.value.code = action.payload;
        }
    }
});

export const { setResetType, setResetCode } = resetTypeSlice.actions;

export default resetTypeSlice.reducer;
