import React from 'react'
import { TodoContext } from '../TodoContext'
import { PlusIcon } from '@heroicons/react/24/solid'
import './CreateTodoButton.css'

function CreateTodoButton() {
  const { 
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)

  const togleModal = () => {
    setOpenModal(!openModal)
  } 
  
    return(
      <button 
        className='createTodoButton' 
        onClick={() => togleModal()}
      >
        <PlusIcon />
      </button>
    )
  }
  
  export { CreateTodoButton }