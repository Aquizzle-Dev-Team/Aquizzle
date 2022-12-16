import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState =  {
    question: "Error: No question generated.",
    answerA: "Answer A",
    answerB: "Answer B",
    answerC: "Answer C",
    answerD: "Answer D",
};

export const quizQuestionAnswerSlice = createSlice({
    name: "QnA",
    initialState,
    reducers: {
        setQuestion: (state, action: PayloadAction<any>) => {
            state.question = action.payload
        },
        setAnswerA: (state, action: PayloadAction<any>) => {
            state.answerA = action.payload
        },
        setAnswerB: (state, action: PayloadAction<any>) => {
            state.answerB = action.payload
        },
        setAnswerC: (state, action: PayloadAction<any>) => {
            state.answerC = action.payload
        },
        setAnswerD: (state, action: PayloadAction<any>) => {
            state.answerD = action.payload
        },
    }
    
})

export const { setQuestion, setAnswerA, setAnswerB, setAnswerC, setAnswerD } = quizQuestionAnswerSlice.actions

export default quizQuestionAnswerSlice.reducer;
