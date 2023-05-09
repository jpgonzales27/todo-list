import { Logout } from "../logout/Logout.component";
import { Wrapper, Calendar, Title } from "./header.styles";
import { useSelector } from "react-redux";

export const Header = () => {
  const data = useSelector((state: any) => state.todo.data);
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
      <Title>Today ({data.length})</Title>
      <Logout />
    </Wrapper>
  );
};
