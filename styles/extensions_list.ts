import { styled } from "styled-components";
export const Extensions_list = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Extensions_list_title = styled.h2`
  font-weight: 900;
  font-size: 2rem;
`;
