import React from 'react';
import { useState } from 'react';
import './TodoForm.css'

function TodoForm({ setOpenModal,addTodo }) {
    const [newTodoValue, setNewTodoValue] = useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange= (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>¡Escribe tu Nueva Tarea!</label>
            <textarea 
                placeholder='Hacer las compras'
                value={newTodoValue}
                onChange={onChange}
                required
            />
            <div className='TodoForm-ButtonContainer'>
                <button 
                    type="button"
                    className='TodoForm-button TodoForm-button--cancel'
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button 
                    className='TodoForm-button TodoForm-button--add'
                    type="submit"
                >
                    Agregar
                </button>
            </div>
        </form>
    )

}

export { TodoForm }