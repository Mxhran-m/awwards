import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marqxs from "./components/Marqxs";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import { motion } from "framer-motion";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  const [mousePosition, setmousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setmousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      window.addEventListener("mousemove", mouseMove);
      return () => window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
    },
  };

  return (
    <>
      <div className='w-full h-full  bg-black text-white font-["satoshi"]'>
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Marqxs />
        <Cards />
        <Footer />
        <motion.div
          variants={variants}
          animate="default"
          className="bg-white w-5 h-5 rounded-full fixed top-0 left-0 hover:mix-blend-difference z-999"
        ></motion.div>
      </div>
    </>
  );
}

export default App;
