import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PerformedQuizState {
    value: PerformedQuiz[];
};

interface PerformedQuiz {
    typeOfQuiz: string,
    date: string,
    time: string,
    performedByuid: string,
    performedByName: string,
    score: number
};

const initialState: PerformedQuizState = {
    value: []
};

export const performedQuizSlice = createSlice({
    name: "performedQuiz",
    initialState, 
    reducers: {
        addPerformedQuiz: (state, action: PayloadAction<PerformedQuiz>) => {
            state.value.push(action.payload)
        }
    },
})

export const { addPerformedQuiz } = performedQuizSlice.actions;
export default performedQuizSlice.reducer;