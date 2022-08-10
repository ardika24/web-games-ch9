import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import scoreReducer from "./slices/score";

const store = configureStore({
  reducer: {
    user: userReducer,
    score: scoreReducer,
  },
});

export default store;
