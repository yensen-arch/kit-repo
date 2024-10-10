import { useState, React } from "react";
import "./App.css";
import ListItem from "./ListItem";
const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onsubmit = (e) => {
    if (todo === "") {
      alert("Enter Something idiot");
      return;
    }
    e.preventDefault();
    setTodoList([...todoList, {text:todo,completed:false}]);
    setTodo("");
  };

  const deleteTodo = (indexToDelete) => {
    setTodoList(todoList.filter((_, index) => index !== indexToDelete));
  };
  const completeTodo = (indexToComplete) => {
    setTodoList(todoList.map((item, index) => 
      index === indexToComplete ? { ...item, completed: !item.completed } : item
    ));
  };
  

  return (
    <div className="App">
      <div className="formContainer">
        <h2> This is The List carrier</h2>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="addBtn" type="submit" onClick={onsubmit}>
          Add
        </button>
      </div>
      {todoList.map((item, index) => {
        return (
          <ListItem
            todo={item}
            key={index}
            onDelete={() => deleteTodo(index)}
            onComplete={() => completeTodo(index)}
          />
        );
      })}
    </div>
  );
};

export default App;
