import React, { useState } from "react";

// TaskList Component - receives tasks as props and displays them with a "Remove" button
function TaskList({ tasks, removeTask }) {
    return (
        <div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => removeTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// TodoApp Component
function TodoApp() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    // Handle adding a task
    const handleAddTask = () => {
        if (task) {
            setTasks([...tasks, task]);
            setTask(""); // Clear input after adding
        }
    };

    // Handle removing a task
    const handleRemoveTask = (index) => {
        const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h2>To-Do List</h2>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a task"
            />
            <button onClick={handleAddTask}>Add Task</button>

            <TaskList tasks={tasks} removeTask={handleRemoveTask} />
        </div>
    );
}

export default TodoApp;
