import { Link } from "react-router-dom";
import styled from "styled-components";
import { CardTextCSS, PRIMARY_BG_COLOR, PRIMARY_COLOR } from ".";
import { FlexBoxCSS } from "./sharedStyles";

export const StyledLink = styled(Link)`
  ${FlexBoxCSS};
  text-decoration: none;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  font-size: 2rem;
  ${CardTextCSS}

  &:hover {
    color: ${PRIMARY_BG_COLOR};
    background: ${PRIMARY_COLOR};
  }
`;

export default StyledLink;
