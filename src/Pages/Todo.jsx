import React, { useEffect, useState } from "react";
import "./Todo.css";

function Todo() {
  const [users, setUsers] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Fetch initial todos
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=6")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  // Add new task
  const addTask = () => {
    if (newTask.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };
    setUsers([...users, newTodo]);
    setNewTask("");
  };

  // Toggle complete
  const toggleComplete = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, completed: !user.completed } : user
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="entiretodostructure">
      <div className="todo-container">
        <h1 className="heading">✅ Todo App</h1>

        <div className="addtaskbar">
          <textarea
            placeholder="Add a task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="plusicon" onClick={addTask}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>

        <div className="listoftask">
          <ul>
            {users.map((user) => (
              <li
                key={user.id}
                className={user.completed ? "completed" : "incomplete"}
              >
                {user.title}
                <span className="actions">
                  <button
                    className="compbtn"
                    onClick={() => toggleComplete(user.id)}
                  >
                    {user.completed ? (
                      <i className="fa-solid fa-check"></i>
                    ) : (
                      <i className="fa-solid fa-xmark"></i>
                    )}
                  </button>
                  <button
                    className="deletebtn"
                    onClick={() => deleteTask(user.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
