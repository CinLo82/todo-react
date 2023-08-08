import React from 'react'
import { TodoContext } from '../TodoContext'
import './TodoCounter.css'

function TodoCounter() {
  const { 
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext)

    const noTodos = totalTodos === 0 && completedTodos === 0
    if (noTodos) {
      return null;
    }

    return(
      
      totalTodos === completedTodos? 
        <h1 className='TodoCounter'>Felicitaciones, completaste todas las tareas!</h1>
          :
        <h1 className='TodoCounter' >
          Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> Todos
        </h1>
    )
  }

  export { TodoCounter }