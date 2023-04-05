import React from "react";
import { AddIcon, AddText, Wrapper } from "./footer.styles";

type Props = {
  addNewItem: () => void;
};

export const Footer = ({ addNewItem }: Props) => {
  return (
    <Wrapper onClick={addNewItem}>
      <AddIcon />
      <AddText>Add new Item</AddText>
    </Wrapper>
  );
};
