import React, { useContext } from "react";
import { AddIcon, AddText, Wrapper } from "./footer.styles";
import { Types, actions } from "../../reducer/actions";
import { AppContext } from "../../context/app-context";
import { useDispatch } from "react-redux";
import { todoActions } from "../../slices/todoSlice";

export const Footer = () => {
  // const { dispatch } = useContext(AppContext);

  const dispatch = useDispatch();

  return (
    // <Wrapper onClick={() => dispatch({ type: Types.Add })}>
    <Wrapper onClick={() => dispatch(todoActions.add())}>
      <AddIcon />
      <AddText>Add new Item</AddText>
    </Wrapper>
  );
};
