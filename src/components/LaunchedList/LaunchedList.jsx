import styles from "./style.module.css";
import { FaTrash } from "react-icons/fa";

export function LaunchedList({ listTransactions, setListTransactions }) {
  function handleItem(itemDelete) {
    const filteredList = listTransactions.filter((item) => item !== itemDelete);

    setListTransactions(filteredList);
  }

  return (
    <div className={styles.list}>
      {console.log(listTransactions)}
      <h4>Resumo financeiro</h4>
      <ul>
        {listTransactions.map((item, index) => {
          return (
            <li
              key={index}
              className={
                item.type === "Entrada" ? styles.greenCard : styles.card
              }
            >
              <div>
                <h3>{item.desc}</h3>
                <h4>{item.type}</h4>
              </div>
              <span>
                <h4>R$ {(item.value)}</h4>
                <button onClick={() => handleItem(item)}>
                  <FaTrash />
                </button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
