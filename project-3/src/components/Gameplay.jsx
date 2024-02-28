import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RollDice from "./RollDice"
import { useState } from "react"
import { Button, OutlineButton } from "./styled/Button"
import Rules from "./Rules"

const Gameplay = () => {
  const [score,setscore] = useState(0);
  const [selectednumber,setselectednumber] = useState();
  const [currentDice,setcurrentDice] = useState(1);
  const [check,setcheck] = useState("");
  const [showRules,setShowRules] = useState(false);

  const generateRandomNumber = (min,max) =>{
    return Math.floor(Math.random()*(max-min)+min);
  }

 const resetscore = ()=>{
  setscore(0);
 }

  const rolldice = ()=>{
    if (!selectednumber) {
      setcheck("You have not selected any number")
      return}
      setcheck("");

    const random  = generateRandomNumber(1,7);
    setcurrentDice(random);

    if (random === selectednumber){
      setscore((prev)=>prev+random);
    }
    else{
      setscore((prev)=>prev-2);
    }
    setselectednumber(undefined);

  }
  
  return (
<MainSelector>
<div className="TopSection">
  <TotalScore score={score}/>
  <NumberSelector   setcheck = {setcheck} check = {check} selectednumber={selectednumber} setselectednumber={setselectednumber} />
</div>
  <RollDice currentDice={currentDice} rolldice={rolldice}/>
  <div className="btns">
    <OutlineButton onClick={resetscore}>Reset</OutlineButton>
    <Button onClick={()=>{setShowRules((prev)=>!prev)}}>Show Rules</Button>
  </div>
  {showRules?<Rules />:null}
</MainSelector>  )
}

export default Gameplay
const MainSelector = styled.main`
.TopSection{
  display: flex;
justify-content: space-between;
align-items: end;
margin:0px 70px;
}
.btns{
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
}


`