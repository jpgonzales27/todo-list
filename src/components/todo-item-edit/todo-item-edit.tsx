import React, { useState } from "react";
import { ItemProps, ItemStatus } from "../../types/todo-item";
import { CustomTextField, Wrapper } from "./todo-item-edit.styles";
import { TodoItemStatus } from "../todo-item-status/todo-item-status.component";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { todoActions, updateTodo } from "../../slices/todoSlice";

type Props = {
  item: ItemProps;
};

export const TodoItemEdit = ({ item }: Props) => {
  const { id, description, status } = item;
  const [value, setValue] = useState(item.description);

  const dispatch = useDispatch<AppDispatch>();

  const handleUpdateItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("entro al formulario");
    dispatch(todoActions.selectItem(null));
    dispatch(
      updateTodo({
        id: id,
        description: value,
        status: status === ItemStatus.DONE ? ItemStatus.IN_PROGRESS : ItemStatus.DONE,
      })
    );
  };

  return (
    <Wrapper>
      <TodoItemStatus status={item.status} id={item.id} description={item.description} />
      <form style={{ display: "inline" }} onSubmit={handleUpdateItem}>
        <CustomTextField
          id={`todo-item-${item.id}`}
          variant="outlined"
          size="small"
          autoFocus
          name="description"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </Wrapper>
  );
};
