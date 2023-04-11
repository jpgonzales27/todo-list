import { staticData } from "../data/items";
import { ItemProps, ItemStatus } from "../types/todo-item";
import { actions } from "./actions";
import { Types } from "./actions";
import { StateProps } from "./initial-state";
/**
 * Este reducer manejara la logica de la aplicacion
 */
export const reducer = (state: StateProps, action: any) => {
  switch (action.type) {
    case Types.Load: {
      // case actions.LOAD_TODO_ITEMS: {
      return {
        ...state,
        data: staticData,
      };
    }
    case Types.Add: {
      // case actions.ADD_NEW_TODO_ITEM: {
      const newItem: ItemProps = {
        id: state.data.length + 1,
        description: "New Item",
        status: ItemStatus.IN_PROGRESS,
      };
      return {
        ...state,
        data: [...state.data, newItem],
      };
    }
    case Types.Update: {
      const { payload } = action;
      const currentItemIndex = state.data.findIndex(
        (item) => item.id === payload.id
      );
      return {
        ...state,
        data: [
          ...state.data.slice(0, currentItemIndex),
          { ...state.data[currentItemIndex], ...payload.itemData },
          ...state.data.slice(currentItemIndex + 1),
        ],
        activeItem: null,
      };
    }
    case Types.Select: {
      const { payload } = action;
      const currentItemIndex = state.data.findIndex(
        (item) => item.id === payload.id
      );
      return {
        ...state,
        activeItem: state.data[currentItemIndex],
      };
    }
    default:
      return state;
  }
};
