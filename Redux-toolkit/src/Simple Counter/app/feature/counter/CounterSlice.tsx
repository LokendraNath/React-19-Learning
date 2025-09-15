import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count--;
    },
    plusFive: (state) => {
      state.count += 5;
    },
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const { increment, decrement, plusFive } = CounterSlice.actions;
export default CounterSlice.reducer;
