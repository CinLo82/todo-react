import { useStorageListener } from './useStorageListener'
import './ChangeAlert.css'

function ChangeAlert({ sincronize }) {
    const { show, toggleShow } = useStorageListener(sincronize)
    if (show) {
         return (
            <div className='ChangeAlert-bg'>
                <div className='ChangeAlert-container'>
                    <p>Parece que hubo cambios en tus Tareas
                    </p>
                    <p>¿Deseas Sincronizar?</p>
                    <button 
                        className='TodoForm-button TodoForm-button--add' onClick={() => toggleShow(false)}
                    >
                        Si
                    </button>
                </div>
                
            </div>
         
        )
    }
}

export { ChangeAlert }