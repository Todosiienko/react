import React from 'react';

function TodoForm({setInputText,todos, setTodos,inputText}){

    const inputTextHandler = (e)=>{
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e)=>{
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: Math.random()*1000 }]);
        setInputText('');
    }
    return (
        <form >
            <input
                value={inputText}
                onChange={inputTextHandler}
            />
            <button
            onClick={submitTodoHandler}
            >add task</button>
        </form>
    )
}

export default TodoForm;