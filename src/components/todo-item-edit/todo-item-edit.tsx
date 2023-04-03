import React, { useState } from "react";
import { ItemProps } from "../../types/todo-item";

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
    <div>
      <span>o</span>&nbsp;
      <form style={{ display: "inline" }} onSubmit={handleUpdateItem}>
        <input
          type="text"
          name="description"
          value={value}
          // onChange={handleChangeDescription}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};
