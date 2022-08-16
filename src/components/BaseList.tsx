import TodoList from "../store/TodoList";
import { observer } from "mobx-react";
import BaseItem from "./BaseItem";
import { Button, List } from "antd";
import React from "react";

export interface Item {
  name: string;
  id: number;
}

class BaseList extends React.Component {
  render() {
    return (
      <>
        <Button
          style={{ marginBottom: "20px" }}
          type="primary"
          onClick={() => TodoList.addTodoList()}
        >
          新增
        </Button>
        {TodoList.todoList.length}
        <List
          bordered
          size="large"
          dataSource={TodoList.todoList}
          renderItem={(e) => (
            <List.Item>
              <BaseItem key={e.id} data={e} />
            </List.Item>
          )}
        ></List>
        {/* <ul>
          {TodoList.todoList.map((e) => {
            return <BaseItem key={e.id} data={e} />;
          })}
        </ul> */}
      </>
    );
  }
}

export default observer(BaseList);
