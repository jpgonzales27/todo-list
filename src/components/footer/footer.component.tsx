import React, { useContext } from "react";
import { AddIcon, AddText, Wrapper } from "./footer.styles";
import { Types, actions } from "../../reducer/actions";
import { AppContext } from "../../context/app-context";
import { useDispatch } from "react-redux";
import { todoActions } from "../../slices/todoSlice";
import { useAddTodoMutation } from "../../api/api";
import { ItemStatus } from "../../types/todo-item";
import { normalizeTodoData } from "../../utils/normailize-todo";

export const Footer = () => {
  // const { dispatch } = useContext(AppContext);

  const dispatch = useDispatch();
  const [addTodoMutation] = useAddTodoMutation();

  const handleClick = async () => {
    try {
      const response = await addTodoMutation({
        description: "NUEVO ITEM",
        status: ItemStatus.IN_PROGRESS,
      });
      dispatch(todoActions.add(normalizeTodoData([response.data])[0]));
    } catch (error: any) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  return (
    // <Wrapper onClick={() => dispatch({ type: Types.Add })}>
    <Wrapper onClick={handleClick}>
      <AddIcon />
      <AddText>Add new Item</AddText>
    </Wrapper>
  );
};
