import React from "react";
import { ItemProps, ItemStatus } from "../../types/todo-item";
import { TodoItemStatus } from "../todo-item-status/todo-item-status.component";
import { TodoDescription, Wrapper } from "./todo-item.styles";

type Props = {
  item: ItemProps;
  onSelectItem: (item: ItemProps) => void;
  deleteItem: (id: number) => void;
};

export const TodoItem = ({ item, deleteItem, onSelectItem }: Props) => {
  const { id, description, status } = item;

  return (
    <Wrapper>
      <TodoItemStatus status={status} />
      &nbsp;
      <TodoDescription
        style={{
          textDecoration: status === ItemStatus.DONE ? "line-through" : "",
        }}
        onClick={() => onSelectItem(item)}
      >
        {description}
      </TodoDescription>
      &nbsp;
      <span>
        <button onClick={() => deleteItem(id)}>x</button>
      </span>
    </Wrapper>
  );
};
