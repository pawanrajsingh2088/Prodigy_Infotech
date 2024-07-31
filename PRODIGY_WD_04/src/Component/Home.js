import React from 'react'
import { Link } from 'react-router-dom'
import pdf from "../Assets/resume.pdf"
import pawan from "../Assets/pawan_.jpg"
import bcet from "../Assets/bcet.jpg"
import ars from "../Assets/ars.jpg"
import c from "../Assets/c.jpg"
import cpp from "../Assets/cpp.png"
import python from "../Assets/python.png"
import html from "../Assets/html.png"
import css from "../Assets/css.png"
import js from "../Assets/javascript.png"
import tech from "../Assets/tech.png"
import Navbar from './Navbar'
import Footer from './Footer'


export default function Home() {
  return (
    <>
    <Navbar/>
     <div className=" main back w-screen justify-evenly h-96 flex gap-20 px-10 items-center">
        <img className=" w-60 rounded-3xl" src={pawan} alt="" />
        <img className="main_img w-72" src={tech} alt="" />
        <div className=" main_body flex-col items-center justify-center">
            <div className=" main_text text-5xl font-bold">Hi There,<br/>I Am <span className=" text-blue-700"> Pawan Raj Singh </span></div>
            <div className="main_head text-3xl font-semibold text-gray-500 mt-3">Future Developer</div>
            <button className=" main_btn front border-4 border-green-800 bg-green-800 text-yellow-100 w-32 h-12 rounded-full ml-20 mt-6 hover:scale-105 ">
                <Link target='_blank' to={pdf}>About Me</Link>   
            </button>
        </div>
    </div>
    <div className="education w-screen flex-col">
        <h1 className="flex w-screen h-24 text-4xl text-black font-bold underline justify-center items-center">Educational Details</h1>
        <div className=" education_out flex justify-evenly">
            <div className=" education_box h-auto w-3/12 border-4 border-green-300 rounded-3xl p-4 flex flex-col items-center gap-5 hover:border-green-800 
            hover:ease-out hover:duration-100 hover:delay-100 hover:shadow-red-900 hover:shadow-2xl hover:opacity-100 hover:scale-105">
                <h1 className="text-3xl text-gray-700 font-bold">Graduation</h1>
                <img className=" w-24 rounded-3xl" src={bcet} alt="" />
                <p className="text-xl font-semibold">Currently I am Pursuing BTech Degree in Computer Science and Engineering from Bengal College of Engineering and Technology which is affiliated from Maulana Abul Kalam Azad University of Technology, West Bengal formerly WBUT.</p>
            </div>
            <div className=" education_box h-auto w-3/12 border-4 border-green-300 rounded-3xl p-4 flex flex-col items-center gap-5 hover:border-green-800
            hover:ease-out hover:duration-100 hover:delay-100 hover:shadow-red-900 hover:shadow-2xl hover:opacity-100 hover:scale-105">
                <h1 className="text-3xl text-gray-700 font-bold">Senior Secondary</h1>
                <img className="w-24 rounded-3xl" src={ars} alt="" />
                <p className="text-xl font-semibold">I have completed my Senior Secondary Education from ARS Public School , Bokaro Steel City , Jharkhand - 827001 , which is affiliated to Central Board of Secondary Education.</p>
            </div>
            <div className=" education_box h-auto w-3/12 border-4 border-green-300 rounded-3xl p-4 flex flex-col items-center gap-5 hover:border-green-800
            hover:ease-out hover:duration-100 hover:delay-100 hover:shadow-red-900 hover:shadow-2xl hover:opacity-100 hover:scale-105">
                <h1 className="text-3xl text-gray-700 font-bold">Secondary</h1>
                <img className="w-24 rounded-3xl" src={ars} alt="" />
                <p className="text-xl font-semibold">I have completed my Secondary Education from ARS Public School , Bokaro Steel City , Jharkhand - 827001 , which is affiliated to Central Board of Secondary Education .</p>
            </div>
        </div>
    </div>  
    <div className="skills flex flex-col w-screen justify-between items-center bg-slate-200 mt-5 pb-8">
            <h1 className="flex w-screen p-2 text-4xl text-black font-bold underline justify-center items-center">Skills</h1>
            <div className=" skills_img flex justify-evenly w-3/4">
                <img className="h-24 rounded-3xl hover:scale-110 hover:shadow-black hover:border-spacing-4 hover:border-red-700 hover:shadow-2xl" src={c} alt="" />
                <img className="h-24 rounded-3xl hover:scale-110 hover:shadow-black hover:border-spacing-4 hover:border-red-700 hover:shadow-2xl" src={cpp} alt="" />
                <img className="h-24 rounded-3xl hover:scale-110 hover:shadow-black hover:border-spacing-4 hover:border-red-700 hover:shadow-2xl" src={python} alt="" />
                <img className="h-24 rounded-3xl hover:scale-110 hover:shadow-black hover:border-spacing-4 hover:border-red-700 hover:shadow-2xl" src={html} alt="" />
                <img className="h-24 rounded-3xl hover:scale-110 hover:shadow-black hover:border-spacing-4 hover:border-red-700 hover:shadow-2xl" src={css} alt="" />
                <img className="h-24 rounded-3xl hover:scale-110 hover:shadow-black hover:border-spacing-4 hover:border-red-700 hover:shadow-2xl" src={js} alt="" />
            </div>
    </div>
    <Footer/>
    </>  
  )

}
