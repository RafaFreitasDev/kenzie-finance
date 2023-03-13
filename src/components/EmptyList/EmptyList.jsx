import styles from "./style.module.css";

export function EmptyList() {
  return (
    <div className={styles.list}>
      <h4>Resumo financeiro</h4>
      <h2>Você não possui nenhum lançamento</h2>
      <ul>
        <li className={styles.card}>
          <div></div>
          <div></div>
        </li>
        <li className={styles.card}>
          <div></div>
          <div></div>
        </li>
        <li className={styles.card}>
          <div></div>
          <div></div>
        </li>
      </ul>
    </div>
  );
}
