import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface questionState {
    value: any[];
}

const initialState: questionState =  {
    value: [],
};

export const questionSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        addQuestions: (state, action: PayloadAction<any[]>) => {
            state.value.push(...action.payload)
        },
        resetQuestionsState: (state) => {
            state.value = [];
        }
    }
    
})

export const { addQuestions, resetQuestionsState } = questionSlice.actions

export default questionSlice.reducer;
