import { CardTextCSS } from "components/StyledComponents";
import styled from "styled-components";

export const StyledCard = styled.div<{ selected?: boolean }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 8px;
  ${CardTextCSS};
  cursor: pointer;
  outline: ${(props) => (props.selected ? `red solid 5px` : "none")};
`;

export default StyledCard;
