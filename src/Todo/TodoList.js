import React from 'react';
import Todo from './Todo';


function TodoList( {todos, setTodos}){




    return (
        <div>
            <ul>
                {todos.map((todo) =>(
                    <Todo
                        todos ={todos}
                        setTodos ={setTodos}
                        key={todo.id}
                        todo ={todo}
                        text={todo.text}
                    />
                ))}

            </ul>
        </div>
    )
}

export default TodoList;