export enum ItemStatus {
  IN_PROGRESS = "inProgress",
  DONE = "DONE",
}

export type ItemProps = {
  id: number;
  description: string;
  status: ItemStatus;
};
