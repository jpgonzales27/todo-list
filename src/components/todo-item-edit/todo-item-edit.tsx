import React, { useState } from "react";
import { ItemProps } from "../../types/todo-item";
import { CustomTextField, Wrapper } from "./todo-item-edit.styles";
import { TodoItemStatus } from "../todo-item-status/todo-item-status.component";

type Props = {
  item: ItemProps;
  onUpdateItem: (id: number, itemData: Partial<ItemProps>) => void;
};

export const TodoItemEdit = ({ item, onUpdateItem }: Props) => {
  const [value, setValue] = useState(item.description);

  const handleUpdateItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("entro al formulario");
    onUpdateItem(item.id, { description: value });
  };

  return (
    <Wrapper>
      <TodoItemStatus status={item.status} />
      <form style={{ display: "inline" }} onSubmit={handleUpdateItem}>
        <CustomTextField
          id={`todo-item-${item.id}`}
          variant="outlined"
          size="small"
          autoFocus
          name="description"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          // onChange={handleChangeDescription}
          // type="text"
        />
      </form>
    </Wrapper>
  );
};
