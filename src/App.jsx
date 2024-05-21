import { useState } from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marqxs from "./components/Marqxs";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const [count, setCount] = useState(0);
  const locomotiveScroll = new LocomotiveScroll();


  return (
    <>
      <div className='w-full h-full  bg-black text-white font-["satoshi"]'>
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Marqxs />
        <Cards/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
