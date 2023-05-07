import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ItemProps, ItemPropsMongo } from "../types/todo-item";
import { Api } from "./api";

export const TODO_PREFIX = "todos";

export const todosApi = Api.injectEndpoints({
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
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/${TODO_PREFIX}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),
    updateTodo: builder.mutation({
      query: (updateTodo) => ({
        url: `/${TODO_PREFIX}/${updateTodo.id}`,
        method: "PATCH",
        body: updateTodo,
      }),
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),
  }),
  overrideExisting: true,
});

export const { useGetAllTodosQuery, useAddTodoMutation } = todosApi;
