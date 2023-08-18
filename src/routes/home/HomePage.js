import { TodoCounter } from '../../ui/TodoCounter'
import { TodoSearch } from '../../ui/TodoSearch'
import { TodoList } from '../../ui/TodoList'
import { TodoItem } from '../../ui/TodoItem'
import { CreateTodoButton } from '../../ui/CreateTodoButton'
import { TodosLoading } from '../../ui/TodosLoading'
import { TodosError } from '../../ui/TodosError'
import { TodoForm } from '../../ui/TodoForm'
import { Modal } from '../../ui/Modal'
import { EmptyTodos } from '../../ui/EmptyTodos'
import { TodoTitle } from '../../ui/TodoTitle'
import { TodoHeader } from '../../ui/TodoHeader'
import { useTodos } from '../useTodos'
import { ChangeAlert } from '../../ui/ChangeAlert'

function HomePage() {
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
          <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          />
          <TodoCounter 
          completedTodos={completedTodos}
          totalTodos={totalTodos}
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
            key={todo.id} 
            text={todo.text} 
            completed={todo.completed}
            onEdit={() => console.log('edit todo')}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
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

export { HomePage }
