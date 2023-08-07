import React from 'react';
import './TodoForm.css'

function TodoForm() {
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <label>Escribe tu nuevo Todo</label>
            <textarea placeholder='Hacer las compras'/>
            <div className='TodoForm-ButtonContainer'>
                <button className='TodoForm-button TodoForm-button--cancel'>Cancelar</button>
                <button className='TodoForm-button TodoForm-button--add'>Agregar</button>
            </div>
        </form>
    )

}

export { TodoForm }