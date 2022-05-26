import styled from "styled-components";
import Select from "react-select";
import { mediaQ } from "../../../styles/global/ThemeConfig";

export const StyledSelect = styled(Select)`
  width: 100%;
  border-radius: 6px;

  :focus-visible {
    outline-color: #fc5156;
  }

  input:focus {
    box-shadow: none;
  }

  .react-select__placeholder {
    height: 30px;
    font-family: ${(props) => props.theme.primaryFont};
    color: ${(props) => props.theme.body};
    opacity: 0.8;
    font-size: 14px;

    @media ${mediaQ.desktop_large} {
      font-size: 16px;
    }
  }

  .react-select__input-container {
    height: 50px;
  }

  .react-select__value-container:focus-visible,
  .react-select__indicators,
  .react-select__control--is-focused,
  .react-select__control--menu-is-open,
  .react-.react-select__value-container,
  .react-select__control {
    height: 50px;
  }

  .react-select__single-value {
    height: 22px;
    line-height: 10px;
    overflow: unset;
  }

  .react-select__control--is-focused,
  .react-select__control--menu-is-open {
    border-color: #fc5156;
    box-shadow: 0 0 0 1px rgb(252 81 86 / 25%);
  }

  .react-select__menu {
    .react-select__option--is-selected {
      background: #fc5156;
    }

    .react-select__option--is-focused {
      background: #fdc2c2;
      color: ${(props) => props.theme.body};
    }
  }
`;
