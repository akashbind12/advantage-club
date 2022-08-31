import { useState } from 'react'
import './App.css'
import { Product } from './Comonents/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Product></Product>
    </div>
  )
}

export default App
