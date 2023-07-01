"use client"

import Link from "next/link"
import { useState } from "react"
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
export default function Navbar() {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }


  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
        <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
            <Link href="/">
                <h2>Relax Studio</h2>
            </Link>
            <ul className="hidden sm:flex">
                <li className="p-4">
                    <Link href="/">Naslovna</Link>
                </li >
                <li className="p-4">
                    <Link href="/o-nama">O nama</Link>
                </li> 
                 <li className="p-4">
                    <Link href="/korisnici">Korisnici</Link>
                </li >
                <li className="p-4">
                    <Link href="/kontakt">Kontakt</Link>
                </li >
            </ul>
        
        <div onClick={handleNav}className="block sm:hidden z-10">
         { /*Mobile button*/}
         { nav ? <AiOutlineClose size={20}></AiOutlineClose>: <AiOutlineMenu size={20}></AiOutlineMenu>}

        </div>
              { /*Mobile menu*/}
              <div className={ nav ? 
               "sm:hidden absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-black ease-in duration-300"
            : "font-bold absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-black ease-in duration-300"
              }  >
                 <ul>
                <li className="tex p-4 text-4xl hover:text-gray-500">
                    <Link href="/">Naslovna</Link>
                </li >
                <li className="p-4 text-4xl  hover:text-gray-500">
                    <Link href="/o-nama">O nama</Link>
                </li> 
                 <li className="p-4 text-4xl  hover:text-gray-500">
                    <Link href="/korisnici">Korisnici</Link>
                </li >
                <li className="p-4  text-4xl hover:text-gray-500">
                    <Link href="/kontakt">Kontakt</Link>
                </li>
            </ul>
              </div>
      </div>
    </div>
  )
}
