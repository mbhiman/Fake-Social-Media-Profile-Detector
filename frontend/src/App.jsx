import { useState } from 'react'

import './App.css'
import InstagramProfileChecker from './components/InstagramProfileChecker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="p-4 bg-gray-100 rounded-md shadow-md">
  
  <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8">
    <InstagramProfileChecker />
  </div>
</div>

       
    </>
  )
}

export default App
