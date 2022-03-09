import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.div`
  color: ${(props) => props.theme.textColor};
  font-size: 100px;
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
      <Title>HELLO WORLD</Title>
      <Box>
        <Emoji>🔥</Emoji>
        <Emoji>😄</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
