import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen bg-zinc-900 text-white'>
        <Navbar/>
      </div>
    </>
  )
}

export default App
