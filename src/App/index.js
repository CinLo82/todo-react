import { TodoProvider } from '../TodoContext'
import { AppUi } from './AppUi'

function App() {
 
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
    
  )
}

export { App }
