import React, { useContext } from "react";
import { AddIcon, AddText, Wrapper } from "./footer.styles";
import { Types, actions } from "../../reducer/actions";
import { AppContext } from "../../context/app-context";

export const Footer = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <Wrapper onClick={() => dispatch({ type: Types.Add })}>
      <AddIcon />
      <AddText>Add new Item</AddText>
    </Wrapper>
  );
};
