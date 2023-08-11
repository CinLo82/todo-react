import React from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
import './CreateTodoButton.css'

function CreateTodoButton({ openModal,setOpenModal }) {
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