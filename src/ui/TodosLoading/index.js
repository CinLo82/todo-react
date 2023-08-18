import './TodosLoading.css'
import ReactLoading from 'react-loading';

function TodosLoading () {
    return (
        <div className="loading-container">
            <ReactLoading type={'spin'} className="react-loading" />
        </div>
    )
}

export { TodosLoading }