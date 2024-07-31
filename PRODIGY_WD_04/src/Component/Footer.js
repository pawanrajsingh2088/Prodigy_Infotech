import React from 'react'
import { Link } from 'react-router-dom'
import fb from "../Assets/fb.png"
import insta from "../Assets/insta.png"
import link from "../Assets/link.png"
import tweet from "../Assets/tweet.png"
import git from "../Assets/git.png"

export default function Footer() {
  return (
    <>
    <div className=" footer flex w-screen items-center justify-evenly gap-40 py-4 bg-yellow-200">
        <h1 className=" footer_text text-2xl font-semibold text-gray-800">&copy;All Right Reserved @pawanrajsingh.me | 2023</h1>
        <div className=" footer_img flex gap-8">
            <Link target='_blank' to="https://www.facebook.com/pawanrajsingh2088">
                <img className="w-12 hover:scale-110 hover:shadow-red-800 hover:shadow-2xl" src={fb} alt="" />
            </Link>
            <Link target='_blank' to="https://www.instagram.com/pawanrajsingh2088/">
                <img className="w-12 hover:scale-110 hover:shadow-red-800 hover:shadow-2xl" src={insta} alt="" />
            </Link>
            <Link target='_blank' to="https://www.linkedin.com/in/pawanrajsingh2088/">
                <img className="w-12 hover:scale-110 hover:shadow-red-800 hover:shadow-2xl" src={link} alt="" />
            </Link>
            <Link target='_blank' to="https://twitter.com/pawanrajsingh88">
                <img className="w-12 hover:scale-110 hover:shadow-red-800 hover:shadow-2xl rounded-2xl" src={tweet} alt="" />
            </Link>
            <Link target='_blank' to="https://github.com/pawanrajsingh2088/">
                <img className="w-12 hover:scale-110 hover:shadow-red-800 hover:shadow-2xl" src={git} alt="" />
            </Link>
        </div>
    </div>
    </>
  )
}
