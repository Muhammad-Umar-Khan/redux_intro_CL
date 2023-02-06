import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counterReducer";
import authSlice from "./reducers/authReducer";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
