import { configureStore } from "@reduxjs/toolkit";
import spentsReducer from "./slices/spents-slice";

export const store = configureStore({
  reducer: {
    spents: spentsReducer,
  },
});
