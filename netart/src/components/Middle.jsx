import React from 'react'
import styled from 'styled-components'

const Middle = () => {
  return (
    <Body>
    <div className='left'><img src="/1.png" alt="" /></div>
    <div className='right'>
      <div className='up'>
      <p>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
      <div>
        <ul>
          <li>
           C.R.I.'s energy efficient products are well
           recognized by various Government Institutions, 
           as trustworthy products for various projects across the globe to 
           save energy.
           </li>
          <li>
          C.R.I. is the highest contributor in the country for the projects of EESL 
          (Energy Efficiency Services Limited) to replace the old inefficient pumps 
          with 5 Star rated energy efficient smart pumps with IoT enabled 
          control panel.
          </li>
        </ul>
      </div>
      </div>
      <div className='down'>
        <img  src="/2.png" alt="" />
        <p>
        Government of India has awarded the "National Energy Conservation Award 2018". 
        Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. 
        Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
        </p>
      </div>
    </div>
    </Body>
  )
}
const Body = styled.main`
  @media (min-width: 319px) and (max-width: 480px) { 
  margin-top: 40px;
      display: flex;
      flex-direction: column;
      .left img{
        height: auto;
        max-width: 100%;
      }
      .down img{
        height: auto;
        max-width:100% ;
      }
      .down{
        display: flex;
        flex-direction: column;
        margin:30px
      }
      .up p{
        margin-left: 10px;
      }
    } 

    @media (min-width: 481px) and (max-width: 1200px) {
      margin-top: 40px;
      display: flex;
      .up p{
        font-weight: 800;
      }
      .left img{
       height: auto;
        max-width:100%;
      }
      .down img{
        height: auto;
        max-width: 100%;
      }

    }

    @media (min-width: 1201px) and (max-width: 1600px) {
      margin-top: 40px;
      display: flex;
      .up p{
        font-weight: 800;
      }
      .left img{
       height: 800px;
        width:550px;
      }
      .down img{
        height: auto;
        max-width: 100%;
      }
    }

    @media (min-width: 1601px) {
      margin-top: 40px;
      display: flex;
      .up p{
        font-weight: 800;
      }
      .left img{
          width: 500px;
          height: 800px;
          object-fit: fill;
          margin: 0;
      }
      .down img{
        
      }
    }

    
     

`
export default Middle