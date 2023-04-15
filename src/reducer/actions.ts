import { ItemProps } from "../types/todo-item";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Load = "LOAD_TODO_ITEMS",
  Add = "ADD_NEW_TODO_ITEM",
  Update = "UPDATE_TODO_ITEM",
  Select = "SELECT_TODO_ITEM",
  Delete = "DELETE_TODO_ITEM",
}

export type ItemPayload = {
  [Types.Load]: undefined;
  [Types.Add]: undefined;
  [Types.Update]: { id: number; itemData: Partial<ItemProps> };
  [Types.Select]: { id: number };
  [Types.Delete]: { id: number };
};

export type ItemActions = ActionMap<ItemPayload>[keyof ActionMap<ItemPayload>];

export const actions = {
  LOAD_TODO_ITEMS: "LOAD_TODO_ITEMS",
  ADD_NEW_TODO_ITEM: "ADD_NEW_TODO_ITEM",
  UPDATE_TODO_ITEM: "UPDATE_TODO_ITEM",
};
