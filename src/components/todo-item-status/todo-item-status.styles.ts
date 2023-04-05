import styled from "@emotion/styled";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const InProgressStatus = styled(RadioButtonUncheckedIcon)`
  color: #cbcbcb;
  margin-right: 20px;
  width: 20px;
  height: 20px;
`;

export const DoneStatus = styled(CheckCircleIcon)`
  color: #4e4e4e;
  margin-right: 20px;
  width: 20px;
  height: 20px;
`;
