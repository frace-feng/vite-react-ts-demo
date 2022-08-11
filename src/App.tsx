import { Button } from "antd";
import { useState } from "react";
import "./App.css";

import BaseList from "./components/BaseList";

function test() {
  return 1;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BaseList />
      <div className="card">
        <Button type="primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </div>
  );
}

export default App;
