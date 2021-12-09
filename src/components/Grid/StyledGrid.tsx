import styled from "styled-components";

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding-top: 16px;
  padding-bottom: 16px;
  width: min(1200px, 90%);
  margin: 0 auto;
  grid-gap: 16px;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default StyledCard;
