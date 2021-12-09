import styled from "styled-components";

const StyledCard = styled.div`
  background: lightcoral;
  color: #331b1b;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  min-height: 80px;
  font-size: 1.5rem;

  &:hover {
    opacity: 0.8;
  }
`;

export default StyledCard;
