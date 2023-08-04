import { PlusIcon } from '@heroicons/react/24/solid'
import './CreateTodoButton.css'

function CreateTodoButton() {
    return(
      <button 
        className='createTodoButton' 
     
      >
        <PlusIcon />
      </button>
    )
  }
  
  export { CreateTodoButton }