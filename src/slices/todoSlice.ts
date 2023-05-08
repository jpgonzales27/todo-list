import { createAsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial-state";
// import { staticData } from "../data/items";
import { ItemProps, ItemPropsMongo, ItemStatus, responseUpdateProps } from "../types/todo-item";
import { API_BASE_URL } from "../api/api";
import { TODO_PREFIX, todosApi } from "../api/todos-api";
import { normalizeData, normalizeTodoData } from "../utils/normailize-todo";
// import { initialState } from "../reducer/initial-state";

// action types
// Document actions => procesada en los reducers, ejecutadas desde cualquier parte de la aplicacion
// Initial actions => iniciar un flujo de acciones, se lanzan desde los componentes, nunca son procesados en los reducers, debe iniciar otras acciones
// Event actions => son ejecutadas por otras acciones y se encargan de ejecutar otras funcione(s).

export const fetchTodosMio = createAsyncThunk(
  "todos/fetchTodosProcess",
  async (params: Partial<ItemProps>, thunkApi) => {
    /**
     * 1 set loading true
     * 2 fetch the data
     * 3 dispatch the action load
     * 4 set loading false
     */
    thunkApi.dispatch(todoActions.fetching(true));
    const response = await fetch(`${API_BASE_URL}${TODO_PREFIX}`);
    const data = await response.json();
    thunkApi.dispatch(normalizeTodos(data));
    // thunkApi.dispatch(todoActions.load(normalizeTodoData(data)));
    // thunkApi.dispatch(todoActions.fetching(false));
  }
);

export const fetchTodos = createAsyncThunk("todos/fetchTodosProcess", async (params: string, thunkApi) => {
  const response = await thunkApi.dispatch(todosApi.endpoints.getAllTodos.initiate(params));
  thunkApi.dispatch(normalizeTodos(response.data as ItemPropsMongo[]));
  return response;
});

export const postTodo = createAsyncThunk("todos/postTodoProcess", async (params: Partial<ItemProps>, thunkApi) => {
  thunkApi.dispatch(todoActions.addingItem(true));
  const response = await thunkApi.dispatch(todosApi.endpoints.addTodo.initiate(params));
  const responseData = response as { data: ItemPropsMongo };
  thunkApi.dispatch(todoActions.add(normalizeTodoData([responseData.data])[0]));
  return responseData;
});

export const deleteTodo = createAsyncThunk("todos/deleteTodosProcess", async (id: string, thunkApi) => {
  const response = await thunkApi.dispatch(todosApi.endpoints.deleteTodo.initiate(id));
  thunkApi.dispatch(todoActions.remove(id));
  return response;
});

export const updateTodo = createAsyncThunk("todos/updateProcess", async (params: ItemProps, thunkApi) => {
  console.log("PARAMS: ", params);
  thunkApi.dispatch(todoActions.remove(params.id));
  const response = await thunkApi.dispatch(todosApi.endpoints.updateTodo.initiate(params));
  const responseData = response as responseUpdateProps;
  if (responseData.data) {
    const dataUpdate = normalizeData(responseData.data) as ItemProps;
    thunkApi.dispatch(todoActions.add(normalizeData(responseData.data)));
  }
  return response;
});

export const createTodoMio = createAsyncThunk("todos/createTodo", async (data: Partial<ItemProps>, thunkApi) => {
  const response = await fetch(`${API_BASE_URL}${TODO_PREFIX}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const newData = await response.json();
  thunkApi.dispatch(todoActions.add(newData));
});

export const normalizeTodos = createAsyncThunk("todos/normalizeTodos", async (data: ItemPropsMongo[], thunkApi) => {
  const dataNormalized = normalizeTodoData(data);
  thunkApi.dispatch(todoActions.load(dataNormalized));
  return null;
});

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    fetching: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
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
    addingItem: (state, action: PayloadAction<boolean>) => {
      state.addingItem = action.payload;
    },
    deletetingItem: (state, action: PayloadAction<boolean>) => {
      state.deletetingItem = action.payload;
    },
    remove: (state, action: PayloadAction<string>) => {
      const selectItemIndex = state.data.findIndex((item) => item.id === action.payload);
      state.data.splice(selectItemIndex, 1);
    },
    selectItem: (state, action: PayloadAction<ItemProps | null>) => {
      state.activeItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(normalizeTodos.pending, (state, action) => {
      state.loading = false;
    });
    builder.addCase(postTodo.fulfilled, (state, action) => {
      state.addingItem = false;
    });
    builder.addCase(deleteTodo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(updateTodo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      state.loading = false;
    });
  },
});

//exporta el reducer
export default todoSlice.reducer;

//export actions
export const todoActions = todoSlice.actions;
