import { createSlice} from "@reduxjs/toolkit" 

const initialState = {
  value: 3
}

export const livesSlice = createSlice ({
  name: 'lives',
  initialState,
  reducers: {
    incrementLives: (state) => {
      state.value +=1;
    },
    decrementLives: (state) => {
      state.value-=1;
    }
  },
});

export const { incrementLives, decrementLives } = livesSlice.actions;

export default livesSlice.reducer;