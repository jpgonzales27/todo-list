import { ItemPropsMongo } from "../types/todo-item";

export const normalizeTodoData = (data: ItemPropsMongo[]) => data.map(item => ({ ...item, id: item._id }));
