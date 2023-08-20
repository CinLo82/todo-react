import React from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
import './CreateTodoButton.css'

function CreateTodoButton(props) {
    return(
      <button 
        className='createTodoButton' 
        onClick={props.onClick}
      >
        <PlusIcon />
      </button>
    )
  }
  
  export { CreateTodoButton }