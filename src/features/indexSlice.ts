import { createSlice} from "@reduxjs/toolkit" 

const initialState = {
  value: 0
}

export const indexSlice = createSlice ({
  name: 'index',
  initialState,
  reducers: {
    setIndex: (state, action) => {
      state.value = action.payload;
    },
    incrementIndex: (state) => {
        state.value +=1;
    }
  },
});

export const { setIndex, incrementIndex } = indexSlice.actions;

export default indexSlice.reducer;