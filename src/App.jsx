import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Quote from './components/Quote'
import Goals from './components/Goals'
import Footer from './components/Footer'

function App() {
  const [goals, setGoals] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem('goals')
    if (stored) setGoals(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals))
  }, [goals])

  return (
    <>
      <Navbar goals={goals} />
      <Quote />
      <Goals goals={goals} setGoals={setGoals} />
      <Footer />
    </>
  )
}

export default App
