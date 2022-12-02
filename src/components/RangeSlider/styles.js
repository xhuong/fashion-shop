import styled from "styled-components";

export const StyledRangeSlider = styled.div`
  .ant-slider:hover .ant-slider-track {
    background-color: #000000;
  }
  & .ant-slider-handle {
    border-color: #000000;
  }
  .ant-slider-track {
    background-color: #000000;
  }
  .ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open) {
    border-color: #000000;
  }
  .ant-slider-handle:focus {
    box-shadow: 0 0 0 5px rgb(233 233 233 / 85%);
  }
`;
