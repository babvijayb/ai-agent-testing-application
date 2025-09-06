import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Counter from './components/Button'
import PriceToggle from './components/PriceToggle'
import SampleForm from './components/SampleForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Form /> */}
      <SampleForm />
      {/* <Counter /> */}
      {/* <PriceToggle /> */}
    </>
  )
}

export default App
