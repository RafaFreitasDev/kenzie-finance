import { useState } from "react"
import {Home} from "./components/Home/Home"
import {Dash} from "./components/Dash/Dash"
import "../src/styles/index.css"


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [listTransactions,setListTransactions] = useState([])
  const [darkMode,setDarkMode] = useState(false)


  function Change(){
    setIsLoggedIn(!isLoggedIn)
  }

  function DarkMode(){
    setDarkMode(!darkMode)
  }

  if(!isLoggedIn){
    return (
      <div>
        <Home Change={Change}/>
      </div>
    )
  }else{
    return (
      <div className={darkMode?"dark":""}>
        <Dash Change={Change} setListTransactions={setListTransactions} listTransactions={listTransactions} DarkMode={DarkMode}/>
      </div>
    )
  }

  
}

export default App
