import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial-state";
// import { staticData } from "../data/items";
import { ItemProps, ItemStatus } from "../types/todo-item";
// import { initialState } from "../reducer/initial-state";

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    load: (state, action: PayloadAction<ItemProps[]>) => {
      return {
        ...state,
        data: action.payload,
      };
    },
    add: (state, action: PayloadAction<ItemProps>) => {
      // setData({ ...data, tasks: newData });
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    },
    remove: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      console.log(payload);
      const newData: ItemProps[] = state.data.filter((item) => {
        return item.id !== payload;
      });
      // setData({ ...data, tasks: newData });
      return {
        ...state,
        data: newData,
      };
    },
    select: (state, action: PayloadAction<number>) => {
      const { payload } = action;
      const currentItemIndex = state.data.findIndex(
        (item) => item.id === payload
      );
      return {
        ...state,
        activeItem: state.data[currentItemIndex],
      };
    },
    update: (
      state,
      action: PayloadAction<{ id: number; dataUpdated: Partial<ItemProps> }>
    ) => {
      const { payload } = action;
      const updateData: ItemProps[] = state.data.map((tarea) =>
        tarea.id === payload.id ? { ...tarea, ...payload.dataUpdated } : tarea
      );

      // setData({ ...data, tasks: updateData, activeItem: null });
      return {
        ...state,
        data: updateData,
        activeItem: null,
      };
    },
  },
});

//exporta el reducer
export default todoSlice.reducer;

//export actions
export const todoActions = todoSlice.actions;
