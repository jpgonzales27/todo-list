import React from "react";
import { ItemProps } from "../../types/todo-item";

type Props = {
  item: ItemProps;
  onSelectItem: (item: ItemProps) => void;
  deleteItem: (id: number) => void;
};

export const TodoItem = ({ item, deleteItem, onSelectItem }: Props) => {
  const { id, description, status } = item;

  return (
    <>
      <span>o</span>&nbsp;
      <span
        style={{ textDecoration: status === "done" ? "line-through" : "" }}
        onClick={() => onSelectItem(item)}
      >
        {description}
      </span>
      &nbsp;
      <span>
        <button onClick={() => deleteItem(id)}>x</button>
      </span>
    </>
  );
};
