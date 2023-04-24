import { staticData } from "../data/items";
import { ItemProps } from "../types/todo-item";

export type StateProps = {
  data: ItemProps[];
  activeItem: ItemProps | null;
  loading: boolean;
};

export const initialState: StateProps = {
  data: [],
  activeItem: null,
  loading: false,
};
