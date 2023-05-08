import { ItemProps, ItemStatus } from "../../types/todo-item";
import { DoneStatus, InProgressStatus } from "./todo-item-status.styles";
import { useDispatch } from "react-redux";
import { todoActions, updateTodo } from "../../slices/todoSlice";
import { AppDispatch } from "../../store/store";

type Props = {
  status: ItemProps["status"];
  id: string;
  description: string;
};

export const TodoItemStatus = ({ status, id, description }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <span
      onClick={() =>
        dispatch(
          updateTodo({
            id: id,
            description: description,
            status: status === ItemStatus.DONE ? ItemStatus.IN_PROGRESS : ItemStatus.DONE,
          })
        )
      }
    >
      {status === "inProgress" ? <InProgressStatus /> : <DoneStatus />}
    </span>
  );
};
