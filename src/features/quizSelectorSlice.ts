import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value: "mysql"
}

export const quizSelectorSlice = createSlice({
    name: "selectedQuiz",
    initialState,
    reducers: {
        changeCurrentQuiz: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        }
    }
})

export const { changeCurrentQuiz } = quizSelectorSlice.actions;

export default quizSelectorSlice.reducer;