import React, { useContext, useState } from "react";
import { ItemProps } from "../../types/todo-item";
import { CustomTextField, Wrapper } from "./todo-item-edit.styles";
import { TodoItemStatus } from "../todo-item-status/todo-item-status.component";
import { AppContext } from "../../context/app-context";
import { Types } from "../../reducer/actions";

type Props = {
  item: ItemProps;
};

export const TodoItemEdit = ({ item }: Props) => {
  const [value, setValue] = useState(item.description);
  const { dispatch } = useContext(AppContext);

  const handleUpdateItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("entro al formulario");
    // onUpdateItem(item.id, { description: value });
    dispatch({
      type: Types.Update,
      payload: {
        id: item.id,
        itemData: { description: value },
      },
    });
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
