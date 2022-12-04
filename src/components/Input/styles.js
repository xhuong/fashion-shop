import styled from "styled-components";

export const StyledInput = styled.div`
  width: 100%;
  max-width: 100%;

  label {
  }

  .ant-form-item {
    margin-bottom: unset;
  }

  & .ant-input {
    padding: 11px 16px !important;
    font-size: 1.6rem;
    margin-bottom: 12.5px;
  }

  & .ant-input:focus {
    border-color: #d9d9d9;
    box-shadow: unset;
  }

  & .ant-input:hover {
    border-color: #d9d9d9;
    box-shadow: unset;
  }
`;
