import { withStorageListener } from './withStorageListener'
import './ChangeAlert.css'

function ChangeAlert({ show, toggleShow }) {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }