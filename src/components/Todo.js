import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodos } from "../actions/index";

const Todo = () => {
  const [input, setInput] = useState("");
  const list = useSelector(state => state.todoReducer.list);
  // console.log(list)
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Todo List</h3>
      <input
        type="text"
        placeholder="Add Items"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => dispatch(addTodo(input), setInput(""))}>+</button>

      {list.map(item => {
        return (
          <div key={item.id}>
            <span>{item.data}</span>
            <button type="button" onClick={() => dispatch(deleteTodo(item.id))}>delete</button>
          </div>
        )
      })}

      <div>
        <button type="button" onClick={() => dispatch(removeTodos())}>Remove All</button>
      </div>
    </div>
  );
};

export default Todo;
