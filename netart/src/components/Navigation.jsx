import React from 'react'
import styled from 'styled-components'
const Navigation = () => {
  return (
    <> 
       <Navi >
       <img  src="/logo.png" alt="failed to load" />
       </Navi>
    </>
  )
}
const Navi = styled.nav`
margin-top: 35px;
display: flex;
width: 100%;
justify-content: center;
align-items: center;
img{
 height: 100px;
 width: 420px;
 object-fit: cover;
 
}

`
export default Navigation