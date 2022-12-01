import styled from "styled-components";

export const StyledModal = styled.div`
  @keyframes moveFromTop {
    0% {
      transform: translateY(-100vh);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 0.3s;
  animation: fadeIn 0.4s forwards;

  & .modal_content {
    animation: moveFromTop 0.4s forwards;
    transition: transform 0.3s;
    background-color: #ffffff;
    padding: 48px;
    width: 500px;
    max-width: 500px;
    border-radius: 6px;
    z-index: 3;
  }

  & .modal_heading {
    font-size: 3rem;
    color: $blackColor;
    font-weight: 400;
    text-align: center;
  }
`;
