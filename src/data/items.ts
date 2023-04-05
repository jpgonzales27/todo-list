import { ItemProps, ItemStatus } from "../types/todo-item";

export const staticData: ItemProps[] = [
  {
    id: 1,
    description: "Item 1",
    status: ItemStatus.IN_PROGRESS,
  },
  {
    id: 2,
    description: "Item 2",
    status: ItemStatus.DONE,
  },
  {
    id: 3,
    description: "Item 3",
    status: ItemStatus.IN_PROGRESS,
  },
];
