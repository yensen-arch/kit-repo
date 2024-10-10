import React from "react";

const ListItem = ({ todo, onDelete, onComplete }) => {
  return (
    <div className="listItem">
      <ul>
        <li
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            color: todo.completed ? "black" : "white",
          }}
        >
        {todo.text}</li>
        
      </ul>
      <span className="btns">
          <button className="delBtn" onClick={onDelete}>
            X
          </button>
          <button className="cmpltBtn" onClick={onComplete}>
            Done
          </button>
        </span>
    </div>
  );
};

export default ListItem;
