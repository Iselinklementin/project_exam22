import styled from "styled-components";
import { FormLabel } from "react-bootstrap";

export const StyledImageContainer = styled.div`
  position: relative;
  /* width: 210px; */
  width: 100%;
  height: 220px;

  .img-placeholder {
    background-color: ${(props) => props.theme.secondaryColour};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }
`;

export const UploadLabel = styled(FormLabel)`
  border: transparent;
  /* background-color: ${(props) => props.theme.secondaryColour}; */
  background: #472673;
  color: ${(props) => props.theme.light};
  /* width: 210px; */
  width: 100%;
  cursor: pointer;
  border-radius: 4px;
  margin: 1rem 0 1rem 0;
  text-align: center;
  text-transform: uppercase;
  padding: 10px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  :hover {
    background: ${(props) => props.theme.secondaryColour};
  }
`;
