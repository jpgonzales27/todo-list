import React from "react";
import { Wrapper, Calendar, Title } from "./header.styles";

type Props = {
  dataLength: number;
};

export const Header = ({ dataLength }: Props) => {
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
      <Title>Today ({dataLength})</Title>
    </Wrapper>
  );
};
