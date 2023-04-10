import { Wrapper, Calendar, Title } from "./header.styles";
import React, { useContext } from "react";
import { AppContext } from "../../context/app-context";

export const Header = () => {
  const { state } = useContext(AppContext);
  const today = new Date();
  const currentMonth = new Intl.DateTimeFormat("en-EN", {
    month: "short",
  })
    .format(today)
    .toLocaleUpperCase();
  return (
    <Wrapper>
      <Calendar>
        <span>{currentMonth}</span>
        {today.getDay()}
      </Calendar>
      <Title>Today ({state?.data.length})</Title>
    </Wrapper>
  );
};
