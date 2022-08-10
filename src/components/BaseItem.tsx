import { useState } from "react";
import { Item } from "./BaseList";

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
    <>
      <li>
        name:{" "}
        {isEdit ? (
          <div>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <button
              onClick={() => {
                setIsEdit(false);
                onUpdate({ name: name, id: data.id });
              }}
            >提交</button>
          </div>
        ) : (
          data.name
        )}{" "}
        ; id: {data.id}
        <button onClick={() => setIsEdit(true)}>编辑</button>
        <button onClick={() => onDelete(data.id)}>删除</button>
      </li>
    </>
  );
}
