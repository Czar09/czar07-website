import React from 'react'

type Props = {}

function Banner({ }: Props) {
    return (
        <div>
            <div className="container px-8 py-48 mx-auto lg:px-4">
                <div className="flex flex-col w-full mb-12 text-left lg:text-center">
                    <h2 className="mb-1 text-xs font-semibold tracking-widest text-green-400 uppercase title-font"
                        data-aos="fade-up" data-aos-duration="3000">World-Class
                        The organization for everything
                    </h2>

                    <h1 className="mb-6 pt-4 text-2xl font-semibold tracking-tighter text-purple-300 sm:text-5xl title-font"
                        data-aos="fade-up" data-aos-duration="3000">
                        Czar
                    </h1>
                    <p className="mx-auto text-base font-medium leading-relaxed text-purple-200 lg:w-2/3" data-aos="fade-up"
                        data-aos-duration="3000">
                    </p>
                </div>
                <div className="flex justify-center">
                    <a href="#about"
                        className="inline-flex items-center font-semibold text-white md:mb-2 lg:mb-0 hover:text-purple-400 "
                        data-aos="fade-up" data-aos-duration="3000">
                        Learn More
                        <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20"
                            height="20" fill="currentColor">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                        </svg>
                    </a>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff" fill-opacity="1"
                    d="M0,224L48,240C96,256,192,288,288,288C384,288,480,256,576,213.3C672,171,768,117,864,112C960,107,1056,149,1152,144C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
            </svg>
        </div>
    )
}

export default Banner