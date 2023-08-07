import React from 'react';
import { useState } from 'react';
import './TodoForm.css'
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const {
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext)
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
            <label>Escribe tu nuevo Todo</label>
            <textarea 
                placeholder='Hacer las compras'
                value={newTodoValue}
                onChange={onChange}
            />
            <div className='TodoForm-ButtonContainer'>
                <button 
                    className='TodoForm-button TodoForm-button--cancel'
                    onCancel={onCancel}
                >
                    Cancelar
                </button>
                <button className='TodoForm-button TodoForm-button--add'>Agregar</button>
            </div>
        </form>
    )

}

export { TodoForm }