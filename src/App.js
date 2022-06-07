import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form"
import TodoList from './components/TodoList';

//Get data from localStorage: Run when apps start 
const getDatafromLS = () =>{
  const todoLocal = localStorage.getItem("todos");
  if (todoLocal) {
    return JSON.parse(todoLocal)
  } else {
    return []
  }
}

const App = () => {              
  
  //useState                                               //Variáveis e States que serão utilizados pelos componentes filhos
  const [inputText, setInputText] = useState("")           //Mapear o texto digitado pelo usuário no input.
  const [todos, setTodos] = useState(getDatafromLS())                   //Guardar o texto mapeado em uma lista (array) de objetos com o texto, id e se está completo ou não
  const [status, setStatus] = useState("all")              //Salvar status de acordo com o que foi selecionado
  const [filteredTodos, setFilteredTodos] =useState([])    //Filtrar os itens de acordo com o status selecionado
  
  
  //Save to localStorage 
  useEffect(() => {                                         //filtrar os items de"todos" de acordo com seu status.
    switch(status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
     localStorage.setItem("todos", JSON.stringify(todos))    //SALVAR informação (array "todos") no localStorage com o nome "todos"
  },[todos, status]);                                        //toda vez que todos e status se atualizam, roda essa função; 
  

  return (
    <div className="App">
      <header>
        <h1>To-do List</h1>
      </header>
      <Form                                         //enviar estados como propriedade para usar nos componentes filhos 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos} 
        inputText={inputText} 
        setStatus={setStatus} 
        status={status} 
      />               
      <TodoList 
        todos={todos} 
        setTodos={setTodos} 
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;


