import { useState, useEffect } from 'react';

// Third party library imports
import { CheckIcon } from '@heroicons/react/24/solid';

const EditForm = ({ editedItem, updateItem, closeEditMode }) => {
  const [updatedItem, setUpdatedItem] = useState(editedItem.name);

  useEffect(() => {
    const closeModalWithEscape = (e) => {
      e.key === "Escape" && closeEditMode();
    }

    window.addEventListener('keydown', closeModalWithEscape);

    return () => {
      window.removeEventListener('keydown', closeModalWithEscape);
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateItem({...editedItem, name: updatedItem});
  }

  return (
    <div
      role='dialog'
      aria-labelledby='editItem'
      onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}
    >
      <form className="grocery-list" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            type="text"
            className="input"
            id="editItem"
            value={updatedItem}
            onInput={(e) => setUpdatedItem(e.target.value)}
            required
            autoFocus
            maxLength={75}
            placeholder="Update item..."
          />
          <label
            htmlFor="editItem"
            className="label"
          >Update item...</label>
        </div>
        <button
          className="btn"
          aria-label={`Confirm item ${updatedItem}`}
          type="submit"
        >
          <CheckIcon strokeWidth={2} width={24} height={24} />
        </button>
      </form>
    </div>
  )
}

export default EditForm