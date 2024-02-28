import styled from "styled-components"
import { Button } from "./styled/Button";

const Start_game = ({toggle}) => {
  return (
    <Container>
    <div>
    <img src="/images/dices 1.png" alt="" />
    </div>
    <div className="content">
    <h1>Dice Game</h1>
    <Button onClick={toggle}>Play Now</Button>
    </div>
    </Container>
  )
}
 
const Container = styled.div`
display: flex;
margin: 0 auto;
height: 100vh;
max-width:1180px;
align-items:center ;
.content {
    h1{
    font-size:96px;
    white-space: nowrap;
}
}

`;




export default Start_game;