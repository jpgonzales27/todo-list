import styled from "@emotion/styled";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const Wrapper = styled.div`
  margin-top: 8px;
  padding: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const AddIcon = styled(AddCircleOutlineIcon)`
  color: #3d82eb;
  widht: 20px;
  height: 20px;
  margin-right: 16px;
`;

export const AddText = styled.span`
  color: #3d82eb;
  font-size: 20px;
`;
