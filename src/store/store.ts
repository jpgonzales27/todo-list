import { createStore } from "redux";
import { reducer } from "../reducer/reducer";
import { initialState } from "../reducer/initial-state";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice";
// let store = createStore(reducer, initialState);
let store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
