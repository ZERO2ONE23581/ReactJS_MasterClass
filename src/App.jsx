import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  border: none;
  border-radius: 15px;
  padding: 20px 50px;
  background-color: tomato;
  color: white;
  font-size: 30px;
`;

function App() {
  return (
    <Father as="header">
      <Btn as="a" href="/">
        Click
      </Btn>
    </Father>
  );
}

export default App;
