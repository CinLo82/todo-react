import './TodoCounter.css'

function TodoCounter( {total, completed} ) {
  

    return(
      total === completed ? 
        <h1 className='TodoCounter'>Felicitaciones, completaste todas las tareas!</h1>
          :
        <h1 className='TodoCounter' >
          Has completado <span>{completed}</span> de <span>{total}</span> Todos
        </h1>
    )
  }

  export { TodoCounter }