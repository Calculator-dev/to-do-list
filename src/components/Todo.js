import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    return (
        <div className="todo">
            <li onClick={deleteHandler} className="todo-task">{text}</li>
        </div>
    );
}

export default Todo;