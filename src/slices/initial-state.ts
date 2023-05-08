import { ItemProps } from "../types/todo-item";

export type StateProps = {
  data: ItemProps[];
  activeItem: ItemProps | null;
  loading: boolean;
  addingItem: boolean;
  deletetingItem: boolean;
};

export const initialState: StateProps = {
  data: [],
  activeItem: null,
  loading: false,
  addingItem: false,
  deletetingItem: false,
};
