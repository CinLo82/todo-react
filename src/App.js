import { useState } from 'react'
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton'


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
  const localStorageTodos = localStorage.getItem('TODOS_V1')

  let parsedTodos = JSON.parse(localStorageTodos) || [];

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = []
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }
  
  const [todos, setTodos] = useState(parsedTodos)
  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
  })

    const saveTodos = (newTodos) => {
      localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
      setTodos(newTodos)
    }

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

export { App }
