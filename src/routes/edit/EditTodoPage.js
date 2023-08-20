import { useParams } from "react-router-dom"
import { TodoForm } from "../../ui/TodoForm"
import { useTodos } from "../useTodos"

function EditTodoPage () {
    const params = useParams()
    const id = Number(params.id)

    const { stateUpdates } = useTodos()
    const { editTodo } = stateUpdates
    return (
        <TodoForm 
            label='Edita tu Tarea'
            submitText='Editar'
            submitEvent={(newText) => editTodo(id, newText)}
        />
    )
}

export { EditTodoPage }