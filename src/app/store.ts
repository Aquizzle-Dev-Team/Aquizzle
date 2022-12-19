import { configureStore} from '@reduxjs/toolkit';
import questionsReducer from "../features/questionSlice"
import pointsReducer from "../features/counter/pointsSlice"
import healthBarReducer from "../features/healthBarSlice"
import quizSelectorReducer from '../features/quizSelectorSlice';
import quizQuestionAnswerReducer from '../features/quizQuestionAnswerSlice';
import timeStampReducer from '../features/timeStampSlice'
import promiseStateReducer from '../features/promiseStateSlice';
import resetReducer from '../features/resetSlice';
import performedQuizReducer from '../features/performedQuizSlice';
import indexReducer from '../features/indexSlice';

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    points: pointsReducer,
    healthBar: healthBarReducer,
    selectedQuiz: quizSelectorReducer,
    QnA: quizQuestionAnswerReducer,
    timeStamp: timeStampReducer,
    promiseState: promiseStateReducer,
    reset: resetReducer,
    index: indexReducer, 
    performedQuiz: performedQuizReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch