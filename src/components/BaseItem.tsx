import { useState } from "react";
import { Item } from "./BaseList";
import { Input, Col, Row,Button } from "antd";
import './Base.css'

interface BaseItemProps {
  data: Item;
  onDelete: (id: Item["id"]) => void;
  onUpdate: (data: Item) => void;
}

export default function BaseItem(props: BaseItemProps) {
  const [isEdit, setIsEdit] = useState(false);
  const { data, onDelete, onUpdate } = props;
  const [name, setName] = useState(data.name);
  return (
        <Row>
          <Col span={4}>随机数：</Col>
          <Col className="edit-col" span={10}>
            {isEdit ? (
              <>
                <Input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <Button
                  onClick={() => {
                    setIsEdit(false);
                    onUpdate({ name: name, id: data.id });
                  }}
                >
                  提交
                </Button>
              </>
            ) : (
              data.name
            )}
          </Col>
          <Col className="operate" span={10}>
            {isEdit ? (
              ""
            ) : (
              <Button className="operate-btn" type="primary" onClick={() => setIsEdit(true)}>编辑</Button>
            )}
            <Button type="primary" danger onClick={() => onDelete(data.id)}>删除</Button>
          </Col>
        </Row>
  );
}
