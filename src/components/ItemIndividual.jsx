import { useState } from 'react';

import styles from './ItemList.module.css';
import { CheckIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/solid';

const ItemIndividual = ({ item, deleteItem }) => {
  const [isChecked, setIsChecked] = useState(item.checked);

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
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
      </div>
      <div className={styles["item-group"]}>
        {/* UPDATE */}
        <button
          className="btn"
          aria-label={`Update ${item.name} item`}
          // onClick={}          
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