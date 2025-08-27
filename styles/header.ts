import { styled } from "styled-components";
export const Header = styled.header`
  background-color: ${({ theme }) => theme.btn_bg};
  height: 50px;
  border-radius: 10px;
  font-weight: bold;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: -2px 5px 29px -17px #000000;
`;
