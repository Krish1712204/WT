import React from "react";

function TodoList({todos}){
    return(
        <ul>
            {todos.map((todo)=><li>{todo}</li>)}
        </ul>
    );
}

export default TodoList;