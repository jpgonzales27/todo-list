import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ItemProps, ItemPropsMongo } from "../types/todo-item";

export const API_BASE_URL = "https://todo-service-0qq0.onrender.com/api/v1/";
export const TODO_PREFIX = "todos";

export const todosApi = createApi({
  reducerPath: "todos-api",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getAllTodos: builder.query<ItemPropsMongo[], string>({
      query: (searchParam) => ({
        url: TODO_PREFIX,
        method: "GET",
        params: { search: searchParam },
      }),
      providesTags: [{ type: "Todos", id: "LIST" }],
    }),
    addTodo: builder.mutation<ItemPropsMongo, Partial<ItemProps>>({
      query: (body) => ({
        url: TODO_PREFIX,
        method: "POST",
        body: body,
      }),
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),
  }),
});

export const { useGetAllTodosQuery, useAddTodoMutation } = todosApi;
