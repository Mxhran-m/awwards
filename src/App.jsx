import { useState } from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen bg-black text-white font-["satoshi"]'>
        <Navbar/>
        <Work/>
      </div>
    </>
  )
}

export default App
