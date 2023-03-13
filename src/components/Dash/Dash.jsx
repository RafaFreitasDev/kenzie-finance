import styles from "./style.module.css"
import { LaunchedList } from "../LaunchedList/LaunchedList";
import { Launch } from "../Launch/Launch";
import { TotalValue } from "../TotalValue/TotalValue";
import { EmptyList } from "../EmptyList/EmptyList";

export function Dash({ Change, setListTransactions, listTransactions,DarkMode }) {
  if (listTransactions.length == 0) {
    return (
      <div className={styles.headDash}>
        <header>
          <h2>
            <span>Nu</span> Kenzie
          </h2>
          <button onClick={DarkMode}>Dark Mode</button>
          <button onClick={Change}>Início</button>
        </header>
        <div className={styles.mainDash}>
          <div>
            <Launch setListTransactions={setListTransactions} />
          </div>
          <EmptyList />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.headDash}>
        <header >
          <h2>
            <span>Nu</span> Kenzie
          </h2>
          <button onClick={DarkMode}>Dark Mode</button>
          <button onClick={Change}>Início</button>
        </header>
        <div className={styles.mainDash}>
          <div>
            <Launch setListTransactions={setListTransactions} />
            <TotalValue listTransactions={listTransactions} />
          </div>
          <LaunchedList
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        </div>
      </div>
    );
  }
}
