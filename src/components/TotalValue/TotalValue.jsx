import styles from "./style.module.css"

export function TotalValue({listTransactions}){
    
    const positive = listTransactions.filter(item=>item.type=="Entrada")
   
    const negative = listTransactions.filter(item=>item.type!=="Entrada")
    
    const sumPositive = positive.reduce((previousValue,currentItem)=>{
        return previousValue+currentItem.value
    },0)
  
    const sumNegative = negative.reduce((previousValue,currentItem)=>{
        return previousValue+currentItem.value
    },0)
  
    const total = sumPositive-sumNegative
    
    return(
        <div className={styles.total}>
            <div>
                <h3>Valor total:</h3>
                <span>$ {total.toFixed(2)}</span>
            </div>
            <h4>o valor se refere ao saldo</h4>
        </div>
    )
}