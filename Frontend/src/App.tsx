import { Container, Stack } from '@chakra-ui/react'
import Navbar from './Components/Navbar'
import TodoForm from './Components/Todoform'
import Todolist from './Components/Todolist'

export const BASE_URL = "http://localhost:5000/api"

function App() {

  return (
    <Stack h="100vh">
      <Navbar />
      <Container>
        <TodoForm />
        <Todolist />
      </Container>
    </Stack>
  )
}

export default App