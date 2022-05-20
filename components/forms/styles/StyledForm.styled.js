import { Alert, Form } from "react-bootstrap";
import styled from "styled-components";
// noe av denne koden er 2 ganger
// også i searchfunksjonen

export const StyledForm = styled(Form)`
  button:disabled,
  .btn-primary.disabled,
  .btn-primary:disabled {
    background: ${(props) => props.theme.primaryColour};
    border-color: ${(props) => props.theme.primaryColour};
  }

  .form-control:disabled {
    background: ${(props) => props.theme.light};
  }

  input[type="text"],
  input[type="email"],
  input[type="phone"],
  input[type="password"] {
    border-radius: 6px;
    height: 50px;
    background: white;

    :focus {
      border-color: #fc5156;
      box-shadow: 0 0 0 0.1rem rgb(252 81 86 / 25%);
    }
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset !important;
    box-shadow: 0 0 0 1000px white inset;
  }
  input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 1000px white inset !important;
    box-shadow: 0 0 0 1000px white inset;
  }

  input::placeholder {
    font-size: 14px;
    color: ${(props) => props.theme.body};
    opacity: 0.8;
  }

  h3 {
    font-size: 16px;
  }

  .select {
    width: 100%;
    border-radius: 6px;

    :focus-visible {
      outline-color: #fc5156;
    }

    input:focus {
      box-shadow: none;
    }

    /* .react-select__value-container:focus-visible,
    .react-select__indicators,
    .react-select__control--is-focused,
    .react-select__control--menu-is-open,
    .react-.react-select__value-container,
    .react-select__control {
      height: 50px;
    } */

    /* .react-select__single-value {
      height: 22px;
      line-height: 10px;
      overflow: unset;
    } */

    /* .react-select__control--is-focused,
    .react-select__control--menu-is-open {
      border-color: #fc5156;
      box-shadow: 0 0 0 1px rgb(252 81 86 / 25%);
    } */

    /* .react-select__menu {
      .react-select__option--is-selected {
        background: #fc5156;
      }

      .react-select__option--is-focused {
        background: #fdc2c2;
        color: ${(props) => props.theme.body};
      }
    } */
  }

  .text-area-container {
    position: relative;
    display: flex;
    align-items: flex-start;
    font-family: inherit;

    .form-control::placeholder {
      font-size: 14px;
      color: ${(props) => props.theme.body};
      opacity: 0.8;
    }

    .counter {
      position: absolute;
      right: 10px;
      bottom: -30px;
      color: grey;
      font-size: 14px;
    }
  }
`;

export const StyledFeedbackContainer = styled.div`
  position: relative;

  .alert-primary {
    background-color: transparent;
    color: ${(props) => props.theme.error};
    padding: 0 0 0 2.9rem;
    border: none;
    font-size: 14px;
  }

  .warning-icon {
    position: absolute;
    right: 15px;
    top: -2.7rem;
  }

  .text-area-icon {
    top: -10.5rem;
  }
`;

export const WrongInput = styled(Alert)`
  background-color: transparent;
  color: ${(props) => props.theme.error};
  border: none;
`;
