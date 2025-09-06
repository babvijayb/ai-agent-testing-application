import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Counter from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form />
      <Counter />
    </>
  )
}

export default App
