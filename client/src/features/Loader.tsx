import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="spinner mt-56">
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .spinner {
    position: relative;
    width: 16px;
    height: 16px;
  }

  .spinner div {
    width: 100%;
    height: 100%;
    background-color: #a600ff;
    border-radius: 50%;
    animation: spinner-4t3wzl 1.25s infinite backwards;
  }

  .spinner div:nth-child(1) {
    animation-delay: 0.15s;
    background-color: rgba(119, 0, 128, 0.9);
  }

  .spinner div:nth-child(2) {
    animation-delay: 0.3s;
    background-color: rgba(126, 0, 128, 0.8);
  }

  .spinner div:nth-child(3) {
    animation-delay: 0.45s;
    background-color: rgba(115, 0, 128, 0.7);
  }

  .spinner div:nth-child(4) {
    animation-delay: 0.6s;
    background-color: rgba(109, 0, 128, 0.6);
  }

  .spinner div:nth-child(5) {
    animation-delay: 0.75s;
    background-color: rgba(105, 0, 128, 0.5);
  }

  @keyframes spinner-4t3wzl {
    0% {
      transform: rotate(0deg) translateY(-200%);
    }

    60%,
    100% {
      transform: rotate(360deg) translateY(-200%);
    }
  }
`;

export default Loader;
