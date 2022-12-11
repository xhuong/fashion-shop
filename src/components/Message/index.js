import styled from "styled-components";

const Message = styled.p`
  width: 100%;
  max-width: 100%;
  padding: 11px 16px;
  border-radius: 8px;
  margin-bottom: 12.5px;
  font-size: 1.6rem;

  &.infor {
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;
  }

  &.success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }

  &.danger {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }

  &.warning {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  }
`;

export default Message;
