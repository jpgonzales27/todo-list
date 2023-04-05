import React from "react";
import { ItemProps } from "../../types/todo-item";
// import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { DoneStatus, InProgressStatus } from "./todo-item-status.styles";

type Props = {
  status: ItemProps["status"];
};

export const TodoItemStatus = ({ status }: Props) => {
  return (
    <span>
      {status === "inProgress" ? <InProgressStatus /> : <DoneStatus />}
      {/* {status === "inProgress" ? (
        <RadioButtonUncheckedIcon />
      ) : (
        <CheckCircleIcon />
      )} */}
    </span>
  );
};
