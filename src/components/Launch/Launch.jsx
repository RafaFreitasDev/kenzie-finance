import styles from "./style.module.css"
import { useState } from 'react'

export function Launch ({setListTransactions}) {
const [desc,setDesc]=useState("")
const [type,setType]=useState("Entrada")
const [value,setValue]=useState("")

function handleSubmit (e){
    e.preventDefault()

    setListTransactions((oldItem)=>[...oldItem,{desc,type,value}])

    setDesc("")
    setValue("")

}

    return(
        <form className={styles.mainForm} onSubmit={handleSubmit} >
            <h3>Descrição</h3>
            <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="Digite aqui sua descrição" required/>
            <p>Ex.: Compra de roupas</p>
            <span>
                <h3>Valor</h3>
                <h3 className={styles.tipo}>Tipo de Valor</h3>
            </span>
            <div>
                <div>
                    <input type="number" value={value} onChange={(e)=>setValue(parseFloat(e.target.value))} placeholder="1" required/>
                    <span>R$</span>
                </div>
                <select value={type} onChange={(e)=>setType(e.target.value)}>
                    <option value="Entrada" className={styles.designOpt}>Entrada</option>
                    <option value="Saída" className={styles.designOpt}>Saída</option>
                </select>
            </div>
            <button type="submit">Inserir valor</button>
        </form>
    )
}