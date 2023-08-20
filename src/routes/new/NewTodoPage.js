import { TodoForm } from "../../ui/TodoForm"
import { useTodos } from "../useTodos"

function NewTodoPage () {
    const { stateUpdates } = useTodos()
    const { addTodo } = stateUpdates
    return (
        <TodoForm 
            label='Escribe tu Nueva Tarea'
            submitText='Añadir'
            submitEvent={(text) => addTodo(text)}
        />
    )
}

export { NewTodoPage }