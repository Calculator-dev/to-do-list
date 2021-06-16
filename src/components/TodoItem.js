import React from "react";

const TodoItem = ({ setInputText, todos, setTodos, inputText }) => {



    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 },
        ]);
        setInputText("");
    };


    return (
        <div className="TodoList">
            <div className="inputForm">
                <form>
                    <input value={inputText} onChange={inputTextHandler}
                        placeholder="Enter new task" className="enterTaskName">
                    </input>
                    <button onClick={submitTodoHandler} type="submit" disabled={inputText === ""}>Add</button>
                </form>
            </div>
        </div >
    );
}

export default TodoItem;