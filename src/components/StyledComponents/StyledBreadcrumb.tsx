import styled from "styled-components";
import { PRIMARY_BG_COLOR } from ".";

export const StyledBreadcrumb = styled.div`
  display: flex;
  a {
    text-decoration: none;
    border: 1px solid ${PRIMARY_BG_COLOR};
    padding: 8px;
  }

  a + a {
    margin-left: 8px;
  }
`;

export default StyledBreadcrumb;
