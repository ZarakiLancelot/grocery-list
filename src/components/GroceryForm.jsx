import { useState } from 'react';

// Third party library imports
import { PlusIcon } from '@heroicons/react/24/solid';

const GroceryFrom = ({ addItem }) => {
  const [item, setItem] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addItem({
      name: item,
      checked: false,
      id: Date.now()
    });
    setItem("");
  }

  return (
    <form className="grocery-list" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          className="input"
          id="item"
          value={item}
          onInput={(e) => setItem(e.target.value)}
          required
          autoFocus
          maxLength={75}
          placeholder="e.g. eggs"
        />
        <label
          htmlFor="item"
          className="label"
        >Add item...</label>
      </div>
      <button
        className="btn"
        aria-label="Add item"
        type="submit"
      >
        <PlusIcon className='h-6 w-6 text-blue-500' />
      </button>
    </form>
  )
}

export default GroceryFrom