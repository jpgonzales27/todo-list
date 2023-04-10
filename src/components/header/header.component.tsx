import React, { useContext } from "react";
import { AppContext } from "../../context/app-context";

// type Props = {
//   dataLength: number;
// };

export const Header = () => {
  const { state } = useContext(AppContext);
  console.log(state);
  console.log(state.data);
  return <h3>Header ({state.data.length})</h3>;
};
