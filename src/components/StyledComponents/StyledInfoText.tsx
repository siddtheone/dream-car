import styled from "styled-components";
import { ERROR_COLOR } from "./sharedStyles";

export const StyledInfoText = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

export const StyledErrorText = styled(StyledInfoText)`
  color: ${ERROR_COLOR};
`;

export const Text = styled.p<{ primary?: boolean }>`
  font-size: 1.2rem;
  font-weight: ${(props) => (props.primary ? "bold" : "normal")};
  padding-bottom: 8px;
`;
