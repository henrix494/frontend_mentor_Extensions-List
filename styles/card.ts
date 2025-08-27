import styled from "styled-components";
export const Card = styled.div`
  background-color: ${({ theme }) => theme.card_bg};
  height: 170px;
  border-radius: 10px;
  border: 0.6px solid ${({ theme }) => theme.card_border};
  display: flex;
  flex-direction: column;
`;
