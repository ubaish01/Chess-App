import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chessboard from './components/Chessboard'

function App() {
  return (
    <div className='w-sceen h-screen bg-gray-900 flex items-center justify-center' >
      <Chessboard />
    </div>
  )
}

export default App
