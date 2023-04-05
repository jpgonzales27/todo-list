import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: 8px;
  padding: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Calendar = styled.p`
  width: 50px;
  height: 40px;
  border-width: 1px;
  border-style: solid;
  border-color: #3d82eb;
  border-radius: 10px;
  text-align: center;

  em {
    display: block;
    color: white;
    background: #3d82eb;
    border-radius: 10px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
`;
