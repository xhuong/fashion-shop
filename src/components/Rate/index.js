import { Rate as RateAnt } from "antd";
import styled from "styled-components";

const StyledRate = styled.div`
  &.ant-rate {
    font-size: 1.2rem;
  }
`;

const Rate = ({ disable, defaultValue, ...props }) => {
  return (
    <StyledRate>
      <RateAnt defaultValue={defaultValue} disabled={disable} />
    </StyledRate>
  );
};

export default Rate;
