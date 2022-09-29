import React from "react";
import "./TodoItems.css";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/TodoSlice";

function TodoItems({ name, done, id }) {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(id));
  };
  return (
    <div className="todoItem">
      {/** checkbox */}

      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      {/**name */}
      <p className={done && "todoItems--done"}>{name}</p>
    </div>
  );
}

export default TodoItems;
