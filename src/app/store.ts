import { configureStore} from '@reduxjs/toolkit';
import questionsReducer from "../features/questionSlice"
import pointsReducer from "../features/counter/pointsSlice"
import healthBarReducer from "../features/healthBarSlice"


export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    points: pointsReducer,
    healthBar: healthBarReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch