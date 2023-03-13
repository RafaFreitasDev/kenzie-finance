import styles from "./style.module.css";
import home from "../../assets/img/home.svg";

export function Home({ Change }) {
  return (
    <div className={styles.mainHome}>
      <div>
        <h3>
          <span>Nu</span> Kenzie
        </h3>
        <h1>Centralize o controle de suas finanças</h1>
        <h4>de forma rápida e segura</h4>
        <button onClick={Change}>Iniciar</button>
      </div>
      <span>
        <img src={home} alt="lista" />
      </span>
    </div>
  );
}
