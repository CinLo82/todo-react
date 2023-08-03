import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'

const defaultTodos = [
  { text: 'Hacer la tarea', completed: true },
  { text: 'Estudiar Ingles', completed: false },
  { text: 'Ir al gym', completed: true },
  { text: 'Alimentar a los gatos', completed: true },
  { text: 'Lavar los platos', completed: false }

]


function App() {

  return (
    <>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        {
          defaultTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
            />
          ))
        }
      </TodoList>

      <CreateTodoButton />
    </>
  )
}


export { App }
