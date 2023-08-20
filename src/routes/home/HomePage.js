import { useNavigate } from 'react-router-dom'
import { TodoCounter } from '../../ui/TodoCounter'
import { TodoSearch } from '../../ui/TodoSearch'
import { TodoList } from '../../ui/TodoList'
import { TodoItem } from '../../ui/TodoItem'
import { CreateTodoButton } from '../../ui/CreateTodoButton'
import { TodosLoading } from '../../ui/TodosLoading'
import { TodosError } from '../../ui/TodosError'
import { EmptyTodos } from '../../ui/EmptyTodos'
import { TodoTitle } from '../../ui/TodoTitle'
import { TodoHeader } from '../../ui/TodoHeader'
import { useTodos } from '../useTodos'
import { ChangeAlert } from '../../ui/ChangeAlert'

function HomePage() {
  const navigate = useNavigate()
  const { states, stateUpdates } = useTodos()

  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos,
  //  openModal,
  } = states 

  const {
    setSearchValue,
    //addTodo,
    completeTodo,
    deleteTodo,
  //  setOpenModal,
    sincronizeTodos,
  } = stateUpdates 

  return (
    <>
      <TodoHeader loading={loading}>
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
        totalTodos={totalTodos}
        searchText={searchValue}

        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={
          (searchText) => <p>No hay resultados para {searchText}</p>
        }
        render={todo => (
          <TodoItem 
            key={todo.id} 
            text={todo.text} 
            completed={todo.completed}
            onEdit={() => {
              navigate(
                '/edit/' + todo.id,
                {
                  state: { todo }
                }
              )
            }}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      /> 
      {/* {
          openModal && (
              <Modal>
                  <TodoForm 
                //    setOpenModal={setOpenModal}
                    addTodo={addTodo}
                  />
              </Modal>
          )
      } */}
        <CreateTodoButton 
        onClick={() => navigate('/new')}
       //  openModal={openModal}
       //  setOpenModal={setOpenModal}
      />
      <ChangeAlert 
        sincronize={sincronizeTodos}
      />
    </>
  )
}

export { HomePage }
