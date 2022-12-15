import { configureStore} from '@reduxjs/toolkit';
import questionsReducer from "../features/questionSlice"
import pointsReducer from "../features/counter/pointsSlice"
import healthBarReducer from "../features/healthBarSlice"
import quizSelectorReducer from '../features/quizSelectorSlice';
import quizQuestionAnswerReducer from '../features/quizQuestionAnswerSlice';
import timeStampReducer from '../features/timeStampSlice'
import promiseStateReducer from '../features/promiseStateSlice';

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    points: pointsReducer,
    healthBar: healthBarReducer,
    selectedQuiz: quizSelectorReducer,
    QnA: quizQuestionAnswerReducer,
    timeStamp: timeStampReducer,
    promiseState: promiseStateReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch