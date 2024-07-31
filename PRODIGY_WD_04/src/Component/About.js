import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function About() {
  return (
    <>
      <Navbar/>
      <div className='about_head'>
        <h1 className="flex justify-center text-5xl font-bold text-purple-600 mt-2">About</h1>
      <div className=" about w-2/3 h-auto m-auto text-2xl font-normal bg-green-300 p-12 rounded-3xl mt-4 mb-2">
        <p><strong>Hi There!</strong><br/> I'm <strong>Pawan Raj Singh</strong>, and I'm venturing into the exciting world of development! I'm a beginner developer with a passion for crafting digital solutions and diving into the intricacies of coding. My journey into this realm began not too long ago, sparked by a fascination with how lines of code can bring ideas to life.Currently, I'm learning the ropes, experimenting with languages like Python, JavaScript, and diving into the basics of web development. Each day feels like unlocking a new puzzle, and I'm thrilled by the challenges it brings. While I might be at the starting line, my enthusiasm and determination to grow as a developer are boundless.I'm eager to connect with fellow developers, soak up knowledge, and contribute my bit to the ever-evolving tech landscape. Let's learn and build together!</p>
      </div>
      </div>
      <Footer/>
    </>
  )
}
