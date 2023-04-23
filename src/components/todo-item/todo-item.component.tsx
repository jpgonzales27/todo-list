import React, { useContext } from "react";
import { ItemProps, ItemStatus } from "../../types/todo-item";
import { TodoItemStatus } from "../todo-item-status/todo-item-status.component";
import { TodoDescription, Wrapper, DeleteTodo } from "./todo-item.styles";
import { AppContext } from "../../context/app-context";
import { Types } from "../../reducer/actions";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../slices/todoSlice";
// import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  item: ItemProps;
  // deleteItem: (id: number) => void;
};

export const TodoItem = ({ item }: Props) => {
  const { id, description, status } = item;
  // const { dispatch } = useContext(AppContext);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <TodoItemStatus status={status} id={id} />
      &nbsp;
      <TodoDescription
        style={{
          textDecoration: status === ItemStatus.DONE ? "line-through" : "",
        }}
        // onClick={() => onSelectItem(item)}
        // onClick={() =>
        //   dispatch({
        //     type: Types.Select,
        //     payload: {
        //       id: item.id,
        //     },
        //   })
        // }
        onClick={() => dispatch(todoActions.select(item.id))}
      >
        {description}
      </TodoDescription>
      &nbsp;
      <span>
        {/* <DeleteTodo
          className="showButton"
          onClick={() =>
            dispatch({
              type: Types.Delete,
              payload: {
                id: item.id,
              },
            })
          }
        > */}
        <DeleteTodo
          className="showButton"
          onClick={() => dispatch(todoActions.remove(item.id))}
        >
          x
        </DeleteTodo>
      </span>
    </Wrapper>
  );
};
