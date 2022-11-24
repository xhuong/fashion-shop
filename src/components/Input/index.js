import { Input as InputAntd } from "antd";
import styled from "styled-components";

const Input = styled(InputAntd)`
  outline: none;
  padding: 11px 20px;

  font-size: 1.6rem;
  :focus {
    border-color: #000000;
    box-shadow: unset;
  }
  :hover {
    border-color: #000000;
  }
`;

export default Input;
