import styled from "styled-components";

export const StyledTimePicker = styled.div`
  .react-datepicker-wrapper {
    input[type="text"] {
      border: solid thin grey;
      padding-left: 20px;
    }
  }

  .react-datepicker,
  .react-datepicker--time-only {
    border: none;
  }

  .react-datepicker-ignore-onclickoutside:focus-visible {
    border: ${(props) => props.theme.primaryColour} thin solid;
    outline-color: ${(props) => props.theme.primaryColour};
  }

  .react-datepicker-popper {
    border: solid thin grey;
  }

  .react-datepicker,
  .react-datepicker--time-only {
    font-family: ${(props) => props.theme.primaryFont};
  }

  .react-datepicker__time-container {
    width: 188px;
  }

  .react-datepicker__header,
  .react-datepicker__header--time,
  .react-datepicker__header--time--only {
    background-color: ${(props) => props.theme.primaryColour};

    .react-datepicker-time__header {
      color: ${(props) => props.theme.light};
    }
  }

  li.react-datepicker__time-list-item--selected {
    background: ${(props) => props.theme.primaryColour} !important;
  }

  .react-datepicker__time {
    .react-datepicker__time-box {
      width: 100%;
    }
  }

  .react-datepicker__time-list-item--selected {
  }
`;
