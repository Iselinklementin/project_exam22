import styled from "styled-components";

export const StyledAddBtn = styled.a`
  background: ${(props) => props.theme.primaryColour};
  padding: 8px 8px 5px 10px;
  cursor: pointer;
  border-color: transparent;

  &:hover {
    background: ${(props) => props.theme.secondaryColour};
  }
`;
