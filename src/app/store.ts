import { configureStore} from '@reduxjs/toolkit';
import questionsReducer from "../features/questionSlice"
import pointsReducer from "../features/counter/pointsSlice"
import healthBarReducer from "../features/healthBarSlice"
import quizSelectorSlice from '../features/quizSelectorSlice';
import resetCodeReducer from '../features/resetCodeSlice';


export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    points: pointsReducer,
    healthBar: healthBarReducer,
    selectedQuiz: quizSelectorSlice,
    resetCode: resetCodeReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch