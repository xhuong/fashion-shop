import { Button } from "antd";
import styled from "styled-components";

const PrimaryButton = styled(Button)`
  display: flex;
  align-items: center;
  border: 1px solid #000000;
  color: #000000;
  column-gap: 10px;
  font-size: 1.4rem;
  line-height: 1.25;

  &:hover,
  &:focus {
    color: #ffffff;
    background-color: #000000;
    border-color: #000000;
  }

  height: ${(props) => (props.middleButton ? "46px" : "")};
  padding: ${(props) => (props.middleButton ? "15px 30px" : "")};
`;

export default PrimaryButton;
