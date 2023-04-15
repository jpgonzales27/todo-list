import React, { useContext, useEffect } from "react";
import { ItemProps } from "../../types/todo-item";
import { TodoItem } from "../todo-item/todo-item.component";
import { TodoItemEdit } from "../todo-item-edit/todo-item-edit";
import { AppContext } from "../../context/app-context";
import { Types, actions } from "../../reducer/actions";

export const TodoList = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: Types.Load });
  }, []);

  return (
    <React.Fragment>
      {state?.data.map((item: ItemProps) => (
        <React.Fragment key={item.id}>
          {state.activeItem?.id === item.id ? (
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
