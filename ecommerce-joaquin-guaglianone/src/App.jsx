import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Titulo from './components/titulo'
import { Items } from './components/items'
import './App.css'




function App() {

  return (
    <div>
      <div className="tPrin">
        <Titulo titulo="Centro de ropa"/>
      </div>  

      <div>
        <Items/>
      </div>
    </div>
  )
}

export default App
