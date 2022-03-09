import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10%;
`;

const rotateAnimation = keyframes`
  from{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  to{
    transform: rotate(360deg);
    border-radius: 50%;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
  &:nth-child(2) {
    margin: 100px;
    animation: ${rotateAnimation} 2s ease-in-out infinite;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotateAnimation} 2s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: blue;
  }
  ${Emoji}:hover {
    font-size: 8rem;

    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😄</Emoji>
      </Box>
      <Emoji>🍎</Emoji>
    </Wrapper>
  );
}

export default App;
