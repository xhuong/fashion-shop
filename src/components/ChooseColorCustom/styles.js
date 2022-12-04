import styled from "styled-components";

export const StyledChooseColorCustom = styled.div`
  .ant-radio-inner {
    width: 28px;
    height: 28px;
  }

  .ant-radio-inner:after {
    width: 22px;
    height: 22px;
    transform: translate(-50%, -50%);
    margin-top: 0;
    margin-left: 0;
    opacity: 1;
  }

  /* ant radio darkgreen */

  .radio-darkgreen .ant-radio:hover .ant-radio-inner {
    border-color: #379788;
  }

  .radio-darkgreen .ant-radio-checked .ant-radio-inner {
    border-color: #379788;
    box-shadow: 0 0px 1px 2px #379788;
  }

  .radio-darkgreen .ant-radio-checked .ant-radio-inner:after {
    background-color: #379788;
  }

  .radio-darkgreen .ant-radio-inner:after {
    background-color: #379788;
  }

  /* ant radio darkblue  */
  .radio-darkblue .ant-radio:hover .ant-radio-inner {
    border-color: #6185c4;
  }

  .radio-darkblue .ant-radio-checked .ant-radio-inner {
    border-color: #6185c4;
    box-shadow: 0 0px 1px 2px #6185c4;
  }

  .radio-darkblue .ant-radio-checked .ant-radio-inner:after {
    background-color: #6185c4;
  }

  .radio-darkblue .ant-radio-inner:after {
    background-color: #6185c4;
  }

  /* ant radio orange  */
  .radio-orange .ant-radio:hover .ant-radio-inner {
    border-color: #e36947;
  }

  .radio-orange .ant-radio-checked .ant-radio-inner {
    border-color: #e36947;
    box-shadow: 0 0px 1px 2px #e36947;
  }

  .radio-orange .ant-radio-checked .ant-radio-inner:after {
    background-color: #e36947;
  }

  .radio-orange .ant-radio-inner:after {
    background-color: #e36947;
  }

  /* ant radio lightpink  */
  .radio-lightpink .ant-radio:hover .ant-radio-inner {
    border-color: #f3dcff;
  }

  .radio-lightpink .ant-radio-checked .ant-radio-inner {
    border-color: #f3dcff;
    box-shadow: 0 0px 1px 2px #f3dcff;
  }

  .radio-lightpink .ant-radio-checked .ant-radio-inner:after {
    background-color: #f3dcff;
  }

  .radio-lightpink .ant-radio-inner:after {
    background-color: #f3dcff;
  }

  /* ant radio yellowgreen  */
  .radio-yellowgreen .ant-radio:hover .ant-radio-inner {
    border-color: #becc36;
  }

  .radio-yellowgreen .ant-radio-checked .ant-radio-inner {
    border-color: #becc36;
    box-shadow: 0 0px 1px 2px #becc36;
  }

  .radio-yellowgreen .ant-radio-checked .ant-radio-inner:after {
    background-color: #becc36;
  }

  .radio-yellowgreen .ant-radio-inner:after {
    background-color: #becc36;
  }
`;
