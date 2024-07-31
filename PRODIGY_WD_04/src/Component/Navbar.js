import React , {useState,useEffect} from 'react'
import logo from "../Assets/logo.png"
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [mode, setMode] = useState("flex")
    // let width = window.innerWidth;
    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        if (width <= 500) {
          setMode("none");
        } else {
          setMode("flex");
        }
      };
  
      // Initial call to set the initial mode
      handleResize();
  
      // Event listener for window resize
      window.addEventListener("resize", handleResize);
  
      // Cleanup on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    const handleChange =()=>{
        if(mode==="none"){
          setMode("flex")
        }
        else{
          setMode("none")
        }
    }
    return (
      <>
    <div className=" nav flex w-screen sticky top-0 left-0 z-10">
        <div className="nav_1 flex justify-evenly items-center bg-slate-100 h-20 w-1/2">
          <Link to="/">
            <img className=" h-12 rounded-xl" alt="" src={logo} />
          </Link>
            <h1 className=" nav_1_text font-serif italic text-4xl text-red-700 font-bold">Pawan Raj Singh</h1>
            <div onClick={handleChange} className=" hamburger flex-col hidden">
            <div className=" bg-black w-7 h-1 mb-1"></div>
            <div className=" bg-black w-7 h-1 mb-1"></div>
            <div className=" bg-black w-7 h-1 mb-1"></div>
            </div>
        </div>
        <div  style={{display:mode}} className=" nav_2 w-1/2 bg-slate-100 h-20 flex justify-center gap-6 items-center">
            <Link to="/">
              <span className="text-xl font-bold hover:text-blue-500 cursor-pointer">Home</span>  
            </Link>
            <Link to="/projects">
              <span className="text-xl font-bold hover:text-blue-500 cursor-pointer">Projects</span>  
            </Link>
            <Link to="/about">
              <span className="text-xl font-bold hover:text-blue-500 cursor-pointer">About</span>  
            </Link>
            <Link to="/contact">
            <span className="text-xl font-bold hover:text-blue-500 cursor-pointer">Contact</span>  
            </Link>
        </div>
    </div>
    </>
  )
}
