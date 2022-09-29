import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItems from "./components/TodoItems";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/TodoSlice";

// const todoList = [
//   {
//     item: "todo",
//     done: false,
//     id: 6788945757,
//   },
//   {
//     item: "todo2",
//     done: true,
//     id: 67885667743,
//   },
// ];

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map((item) => (
            <TodoItems name={item.item} done={item.done} id={item.id} />
          ))}
        </div>
        {/** input box */}
        <Input />
      </div>
    </div>
  );
}

export default App;
