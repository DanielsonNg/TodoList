import { Container, Stack } from '@chakra-ui/react'
import Navbar from './Components/Navbar'
import TodoForm from './Components/Todoform'
import Todolist from './Components/Todolist'

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