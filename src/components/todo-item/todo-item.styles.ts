import styled from "@emotion/styled";
import DeleteIcon from "@mui/icons-material/Delete";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  &:hover {
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
  }

  &:hover .showButton {
    opacity: 0.5;
  }
`;

export const TodoDescription = styled.div`
  font-size: 16px;
`;

export const DeleteTodo = styled(DeleteIcon)`
  font-size: 16px;
  color: red;
  opacity: 0;

  /* &:hover {
    opacity: 0.5;
  } */
`;
