import { useState } from "react"
import { useLocalStorage } from "./useLocalStorage"

function useTodos() {
    const {
        item: todos,
        saveItem: saveTodos,
        sincronizeItem: sincronizeTodos,
        loading, 
        error
    } = useLocalStorage('TODOS_V2', [])

    const [searchValue, setSearchValue] = useState('')
    //const [openModal, setOpenModal] = useState(false)
    
    const completedTodos = todos.filter(todo => !!todo.completed).length
    const totalTodos = todos.length
    
    const searchedTodos = todos.filter(
        (todo) => {
        const todoText = todo.text.toLowerCase()
        const searchText = searchValue.toLowerCase()

            return todoText.includes(searchText)
    })

    const addTodo = (text) => {
        const id = newTodoId(todos)
        const newTodos = [...todos]
        newTodos.push({
            text,
            completed: false,
            id,
        })
        saveTodos(newTodos)
    }
    
    const completeTodo = (id) => {
        const todoIndex = todos.findIndex(
            (todo) => todo.id === id
            )
        const newTodos = [...todos]
        newTodos[todoIndex].completed = true
        saveTodos(newTodos)
    }

    const editTodo = (id, newText) => {
        const todoIndex = todos.findIndex(
            todo => todo.id === id
            )
        const newTodos = [...todos]
        newTodos[todoIndex].text = newText
        saveTodos(newTodos)
    
    }
    
    const deleteTodo = (id) => {
        const todoIndex = todos.findIndex(
            (todo) => todo.id === id
            )
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

    const states = {
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        searchedTodos,
        //openModal,
    }

    const stateUpdates = {
        setSearchValue,
        addTodo,
        completeTodo,
        deleteTodo,
        editTodo,
        //setOpenModal,
        sincronizeTodos,
    }

        return (
            { states, stateUpdates }
        )
}

function newTodoId(todoList) {
    if (!todoList.length) {
        return 1
    }
    const idList = todoList.map(todo => todo.id)
    const idMax = Math.max(...idList)
    return idMax + 1
}

export { useTodos}