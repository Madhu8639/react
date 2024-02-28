import React from 'react'
import styled from 'styled-components'

const Middle2 = () => {
  return (
    <>
      <Body>
        <p>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
        </p>
        <div className='photo'>
            <img src="/3.png" alt="" />
        </div>
        <div className='note'>
        <p>
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 
        </p>
        </div>
        <div className='line'></div>
        <div className='bottom'>
            <p>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
            <p className='no'>CHEMICALS & PROCESS<span >|</span>POWER<span >|</span>WATER & WASTE WATER<span >|</span>OILS & GAS<span >|</span>PHARMA<span >|</span>SUGARS & DISTILLERIES<span >|</span>PAPER & PULP<span >|</span>MARINE & DEFENCE<span >|</span>METAL & MINING<span >|</span>FOOD & BEVERAGE<span >|</span></p>
            <p className='no'>PETROCHEMICAL & REFINERIES<span >|</span>SOLAR<span >|</span>BUILDING<span >|</span>HVAC<span >|</span>FIRE FIGHTING<span >|</span>AGRICULTURE & RESIDENTIAL</p>
        </div>
        <div className='underbottom'>
        </div>
      </Body>  
    </>
  )
}
const Body = styled.main`
@media (min-width: 319px) and (max-width: 480px){
    display: flex;
flex-direction: column;
.photo{
    margin-left: 50px;
    margin-right: 50px;
}
p{
    font-weight: 500;
    margin-left:50px;
}
.photo img{
    height: auto;
    max-width: 100%;
}
.note{
    margin-top: 10px;
    display: flex;
    justify-content: center;
}  
.line{
    margin:0 30px;
    height: 1.7px;
    background-color: red;
}    
.bottom{
    margin-top: 10px;
    display: flex;
    flex-direction:column;
    align-items: center;
}
.bottom span{
    color: red;
    font-size: 25px;
}
.no{
    margin-left:50px;
    margin-top: 0px;
    margin-bottom: 0px;
}
}
@media (min-width: 481px) and (max-width: 1200px){
    display: flex;
flex-direction: column;
.photo{
    margin-left: 100px;
    margin-right: 100px;
}
p{
    font-weight: 500;
    margin-left:50px;
}
.photo img{
    height: auto;
    max-width: 100%;
}  
.note{
    margin-top: 10px;
    display: flex;
    justify-content: center;
} 
.line{
    margin:0 30px;
    height: 1.7px;
    background-color: red;
} 
.bottom{
    margin-top: 10px;
    display: flex;
    flex-direction:column;
    align-items: center;
}
.bottom span{
    color: red;
    font-size: 25px;
}
.no{
    margin:0px;
    margin-left: 50px;
}
}
@media (min-width: 1201px) and (max-width: 1600px) {
display: flex;
flex-direction: column;
.photo{
    margin-left: 200px;
    margin-right: 200px;
}
p{
    font-weight: 500;
    margin-left:50px;
}
.photo img{
    height: auto;
    max-width: 100%;
}
.note{
    margin-top: 10px;
    display: flex;
    justify-content: center;
}
.line{
    margin:0 30px;
    height: 1.70px;
    background-color: red;
}  
.bottom{
    margin-top: 10px;
    display: flex;
    flex-direction:column;
    align-items: center;
}
.no{
    margin:0px;
}
.bottom span{
    color: red;
    font-size: 25px;
}
}

`
export default Middle2