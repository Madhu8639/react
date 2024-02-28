import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation'
import Middle from './components/Middle'
import Middle2 from './components/Middle2'
import End from './components/End'

function App() {
  return (
    <>
      <Navigation />
      <Middle />
      <Middle2 />
      <End />
    </>
  )
}

export default App
