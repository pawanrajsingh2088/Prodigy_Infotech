import React from 'react'
import Navbar from './Navbar'
import calculator from "../Assets/calculator.png"
import table from "../Assets/table.png"
import bmi from "../Assets/bmi.png"
import color from "../Assets/color.png"
import text from "../Assets/textutils.png"
import { Link } from 'react-router-dom'
import Footer from './Footer'
import pass from "../Assets/pass.png"
import simon from "../Assets/simon.png"
import weather from "../Assets/weather.png"
import quiz from "../Assets/quiz.png"

export default function Projects() {
  return (
    <>
      <Navbar/>
      <div className=" project_head w-screen mb-3">
          <h1 className="flex justify-center text-5xl font-bold text-purple-600 mt-2">My Projects</h1>  
          <div className=" projects grid justify-evenly grid-cols-3 p-3">

            <Link target='_blank' to="https://pawancalculator.web.app/">
                <div className=" projects_box flex flex-col w-96 items-center border-4 border-red-500 p-4 gap-3 rounded-3xl mb-5 bg-slate-200 hover:border-green-500 hover:scale-105 
                  hover:shadow-2xl hover:shadow-orange-900">
                  <h1 className="font-semibold text-4xl">Calculator</h1>
                  <p className=" text-xl font-semibold text-slate-700">Skill Used:- HTML, CSS & Javascript</p>
                  <img className=" border-4 border-slate-800 w-64 h-44 rounded-3xl" src={calculator} alt="" />
                </div>
            </Link>

            <Link target='_blank' to="https://pawanrajsingh2088.github.io/tablepawan/">
                <div className=" projects_box flex flex-col w-96 items-center border-4 border-red-500 p-4 gap-3 rounded-3xl mb-5 bg-slate-200 hover:border-green-500 hover:scale-105 
                  hover:shadow-2xl hover:shadow-orange-900">
                  <h1 className="font-semibold text-4xl">Table</h1>
                  <p className=" text-xl font-semibold text-slate-700">Skills Used:- HTML, CSS & Javascript</p>
                  <img className=" border-4 border-slate-800 w-64 h-44 rounded-3xl" src={table} alt="" />
                </div>
            </Link>

            <Link target='_blank' to="https://pawanrajsingh2088.github.io/bmipawan/">
                <div className=" projects_box flex flex-col w-96 items-center border-4 border-red-500 p-4 gap-3 rounded-3xl mb-5 bg-slate-200 hover:border-green-500 hover:scale-105 
                  hover:shadow-2xl hover:shadow-orange-900">
                  <h1 className="font-semibold text-4xl">BMI</h1>
                  <p className=" text-xl font-semibold text-slate-700">Skills Used:- HTML, CSS & Javascript</p>
                  <img className=" border-4 border-slate-800 w-64 h-44 rounded-3xl" src={bmi} alt="" />
                </div>
            </Link>

            <Link target='_blank' to="https://ui-color-codes.netlify.app/">
                <div className=" projects_box flex flex-col w-96 items-center border-4 border-red-500 p-4 gap-3 rounded-3xl bg-slate-200 hover:border-green-500 hover:scale-105 
                  hover:shadow-2xl hover:shadow-orange-900">
                  <h1 className="font-semibold text-4xl">UI Colors</h1>
                  <p className=" text-xl font-semibold text-slate-700">Skills Used:- ReactJs & Tailwind</p>
                  <img className=" border-4 border-slate-800 w-64 h-44 rounded-3xl" src={color} alt="" />
                </div>
            </Link>

            <Link target='_blank' to="https://text-util-prs2088.web.app/">
                <div className=" projects_box flex flex-col w-96 items-center border-4 border-red-500 p-4 gap-3 rounded-3xl bg-slate-200 hover:border-green-500 hover:scale-105 
                  hover:shadow-2xl hover:shadow-orange-900">
                  <h1 className="font-semibold text-4xl">Text-Utils</h1>
                  <p className=" text-xl font-semibold text-slate-700">Skills Used:- ReactJs & Tailwind</p>
                  <img className=" border-4 border-slate-800 w-64 h-44 rounded-3xl" src={text} alt="" />
                </div>
            </Link>
            <Link target='_blank' to="https://pawanrajsingh2088.github.io/password-generator/">
                <div className=" projects_box flex flex-col w-96 items-center border-4 border-red-500 p-4 gap-3 rounded-3xl bg-slate-200 hover:border-green-500 hover:scale-105 
                  hover:shadow-2xl hover:shadow-orange-900">
                  <h1 className="font-semibold text-4xl">Password Generator</h1>
                  <p className=" text-xl font-semibold text-slate-700">Skills Used:- ReactJs & Tailwind</p>
                  <img className=" border-4 border-slate-800 w-64 h-44 rounded-3xl" src={pass} alt="" />
                </div>
            </Link>
            <Link target='_blank' to="https://pawanrajsingh2088.github.io/Simon-Game/">
                <div className=" projects_box flex flex-col w-96 items-center border-4 my-5 border-red-500 p-4 gap-3 rounded-3xl bg-slate-200 hover:border-green-500 hover:scale-105 
                  hover:shadow-2xl hover:shadow-orange-900">
                  <h1 className="font-semibold text-4xl">Simon Game</h1>
                  <p className=" text-xl font-semibold text-slate-700">Skills Used:- HTML, CSS & Javascript</p>
                  <img className=" border-4 border-slate-800 w-64 h-44 rounded-3xl" src={simon} alt="" />
                </div>
            </Link>
            <Link target='_blank' to="https://weather-app-gules-nine-85.vercel.app/">
                <div className=" projects_box flex flex-col w-96 items-center border-4 my-5 border-red-500 p-4 gap-3 rounded-3xl bg-slate-200 hover:border-green-500 hover:scale-105 
                  hover:shadow-2xl hover:shadow-orange-900">
                  <h1 className="font-semibold text-4xl">Weather App</h1>
                  <p className=" text-xl font-semibold text-slate-700">Skills Used:- ReactJs & Tailwind</p>
                  <img className=" border-4 border-slate-800 w-64 h-44 rounded-3xl" src={weather} alt="" />
                </div>
            </Link>
            <Link target='_blank' to="https://quiz-app-psi-peach.vercel.app/">
                <div className=" projects_box flex flex-col w-96 items-center border-4 my-5 border-red-500 p-4 gap-3 rounded-3xl bg-slate-200 hover:border-green-500 hover:scale-105 
                  hover:shadow-2xl hover:shadow-orange-900">
                  <h1 className="font-semibold text-4xl">Quiz App</h1>
                  <p className=" text-xl font-semibold text-slate-700">Skills Used:- ReactJs & Tailwind</p>
                  <img className=" border-4 border-slate-800 w-64 h-44 rounded-3xl" src={quiz} alt="" />
                </div>
            </Link>


          </div>
      </div>
      <Footer/>      
    </>
  )
}