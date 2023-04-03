import React from "react";

type Props = {
  addNewItem: () => void;
};

export const Footer = ({ addNewItem }: Props) => {
  return <button onClick={addNewItem}>+ Add new Item</button>;
};
