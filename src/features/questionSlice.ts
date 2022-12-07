import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface questionState {
    value: string[]
}

const initialState: questionState =  {
    value: ['hej']
}

export const questionSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        addQuestion: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload)
        }
    }
    
})

export const { addQuestion } = questionSlice.actions

export default questionSlice.reducer;
