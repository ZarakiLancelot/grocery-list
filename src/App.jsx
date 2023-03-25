import { useState } from 'react'

// Custom Components
import GroceryFrom from './components/GroceryForm';
import EditForm from './components/EditForm';
import ItemList from './components/ItemList';
import SwitchTheme from './components/SwitchTheme';

// Custom Hooks
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [items, setItems] = useLocalStorage('grocery-list', []);
  const [focusPrevElement, setFocusPrevElement] = useState();
  const [editedItem, setEditedItem] = useState(null);
  const [isEditing,setIsEditing] = useState(false);

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

  const closeEditMode = () => {
    setEditedItem(null);
    setIsEditing(false);
    focusPrevElement.focus();
  }

  const updateItem = (item) => {
    setItems(prevState => prevState.map(i => (
      i.id === item.id ? { ...i, name: item.name } : i
    )));
    closeEditMode();
  }

  const enterEditMode = (item) => {
    setEditedItem(item);
    setIsEditing(true);
    setFocusPrevElement(document.activeElement);
  }

  return (
    <div className="container">
      <header>
        <h1>Grocery List</h1>
      </header>
      {
        isEditing && (
          <EditForm
            editedItem={editedItem}
            updateItem={updateItem}
            closeEditMode={closeEditMode}
          />
        )
      }
      <GroceryFrom addItem={addItem} />
      { items && (
        <ItemList
          items={items}
          deleteItem={deleteItem}
          toggleCheckItem={toggleCheckItem}
          enterEditMode={enterEditMode}
        />
      )}
      <SwitchTheme />
    </div>
  )
}

export default App
