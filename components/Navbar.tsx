import Link from 'next/link'
import React,{useState} from 'react'
import { AiOutlineClose, AiOutlineUser } from 'react-icons/ai'
import {CgProfile} from "react-icons/cg"
type Props = {}

function Navbar({ }: Props) {

    
    const [isUser, setIsUser] = useState(false)

    return (
        <header id="header" className="overflow-hidden text-white body-font bg-gradient-to-r from-[#19142a] via-[#100d26] to-[#100D26]">

            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="/">
                    <span className="ml-6 text-2xl tracking-widest  font-bold hover:text-purple-500">
                        {/* <img className="w-14  rounded-full" src="/czarlogo (2).png" /> */}
                            CZAR</span>
                </a>

                <nav className="md:ml-auto flex  items-center text-base justify-center ">
                    <Link className="mr-5 text-lg font-medium hover:text-indigo-600" data-aos="fade-left" data-aos-duration="2000"
                        href="#about">About</Link>
                    <Link className="mr-5 text-lg font-medium hover:text-indigo-600" data-aos="fade-left" data-aos-duration="2000"
                        href="#service">Services</Link>
                    <Link className="mr-5 text-lg font-medium hover:text-indigo-600" data-aos="fade-left" data-aos-duration="2000"
                        href="/contact">Contact</Link>
                        {
                            isUser ? 
                            <Link className="mr-5 text-lg font-medium hover:text-purple-400" data-aos="fade-left" data-aos-duration="2000"
                            href="/profile" >Profile</Link> :
                            <Link className="mr-5 text-lg font-medium hover:text-purple-400" data-aos="fade-left" data-aos-duration="2000"
                            href="/signin">Sign-in</Link> 
                        }
                  
                                 <div>
                                 
                                 </div>

                </nav>
            </div>
        </header>
    )
}

export default Navbar