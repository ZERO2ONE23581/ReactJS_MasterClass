import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({
  required: true,
  placeholder: "hello world!",
  maxLength: 10,
})`
  background-color: tomato;
  color: white;
  margin: 5px;
`;

function App() {
  return (
    <Father as="header">
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
