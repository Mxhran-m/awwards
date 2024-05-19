import { useState } from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen bg-black text-white font-["satoshi"]'>
        <Navbar />
        <Work  />
        <Stripes />
      </div>
    </>
  )
}

export default App
