import React, { useContext } from "react";
import { ItemProps, ItemStatus } from "../../types/todo-item";
import { TodoItemStatus } from "../todo-item-status/todo-item-status.component";
import { TodoDescription, Wrapper, DeleteTodo } from "./todo-item.styles";
import { AppContext } from "../../context/app-context";
import { Types } from "../../reducer/actions";
// import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  item: ItemProps;
  // deleteItem: (id: number) => void;
};

export const TodoItem = ({ item }: Props) => {
  const { id, description, status } = item;
  const { dispatch } = useContext(AppContext);

  return (
    <Wrapper>
      <TodoItemStatus status={status} />
      &nbsp;
      <TodoDescription
        style={{
          textDecoration: status === ItemStatus.DONE ? "line-through" : "",
        }}
        // onClick={() => onSelectItem(item)}
        onClick={() =>
          dispatch({
            type: Types.Select,
            payload: {
              id: item.id,
            },
          })
        }
      >
        {description}
      </TodoDescription>
      &nbsp;
      <span>
        <DeleteTodo
          className="showButton"
          onClick={() =>
            dispatch({
              type: Types.Delete,
              payload: {
                id: item.id,
              },
            })
          }
        >
          x
        </DeleteTodo>
      </span>
    </Wrapper>
  );
};
