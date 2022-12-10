import { configureStore} from '@reduxjs/toolkit';
import questionsReducer from "../features/questionSlice"
import pointsReducer from "../features/counter/pointsSlice"
import livesReducer from "../features/livesSlice"


export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    points: pointsReducer,
    lives: livesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch