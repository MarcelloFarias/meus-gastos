import { Spent } from "@/src/interfaces/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const spentsSlice = createSlice({
  name: "spents",
  initialState: {
    spents: [] as Spent[],
  },
  reducers: {
    setSpents: (state: any, action: PayloadAction<any>) => {
      state.spents = action.payload;
    },
  },
});

export const { setSpents } = spentsSlice.actions;
export const selectSpents = (state: any) => state.spents.spents;

const spentsReducer = spentsSlice.reducer;

export default spentsReducer;
