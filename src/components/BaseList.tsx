import { useState } from "react";
import BaseItem from "./BaseItem";
import { Button, List } from "antd";

export interface Item {
  name: string;
  id: number;
}

function BaseList() {
  const [list, setList] = useState([
    {
      name: Math.random().toString().slice(2, 8),
      id: 1,
    },
  ]);
  const handleDelete = (id: Item["id"]) => {
    const index = list.findIndex((elem) => elem.id === id);
    if (index !== -1) {
      list.splice(index, 1);
    }
    setList([...list]);
  };
  const handleUpdate = (data: Item) => {
    const index = list.findIndex((elem) => elem.id === data.id);
    if (index !== -1) {
      list.splice(index, 1, { name: data.name, id: data.id });
    }
    setList([...list]);
  };
  return (
    <>
      <Button style={{marginBottom: '20px'}} type="primary"
        onClick={() =>
          setList((list) => [
            ...list,
            {
              name: Math.random().toString().slice(2, 8),
              id: (list[list.length - 1]?.id || 0) + 1,
            },
          ])
        }
      >
        新增
      </Button>
      <List
        bordered
        size="large"
        dataSource={list}
        renderItem={(e) => (
          <List.Item>
            <BaseItem
              key={e.id}
              data={e}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          </List.Item>
        )}
      ></List>
    </>
  );
}

export default BaseList;
