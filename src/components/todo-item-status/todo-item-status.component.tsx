import React, { useContext } from "react";
import { ItemProps, ItemStatus } from "../../types/todo-item";
import { DoneStatus, InProgressStatus } from "./todo-item-status.styles";
import { AppContext } from "../../context/app-context";
import { Types } from "../../reducer/actions";

type Props = {
  status: ItemProps["status"];
  id: number;
};

export const TodoItemStatus = ({ status, id }: Props) => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <span
      onClick={() =>
        dispatch({
          type: Types.Update,
          payload: {
            id: id,
            itemData: {
              status:
                status === ItemStatus.DONE
                  ? ItemStatus.IN_PROGRESS
                  : ItemStatus.DONE,
            },
          },
        })
      }
    >
      {status === "inProgress" ? <InProgressStatus /> : <DoneStatus />}
    </span>
  );
};
