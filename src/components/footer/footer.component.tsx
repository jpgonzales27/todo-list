import { AddIcon, AddText, Wrapper } from "./footer.styles";
import { useDispatch, useSelector } from "react-redux";
import { postTodo } from "../../slices/todoSlice";
import { ItemStatus } from "../../types/todo-item";
import { Box, Skeleton, Typography } from "@mui/material";
import { AppDispatch, RootState } from "../../store/store";

export const Footer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { addingItem } = useSelector((state: RootState) => state.todo);

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
