import { createStore } from "redux";
import { reducer } from "../reducer/reducer";
import { initialState } from "../reducer/initial-state";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice";
import { todosApi } from "../api/api";
import { logger } from "./middleware/logger";

// let store = createStore(reducer, initialState);
let store = configureStore({
  reducer: {
    todo: todoReducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
