import Start_game from "./components/Start_game";
import { useState } from "react";
import Gameplay from "./components/Gameplay";



function App() {
  const [isStarted,setisStarted] = useState(false)

  const toggle = ()=>{
    setisStarted(!isStarted)
  }

  return (
    <>
      {isStarted?<Gameplay />:<Start_game toggle ={toggle}/>}
    </>
  )
}
export default App;


