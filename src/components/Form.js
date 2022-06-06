import React from "react"

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {          //importar as propriedades para usar neste componente 
    
    const handleChange = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();                                                //evitar que a página recarregue quando apertar o botão
        setTodos([
            ...todos,                                                      //setar para o array "todos" um novo array com conteúdo existente + o novo objeto
            {                                                              //novo objeto com 3 proriedades
                text: inputText, 
                completed: false, 
                id: Math.random() * 100
            }   
        ])
        setInputText("");                                                  //deixar o inputText limpo
    }

    const handleStatus = (e) => {
        setStatus(e.target.value)

    }

    return (
        <form>
            <input onChange={handleChange} value={inputText} type="text" className="todo-input" />
            <button onClick={handleSubmit} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={handleStatus} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;