import Circle from "./Circle";

function App() {
  return (
    <div>
      {/* bgColor is required, borderColor is optional */}
      <Circle bgColor="crimson" borderColor="yellow" />
      <Circle bgColor="tomato" text="Hello World" />
    </div>
  );
}

export default App;
