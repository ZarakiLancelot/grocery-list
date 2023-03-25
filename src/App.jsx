import { useState } from 'react'

// Custom Components
import GroceryFrom from './components/GroceryForm'
import ItemList from './components/ItemList';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems(prevState => [...prevState, item]);
  }

  return (
    <div className="container">
      <header>
        <h1>Grocery List</h1>
      </header>
      <GroceryFrom addItem={addItem} />
      { items && <ItemList items={items}/>}
    </div>
  )
}

export default App
