import "./Todo.css";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoItems from "./TodoItems";

const Todo = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);

  const handelAdd = () => {
    var payload = {
      title: query,
      status: false,
      id: uuid()
    };
    setList([...list, payload]);
  };

  const handleDelete = (id) => {
    let updatedList = list.filter((e) => e.id !== id);
    setList(updatedList);
  };

  return (
    <>
      <h1>Add Task</h1>
      <input
        type="text"
        placeholder="Write..."
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button className="add-btn" onClick={handelAdd}>
        Add
      </button>

      {list.map((e) => (
        <TodoItems handleDelete={handleDelete} key={e.id} {...e} />
      ))}
    </>
  );
};

export default Todo;
