import Link from 'next/link'
import React from 'react'

type Props = {}

function Navbar({ }: Props) {
    return (
        <header id="header" className="text-white body-font bg-gradient-to-r from-[#19142a] via-[#100d26] to-[#100D26]">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="/">
                    <span className="ml-6 text-2xl tracking-widest  font-bold hover:text-purple-500">
                        {/* <img className="w-14  rounded-full" src="/czarlogo (2).png" /> */}
                            CZAR</span>
                </a>

                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
                    <Link className="mr-5 text-md font-medium hover:text-purple-400" data-aos="fade-left" data-aos-duration="2000"
                        href="#about">About</Link>
                    <Link className="mr-5 text-md font-medium hover:text-purple-400" data-aos="fade-left" data-aos-duration="2000"
                        href="#service">Services</Link>
                    <Link className="mr-5 text-md font-medium hover:text-purple-400" data-aos="fade-left" data-aos-duration="2000"
                        href="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    )
}

export default Navbar