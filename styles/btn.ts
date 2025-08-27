import { styled } from "styled-components";
import { RED_COLORS } from "../style_variables/vars";
export const Btn = styled.button`
  padding: 6px 10px;
  border-radius: 300px;
  color: ${({ theme }) => theme.text};
  border: 0.6px solid ${({ theme }) => theme.card_border};
  font-size: 12px;
  background-color: ${({ theme }) => theme.btn_bg};
  cursor: pointer;
  &:hover {
    border: 1px solid ${RED_COLORS.RED_400};
  }
`;
