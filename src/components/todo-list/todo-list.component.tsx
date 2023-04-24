import React, { useContext, useEffect } from "react";
import { ItemProps } from "../../types/todo-item";
import { TodoItem } from "../todo-item/todo-item.component";
import { TodoItemEdit } from "../todo-item-edit/todo-item-edit";
import { AppContext } from "../../context/app-context";
import { Types, actions } from "../../reducer/actions";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, todoActions } from "../../slices/todoSlice";
import { AppDispatch, RootState } from "../../store/store";
// import { useGetAllTodosQuery } from "../../api/api";
import { normalizeTodoData } from "../../utils/normailize-todo";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";

export const TodoList = () => {
  // const { state } = useContext(AppContext);
  const { data, activeItem, loading } = useSelector(
    (state: RootState) => state.todo
  );

  const dispatch = useDispatch<AppDispatch>();

  // const { data: todosData } = useGetAllTodosQuery("");

  // useEffect(() => {
  //   // dispatch({ type: Types.Load });

  //   if (todosData) {
  //     const dataNormalized = normalizeTodoData(todosData);
  //     dispatch(todoActions.load(dataNormalized));
  //     dispatch(todoActions.fetching(false));
  //   }
  // }, [todosData]);

  useEffect(() => {
    // dispatch(todoActions.fetching(true));
    dispatch(fetchTodos(""));
  }, []);

  return (
    <React.Fragment>
      {loading && (
        <Box textAlign="center">
          <CircularProgress size={50} />
        </Box>
      )}
      {data.map((item: ItemProps) => (
        <React.Fragment key={item.id}>
          {activeItem?.id === item.id ? (
            <TodoItemEdit item={item} />
          ) : (
            <TodoItem item={item} />
          )}

          <br />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};
