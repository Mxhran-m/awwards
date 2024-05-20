import { useState } from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-full  bg-black text-white font-["satoshi"]'>
        <Navbar />
        <Work  />
        <Stripes />
        <Products />
      </div>
    </>
  )
}

export default App
