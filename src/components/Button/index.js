import { Button as AntButton } from "antd";
import styled from "styled-components";

const Button = styled(AntButton)`
  display: flex;
  align-items: center;
  font-weight: 500;
  column-gap: 10px;
  font-size: 1.4rem;
  line-height: 1.25;
  text-transform: capitalize;
  transition: all 0.4s;
  height: 46px;
  justify-content: center;

  ${(props) =>
    props.type === "primary" &&
    `
  border: 1px solid #000000;
  color: #000000;
  background-color: #ffffff;

  &:hover,
  &:focus{
    color: #ffffff;
    background-color: #000000;
    border-color: #000000;
  }
  `}

  ${(props) =>
    props.type === "secondary" &&
    `
  border: none;
  color: #ffffff;
  background-color: #151515;
  border-radius: unset;

  &:hover,
  &:focus{
    color: #ffffff;
    background-color: #151515;
  }`}

  ${(props) =>
    props.size === "sm-btn" &&
    `
  width: 146px;
  `}

  ${(props) =>
    props.size === "md-btn" &&
    `
  width: 166px;
  `}

  ${(props) =>
    props.size === "full-btn" &&
    `
  width: 100%;
  `}
`;

export default Button;
