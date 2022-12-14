import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value: ""
}

export const quizSelectorSlice = createSlice({
    name: "selectedQuiz",
    initialState,
    reducers: {
        changeCurrentQuiz: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})

export const { changeCurrentQuiz } = quizSelectorSlice.actions;

export default quizSelectorSlice.reducer;