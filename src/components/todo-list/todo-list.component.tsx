import React from "react";
import { ItemProps } from "../../types/todo-item";
import { TodoItem } from "../todo-item/todo-item.component";
import { TodoItemEdit } from "../todo-item-edit/todo-item-edit";

export type Props = {
  data: Array<ItemProps>;
  activeItem: ItemProps | null;
  deleteItem: (id: number) => void;
  onSelectItem: (item: ItemProps) => void;
  onUpdateItem: (id: number, itemData: Partial<ItemProps>) => void;
};

export const TodoList = ({
  data,
  deleteItem,
  activeItem,
  onSelectItem,
  onUpdateItem,
}: Props) => {
  return (
    <>
      {data.map((item) => (
        <React.Fragment key={item.id}>
          {activeItem?.id === item.id ? (
            <TodoItemEdit item={item} onUpdateItem={onUpdateItem} />
          ) : (
            <TodoItem
              item={item}
              deleteItem={deleteItem}
              onSelectItem={onSelectItem}
            />
          )}

          <br />
        </React.Fragment>
      ))}
    </>
  );
};
