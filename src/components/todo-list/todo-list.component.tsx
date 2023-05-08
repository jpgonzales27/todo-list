import React, { useEffect } from "react";
import { ItemProps } from "../../types/todo-item";
import { TodoItem } from "../todo-item/todo-item.component";
import { TodoItemEdit } from "../todo-item-edit/todo-item-edit";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../slices/todoSlice";
import { AppDispatch, RootState } from "../../store/store";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";

export const TodoList = () => {
  const { data, activeItem, loading } = useSelector(
    (state: RootState) => state.todo
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
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
