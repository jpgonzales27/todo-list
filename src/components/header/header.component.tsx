import { Wrapper, Calendar, Title } from "./header.styles";
import React, { useContext } from "react";
import { AppContext } from "../../context/app-context";

export const Header = () => {
  const { state } = useContext(AppContext);
  const date = new Date();
  const currentDay = date.toLocaleDateString("en-US", {
    day: "numeric",
  });
  const currentMonth2 = date.toLocaleDateString("en-US", {
    month: "short",
  });
  const currentMonth = new Intl.DateTimeFormat("en-EN", {
    month: "short",
  })
    .format(date)
    .toUpperCase();
  return (
    <Wrapper>
      <Calendar>
        <span>{currentMonth}</span>
        {currentDay}
      </Calendar>
      <Title>Today ({state?.data.length})</Title>
    </Wrapper>
  );
};
