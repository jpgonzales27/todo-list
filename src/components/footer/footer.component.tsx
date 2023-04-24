import React, { useContext } from "react";
import { AddIcon, AddText, Wrapper } from "./footer.styles";
import { Types, actions } from "../../reducer/actions";
import { AppContext } from "../../context/app-context";
import { useDispatch, useSelector } from "react-redux";
import { postTodo, todoActions } from "../../slices/todoSlice";
// import { useAddTodoMutation } from "../../api/api";
import { ItemStatus } from "../../types/todo-item";
import { normalizeTodoData } from "../../utils/normailize-todo";
import { Box, Skeleton, Typography } from "@mui/material";
import { AppDispatch, RootState } from "../../store/store";

export const Footer = () => {
  // const { dispatch } = useContext(AppContext);

  const dispatch = useDispatch<AppDispatch>();
  // const [addTodoMutation] = useAddTodoMutation();
  const { addingItem } = useSelector((state: RootState) => state.todo);

  // const handleClick = async () => {
  //   try {
  //     const response = await addTodoMutation({
  //       description: "NUEVO ITEM",
  //       status: ItemStatus.IN_PROGRESS,
  //     });
  //     dispatch(todoActions.add(normalizeTodoData([response.data])[0]));
  //   } catch (error: any) {
  //     if (error instanceof Error) {
  //       console.log(error.message);
  //     }
  //   }
  // };

  const handleClick = async () => {
    try {
      dispatch(
        postTodo({ description: "new Item", status: ItemStatus.IN_PROGRESS })
      );
    } catch (error: any) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  return (
    // <Wrapper onClick={() => dispatch({ type: Types.Add })}>
    <>
      {addingItem && (
        <Box display="flex" alignItems="center" paddingX={1}>
          <Box width={16}>
            <Typography variant="overline">
              <Skeleton variant="circular" />
            </Typography>
          </Box>
          <Box width="100%" paddingX={2.5}>
            <Typography variant="caption">
              <Skeleton />
            </Typography>
          </Box>
        </Box>
      )}
      <Wrapper onClick={handleClick} disabled={addingItem}>
        <AddIcon />
        <AddText>Add new Item</AddText>
      </Wrapper>
    </>
  );
};
