import { useEffect, useState } from "react";
import { Header } from "../header/header.component";
import { Footer } from "../footer/footer.component";
import { TodoList } from "../todo-list/todo-list.component";
import { ItemProps } from "../../types/todo-item";

type StateProps = {
  tasks: Array<ItemProps>;
  activeItem: ItemProps | null;
  loading: boolean;
};

export const TodoContainer = () => {
  const [data, setData] = useState<StateProps>({
    tasks: [],
    activeItem: null,
    loading: false,
  });

  return (
    <>
      <Header />
      <TodoList />
      <Footer />
    </>
  );
};
