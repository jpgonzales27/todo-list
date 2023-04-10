import React, { useContext } from "react";
import { AddIcon, AddText, Wrapper } from "./footer.styles";
import { actions } from "../../reducer/actions";
import { AppContext } from "../../context/app-context";

// type Props = {
//   addNewItem: () => void;
// };

export const Footer = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <Wrapper onClick={() => dispatch({ type: actions.ADD_NEW_TODO_ITEM })}>
      <AddIcon />
      <AddText>Add new Item</AddText>
    </Wrapper>
  );
};
