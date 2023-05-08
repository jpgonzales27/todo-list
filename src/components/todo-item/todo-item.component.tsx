import { ItemProps, ItemStatus } from "../../types/todo-item";
import { TodoItemStatus } from "../todo-item-status/todo-item-status.component";
import { TodoDescription, Wrapper, DeleteTodo } from "./todo-item.styles";
import { useDispatch } from "react-redux";
import { deleteTodo, todoActions } from "../../slices/todoSlice";
import { AppDispatch } from "../../store/store";

type Props = {
  item: ItemProps;
};

export const TodoItem = ({ item }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { id, description, status } = item;

  const handleClick = async () => {
    try {
      dispatch(deleteTodo(id));
    } catch (error: any) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const handleSelectItem = async () => {
    dispatch(todoActions.selectItem(item));
  };

  return (
    <Wrapper>
      <TodoItemStatus status={status} id={id} description={description} />
      &nbsp;
      <TodoDescription
        style={{
          textDecoration: status === ItemStatus.DONE ? "line-through" : "",
        }}
        onClick={handleSelectItem}
      >
        {description}
      </TodoDescription>
      &nbsp;
      <span>
        <DeleteTodo className="showButton" onClick={handleClick}>
          x
        </DeleteTodo>
      </span>
    </Wrapper>
  );
};
