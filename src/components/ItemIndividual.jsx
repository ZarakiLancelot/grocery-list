import { useState } from 'react';

import styles from './ItemList.module.css';
import { CheckIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/solid';
import Confetti from './Confetti';

const ItemIndividual = ({ item, deleteItem, toggleCheckItem, enterEditMode }) => {
  const [isChecked, setIsChecked] = useState(item.checked);
  const [isExploding, setIsExploding] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    toggleCheckItem(item.id);
    setIsExploding(!isExploding);      
  }

  return (
    <li className={styles.item}>
      <div className={styles["item-group"]}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isChecked}
          name={item.name}
          id={item.id}
          onChange={handleCheckboxChange}
        />
        <label
          htmlFor={item.id}
          className={styles.label}
        >
          {item.name}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>
        {
          isExploding && (
            <Confetti
              isExploding={isExploding}
            />
          )
        }
      </div>
      <div className={styles["item-group"]}>
        {/* UPDATE */}
        <button
          className="btn"
          aria-label={`Update ${item.name} item`}
          onClick={() => enterEditMode(item)}
        >
          <PencilIcon width={24} height={24} />
        </button>

        {/* DELETE */}
        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${item.name} item`}
          onClick={() => deleteItem(item.id)}
        >
          <TrashIcon width={24} height={24} />
        </button>
      </div>
    </li>
  );
}

export default ItemIndividual;