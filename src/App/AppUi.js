import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'


function AppUi({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    searchedTodos,
    setSearchValue,
    completeTodo,
    deleteTodo
}) {

    return (
        <>
        <TodoCounter 
            completed={completedTodos} 
            total={totalTodos}
        />
        <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />

        <TodoList>
            {loading && <p>Estamos Cargando...</p>}
            {error && <p>Hubo un error al cargar</p>}
            {(!loading && searchedTodos.length === 0) && <p>Crea Tu Primer TODO!</p>}
            {
            searchedTodos.map(todo => (
                <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                />
            ))
            }
        </TodoList>
        <CreateTodoButton />
        </>
    )
}
export { AppUi }