import React,{useState} from 'react';
import './App.css';
import TodoForm from "./Todo/TodoForm";
import TodoList from "./Todo/TodoList";

function App() {
   const[inputText, setInputText] = useState('');
   const[todos, setTodos] = useState([]);


  return (
    <div className="App">
      <TodoForm
          inputText ={inputText}
          setInputText={setInputText}
          todos ={todos}
          setTodos ={setTodos}
      />
      <TodoList todos ={todos} setTodos ={setTodos}/>
    </div>
  );
}

export default App;
