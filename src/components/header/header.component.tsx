import React from "react";
import { Wrapper, Calendar } from "./header.styles";

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
        <em>{currentMonth}</em>
        {today.getDay()}
      </Calendar>
      <h3>Today ({dataLength})</h3>
    </Wrapper>
  );
};
