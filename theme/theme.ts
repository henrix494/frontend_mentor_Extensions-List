import { createGlobalStyle, type DefaultTheme } from "styled-components";
import { NEUTRAL_COLORS, RED_COLORS } from "../style_variables/vars";
declare module "styled-components" {
  export interface DefaultTheme {
    body: string;
    text: string;
    card_bg: string;
    card_border: string;
    btn_bg: string;
    toggler_bg: string;
    toggler_btn_bg: string;
  }
}

export const GlobalStyles = createGlobalStyle`
  html {
    background-image: ${({ theme }) => {
      return `${theme.body}`;
    }};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    background-attachment: fixed;
  }
`;
export const lightTheme: DefaultTheme = {
  body: "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)",
  text: NEUTRAL_COLORS.NEUTRAL_800,
  card_border: NEUTRAL_COLORS.NEUTRAL_200,
  card_bg: NEUTRAL_COLORS.NEUTRAL_0,
  btn_bg: NEUTRAL_COLORS.NEUTRAL_0,
  toggler_bg: RED_COLORS.RED_400,
  toggler_btn_bg: NEUTRAL_COLORS.NEUTRAL_0,
};
export const darkTheme: DefaultTheme = {
  text: "#f1f1f1",
  body: " linear-gradient(180deg, #040918 0%, #091540 100%)",
  card_border: NEUTRAL_COLORS.NEUTRAL_300,
  card_bg: NEUTRAL_COLORS.NEUTRAL_700,
  btn_bg: NEUTRAL_COLORS.NEUTRAL_700,
  toggler_bg: RED_COLORS.RED_400,
  toggler_btn_bg: NEUTRAL_COLORS.NEUTRAL_0,
};
