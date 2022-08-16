import Counter from "./store/Counter";
import {observer} from "mobx-react"
import { Button } from "antd";
import "./App.css";

import BaseList from "./components/BaseList";

function test() {
  return 1;
}

function App() {

  return (
    <div className="App">
      <div className="card">
        计数：{Counter.count}
        <Button type="primary" onClick={() => Counter.increaseCount()}>
          加一
        </Button>
        <Button type="primary" onClick={() => Counter.decreaseCount()}>
          减一
        </Button>
      </div>
      <BaseList />
    </div>
  );
}

export default observer(App);
