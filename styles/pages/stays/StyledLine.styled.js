import styled from "styled-components";

// samme i filter css, bare med position absolute

export const StyledLine = styled.div`
  border: ${(props) => props.theme.primaryColour} 1px solid;
  width: 40px;
  height: 1px;
  bottom: 0;
`;
