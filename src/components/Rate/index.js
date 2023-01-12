import { Rate as RateAnt } from "antd";
import styled from "styled-components";

const StyledRate = styled.div`
  &.ant-rate {
    font-size: 1.2rem;
  }
`;

const Rate = ({ disabled, defaultValue, value, ...props }) => {
  return (
    <StyledRate>
      <RateAnt defaultValue={defaultValue} disabled={disabled} value={value} />
    </StyledRate>
  );
};

export default Rate;
