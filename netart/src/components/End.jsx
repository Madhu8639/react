import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

const End = () => {
  return (
    <>
    <Foot>
     <Icon icon = "/call.png" text = "Toll free 1800 200 1234"/>
     <Icon icon = "/facebook.png" text="www.facebook/cripumps"/>
     <Icon icon = "/browser.png" text = "www.crigroups.com"/>
    </Foot>
    </>
  )
}
const Foot = styled.div`

@media (min-width: 319px) and (max-width: 480px){
display: flex;
flex-direction: column;
background-color: red;
align-items: center;
}
@media (min-width: 481px) and (max-width: 1200px){
display: flex;
flex-direction: row;
justify-content: space-evenly;
margin-top: 20px;
background-color: red;
width: 100%;
height: 150px;
align-items: center;
}
@media (min-width: 1201px) and (max-width: 1600px){
display: flex;
flex-direction: row;
justify-content: space-evenly;
margin-top: 20px;
background-color: red;
width: 100%;
height: 150px;
align-items: center;
}
`
export default End