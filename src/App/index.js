import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { AppUi } from './AppUi'

// const defaultTodos = [
//   { text: 'Hacer la tarea', completed: true },
//   { text: 'Estudiar Ingles', completed: false },
//   { text: 'Ir al gym', completed: true },
//   { text: 'Alimentar a los gatos', completed: true },
//   { text: 'Lavar los platos', completed: false },
//   { text: 'usar estados derivados', completed: true }
// ]
// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1', defaultTodos)

function App() {
  const {
    item: todos,
    saveTodos, 
    loading, 
    error} = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length


  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
  })

    const completeTodo = (text) => {
      const newTodos = [...todos]
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      )
      newTodos[todoIndex].completed = true
      saveTodos(newTodos)
    }

    const deleteTodo = (text) => {
      const newTodos = [...todos]
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      )
      newTodos.splice(todoIndex, 1)
      saveTodos(newTodos)
    }
  return (
    <AppUi 
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      searchedTodos={searchedTodos}
      setSearchValue={setSearchValue}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export { App }
