import { styled } from "styled-components";
import { NEUTRAL_COLORS, RED_COLORS } from "../style_variables/vars";
export const Toggler_Wrapper = styled.div<TogglerBtnProps>`
  width: 40px;
  height: 22px;
  background-color: white;
  border-radius: 100px;
  position: relative;
  cursor: pointer;
  caret-color: transparent;
  background-color: ${(props) =>
    props.isActive ? RED_COLORS.RED_400 : NEUTRAL_COLORS.NEUTRAL_300};
`;

interface TogglerBtnProps {
  isActive: boolean;
}

export const Toggler_BTN = styled.div<TogglerBtnProps>`
  position: absolute;
  width: 55%;
  height: 100%;
  border-radius: 100%;
  left: ${(props) => (props.isActive ? "17px" : "1.2px")};
  transition: left 0.2s ease;
  background-color: ${(props) => props.theme.toggler_btn_bg};
`;
