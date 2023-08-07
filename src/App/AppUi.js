import React from 'react'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { TodoContext } from '../TodoContext'
import { TodoForm } from '../TodoForm'
import { Modal } from '../Modal'


function AppUi() {
    const { 
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)

    return (
        <>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError />}
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
        {
            openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )
        }
        </>
    )
}
export { AppUi }