import { useState } from 'react'

// Custom Components
import GroceryFrom from './components/GroceryForm'

function App() {
  const [count, setCount] = useState(0)

  const addItem = (item) => {
    console.log(item)
  }

  return (
    <div className="container">
      <header>
        <h1>Grocery List</h1>
      </header>
      <GroceryFrom addItem={addItem} />
    </div>
  )
}

export default App
