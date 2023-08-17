import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { TodoForm } from '../TodoForm'
import { Modal } from '../Modal'
import { EmptyTodos } from '../EmptyTodos'
import { TodoTitle } from '../TodoTitle'
import { TodoHeader } from '../TodoHeader'
import { useTodos } from './useTodos'
import { ChangeAlert } from '../ChangeAlert'

function App() {
  const { states, stateUpdates } = useTodos()

  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
    openModal,
  } = states 

  const {
    setSearchValue,
    addTodo,
    completeTodo,
    deleteTodo,
    setOpenModal,
    sincronizeTodos,
  } = stateUpdates 

  return (
    <>
      <TodoHeader>
          <TodoTitle />
          <TodoCounter 
          completedTodos={completedTodos}
          totalTodos={totalTodos}
          />
          <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          />
      </TodoHeader>
      <TodoList 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}

        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        render={todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      /> 

      {
          openModal && (
              <Modal>
                  <TodoForm 
                    setOpenModal={setOpenModal}
                    addTodo={addTodo}
                  />
              </Modal>
          )
      }
        <CreateTodoButton 
         openModal={openModal}
         setOpenModal={setOpenModal}
      />
      <ChangeAlert 
        sincronize={sincronizeTodos}
      />
    </>
  )
}

export { App }
