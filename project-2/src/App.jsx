import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Contact from './components/Contact/Contact'
import Button from './components/Button/Button'
import ContactForm from './components/ContactForm/ContactForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation />
    <main className="main_container">    
    <Contact />
    <ContactForm />
    </main>

    </>
  )
}

export default App
