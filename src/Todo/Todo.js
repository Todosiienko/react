import React from 'react';



function Todo({text, todo , todos, setTodos}){

    const deleteHandler = ()=>{
        setTodos(todos.filter(el=> el.id !==todo.id));
    }

    const completeHandler = ()=>{
        setTodos(todos.map(item =>{
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }


    return (
        <div style={{display:'flex', justifyContent:'center'}}>
           <li className={` ${todo.completed ? 'completed':'' }`} style={{listStyleType:'none', marginRight:'30px'}}>{text}</li>
            <button onClick={completeHandler}>ok</button>
            <button onClick={deleteHandler}>del</button>
        </div>
    )
}

export default Todo;