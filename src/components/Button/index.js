import { Button as PrimaryButton } from "antd";
import styled from "styled-components";

const Button = styled(PrimaryButton)`
  display: flex;
  align-items: center;
  font-weight: 500;
  border: ${(props) =>
    props.primary ? "1px solid #000000" : props.secondary ? "none" : ""};
  color: ${(props) =>
    props.primary ? "#000000" : props.secondary ? "#ffffff" : ""};
  background-color: ${(props) =>
    props.primary ? "#ffffff" : props.secondary ? "#151515" : ""};
  column-gap: 10px;
  font-size: 1.4rem;
  line-height: 1.25;
  border-radius: ${(props) => (props.secondary ? "unset" : "")};

  &:hover,
  &:focus {
    color: ${(props) =>
      props.primary ? "#ffffff" : props.secondary ? "#ffffff" : ""};
    background-color: ${(props) =>
      props.primary ? "#000000" : props.secondary ? "#151515" : ""};
    border-color: ${(props) => (props.primary ? "#000000" : "")};
  }

  text-transform: capitalize;
  transition: all 0.4s;
  height: 46px;

  width: ${(props) =>
    props.smButton
      ? "146px"
      : props.mdButton
      ? "166px"
      : props.widthfull
      ? "100%"
      : ""};

  justify-content: center;
`;

export default Button;
