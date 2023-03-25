import ItemIndividual from "./ItemIndividual";

// Styles
import styles from "./ItemList.module.css";

const ItemList = ({items, deleteItem, toggleCheckItem, enterEditMode }) => {
  return (
    <ul className={styles.items}>
      {
        items.sort((a, b) => b.id - a.id).map(item => (
          <ItemIndividual
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            toggleCheckItem={toggleCheckItem}
            enterEditMode={enterEditMode}
          />
        ))
      }
    </ul>
  );
}

export default ItemList;