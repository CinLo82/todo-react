import React from 'react';
import { useState } from 'react';
import './TodoForm.css'
import { useNavigate } from 'react-router-dom';

function TodoForm(props) {
    const navigate = useNavigate()
    const [newTodoValue, setNewTodoValue] = useState(props.defaultTodoText || '')

    const onSubmit = (event) => {
        event.preventDefault();
        props.submitEvent(newTodoValue)
        navigate('/')
       // addTodo(newTodoValue)
       // setOpenModal(false)
    }

    const onCancel = () => {
        navigate('/')
    }

    const onChange= (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>{props.label}</label>
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
                    {props.submitText}
                </button>
            </div>
        </form>
    )

}

export { TodoForm }