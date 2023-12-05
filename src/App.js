import React from 'react'
import './App.css'
import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/MainPage/Main'
const App = () => {
  const [first, setfirst] = useState([])

  const toogledata = (data) => {
        setfirst(data)
  }
  return (
    <div className='app'>
      
      
      <div className='mainapp'>
        {first ?<div className='display'>
        
        </div>: '' }
      
               <Navbar toogle={toogledata}/>
               <Main/>
      </div>
      </div>
  )
}

export default App