import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { TrashIcon } from '@heroicons/react/24/solid'

import './TodoItem.css'

function TodoItem(props) {
    return(
      <li>
        <CheckCircleIcon className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick={() => props.onComplete()}
        />
        <p className={`TodoIten-p ${props.completed && 'TodoIten-p-completed'}`}>{props.text}</p>
        <TrashIcon className='Icon Icon-trash icon-trash-delete'
          onClick={()=>  props.onDelete()}
        />
      </li>
    )
  }
  
  export { TodoItem }