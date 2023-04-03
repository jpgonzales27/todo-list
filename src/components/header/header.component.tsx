import React from "react";

type Props = {
  dataLength: number;
};

export const Header = ({ dataLength }: Props) => {
  return <h3>Header ({dataLength})</h3>;
};
