import { useState } from "react"
import styled from "styled-components"

const RollDice = ({currentDice,rolldice}) => {
  return (
    <DiceContainer >
    <div onClick={rolldice}>
    <img src={`/images/dice_${currentDice}.png`} alt="" />
    </div>
    <p>Click on the Dice to roll</p>
    </DiceContainer>
    
  )
}

export default RollDice

const DiceContainer = styled.div`
margin-top: 48px;
display:flex;
flex-direction:column;
align-items:center;
p {
    font-size: 24px;
}`;