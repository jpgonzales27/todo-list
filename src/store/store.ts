import { combineReducers, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice";
import { logger } from "./middleware/logger";
import { todosApi } from "../api/todos-api";

const rootReducer = combineReducers({
  todo: todoReducer,
  [todosApi.reducerPath]: todosApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware).concat(logger),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
