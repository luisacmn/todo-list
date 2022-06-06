import React from "react"

const Todo = ({ text, todos, todo, setTodos }) => {
    
    const handleDelete = () => {
        setTodos(todos.filter( el => el.id !== todo.id))        //filtrar e retornar apenas os itens que são diferentes item em questão. 
    }

    const handleCheck = () => {
        setTodos(
            todos.map(item => {
                if (item.id === todo.id) {
                    return {
                        ...item, 
                        completed: !item.completed
                    }
                }
                return item
            })
        )
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : "" }`}>{text}</li>         {/*Adicionar a classe que vai editar o estilo de acordo com a condição. Usa operador ternário*/}
            <button onClick={handleCheck} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={handleDelete} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default Todo;