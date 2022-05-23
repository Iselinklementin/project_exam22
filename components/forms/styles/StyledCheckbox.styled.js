import styled from "styled-components";

export const StyledCheckbox = styled.div`
  .form-check-input:checked {
    background-color: #fc5156;
    border-color: #fc5156;
  }
  input[type="checkbox"] {
    height: 20px;
    width: 20px;
    :focus {
      border-color: #fc5156;
      box-shadow: 0 0 0 0.25rem rgb(252 81 86 / 25%);
    }
  }

  .form-check {
    margin: 1rem 0 1rem 0;
  }

  label {
    margin-left: 1rem;
  }
`;
