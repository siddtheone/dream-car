import styled from "styled-components";

export const Row = styled.div`
  padding-bottom: 8px;
`;

export const Title = styled.strong`
  font-size: 1.2rem;
  &:after {
    content: " ";
    padding-right: 8px;
  }
`;

export const Value = styled.span`
  font-size: 1.2rem;
`;

export const Flex = styled.div`
  display: flex;
  max-width: min(90%, 1200px);
  margin: auto;
  padding: 16px 0;
`;

export const Choice = styled.button`
  padding: 16px 8px;
  background: none;
  border-radius: 10px;
  min-width: 100px;
  position: relative;
  cursor: pointer;
  & + & {
    margin-left: 8px;
  }
  &:after {
    content: "X";
    position: absolute;
    width: 20px;
    height: 20px;
    top: -10px;
    right: -10px;
    background: white;
  }
`;

export const InfoText = styled.div`
  text-align: center;
  font-size: 1.3rem;
`;

export const ErrorText = styled(InfoText)`
  color: red;
`;
