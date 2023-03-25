import { useState } from 'react'

// Custom Components
import GroceryFrom from './components/GroceryForm'
import ItemList from './components/ItemList';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems(prevState => [...prevState, item]);
  }

  const deleteItem = (id) => {
    setItems(prevState => prevState.filter(item => item.id !== id));
  }

  const toggleCheckItem = (id) => {
    setItems(prevState => prevState.map(item => (
      item.id === id ? { ...item, checked: !item.checked } : item
    )));
  }

  return (
    <div className="container">
      <header>
        <h1>Grocery List</h1>
      </header>
      <GroceryFrom addItem={addItem} />
      { items && (
        <ItemList
          items={items}
          deleteItem={deleteItem}
          toggleCheckItem={toggleCheckItem}
        />
      )}
    </div>
  )
}

export default App
