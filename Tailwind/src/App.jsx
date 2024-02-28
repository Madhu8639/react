import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setlength] = useState(8);
  const [numberallowed,setnumberallowed] = useState(false);
  const [ characterallowed, setcharacterallowed] = useState(false);
  const [Password,setPassword] = useState("")

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password generator</h1>
    </>
  )
}

export default App
