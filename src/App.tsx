import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setUsername(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={username} type="text" placeholder="username" />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
