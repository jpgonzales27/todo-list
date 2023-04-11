import React, { useContext, useEffect } from "react";
import { ItemProps } from "../../types/todo-item";
import { TodoItem } from "../todo-item/todo-item.component";
import { TodoItemEdit } from "../todo-item-edit/todo-item-edit";
import { AppContext } from "../../context/app-context";
import { Types, actions } from "../../reducer/actions";

export type Props = {
  activeItem: ItemProps | null;
  deleteItem: (id: number) => void;
  onSelectItem: (item: ItemProps) => void;
  onUpdateItem: (id: number, itemData: Partial<ItemProps>) => void;
};

export const TodoList = ({
  deleteItem,
  activeItem,
  onSelectItem,
  onUpdateItem,
}: Props) => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: Types.Load });
  }, []);

  return (
    <>
      {state?.data.map((item: ItemProps) => (
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
