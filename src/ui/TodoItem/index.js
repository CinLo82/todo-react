import { CheckCircleIcon,TrashIcon, PencilSquareIcon } from '@heroicons/react/24/solid'
import './TodoItem.css'

function TodoItem(props) {
    return(
      <li>
        <CheckCircleIcon className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick={() => props.onComplete()}
        />
        <p className={`TodoIten-p ${props.completed && 'TodoIten-p-completed'}`}>{props.text}</p>
        <div className='Icons-trashEdit'>
          <PencilSquareIcon className='Icon Icon-edit icon-edit-edit'
            onClick={()=>  props.onEdit()}
          />
          <TrashIcon className='Icon Icon-trash icon-trash-delete'
          onClick={()=>  props.onDelete()}
          />
    
        </div>
        
      </li>
    )
  }
  
  export { TodoItem }