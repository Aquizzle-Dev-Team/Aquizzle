import { createSlice} from "@reduxjs/toolkit" 

const initialState = {
  value: 3
}

export const healthBarSlice = createSlice ({
  name: 'lives',
  initialState,
  reducers: {
    incrementHealthBar: (state) => {
      state.value +=1;
    },
    decrementHealthBar: (state) => {
      state.value-=1;
    },
    initialHealthBarValue: (state) => {
      state.value-=1;
    }
  },
});

export const { incrementHealthBar, decrementHealthBar, initialHealthBarValue } = healthBarSlice.actions;

export default healthBarSlice.reducer;