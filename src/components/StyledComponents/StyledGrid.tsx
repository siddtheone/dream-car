import styled from "styled-components";

export const StyledGrid = styled.div`
  display: grid;
  grid-gap: 16px;
  padding: 16px 0;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
