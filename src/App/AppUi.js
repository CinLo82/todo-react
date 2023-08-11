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
import { EmptyTodos } from '../EmptyTodos'
import { TodoTitle } from '../TodoTitle'
import { TodoHeader } from '../TodoHeader'

function AppUi() {
    const { 
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue
    } = React.useContext(TodoContext)

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
        
        <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
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