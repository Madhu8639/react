import { useState } from "react";
import styled from "styled-components"
const NumberSelector = ({check,setcheck,selectednumber,setselectednumber}) => {
    const arr = [1,2,3,4,5,6];
    const set =(value)=>{
      setselectednumber(value); 
      setcheck("");
    }
  return (
    <Container>
    <p className="error">{check}</p>
        <div  className="flex">
    {arr.map((value,i)=>(<Box isselected = {selectednumber===value} onClick = {()=>{set(value)}} key={i}>{value}</Box>))}
    </div>
    <p>Select Number</p>
    </Container>
    
  )
}

export default NumberSelector
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
    display: flex;
    gap:24px;
}
p{
    font-size: 24px;
    font-weight: 700;
}
.error{
  color: red;
}
`;
const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-content: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props) => props.isselected?"black":"white"};
color: ${(props) => props.isselected?"white":"black"};
`