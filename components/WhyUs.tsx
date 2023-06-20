import React from 'react'

type Props = {}

function WhyUs({ }: Props) {
    return (
        <>
            <section id="about" className="text-gray-700 body-font">
                <div className="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row"
                    data-aos="fade-right" data-aos-duration="1500">
                    <div
                        className="flex flex-col items-center w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0 lg:text-center">
                        <div className="text-center mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">About Us
                            </h1>
                            <div className="flex mt-6 justify-center">
                                <div className="w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
                            </div>
                        </div>
                        <h2 className="mb-1 text-xs font-semibold tracking-widest text-green-500 title-font">It isn&pos;t just an
                            organization,
                        </h2>
                        <h1
                            className="mb-8 text-2xl font-bold tracking-tighter text-center text-gray-800 lg:text-left lg:text-5xl title-font">
                            It&apos;s more than an ordinary Organization
                        </h1>

                    </div>
                    <div className="w-5/6 lg:max-w-md lg:w-full md:w-1/2 hidden sm:block" data-aos="flip-left"
                        data-aos-duration="1500">
                        <img className="object-cover object-center rounded-lg " alt="hero" src="/czarlogo (2).png" />
                    </div>
                </div>
            </section>



            <section className="text-gray-700 body-font">
                <div className="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row">
                    <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0" data-aos="flip-left"
                        data-aos-duration="1500">
                        <img className="object-cover object-center rounded sm:" alt="hero" src="/dev.svg" />
                    </div>
                    <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left"
                        data-aos="fade-left" data-aos-duration="1500">
                        <h1
                            className="mb-8 text-2xl font-bold tracking-tighter text-center text-gray-800 lg:text-left lg:text-2xl title-font">
                            We focus on what&apos;s important for you
                        </h1>
                        <p className="mb-8 text-base leading-relaxed text-center text-gray-700 lg:text-left lg:text-1xl">
                            Whether you are looking to have a guidance over a project or need some brand promotion, our Partners is always ready to help you.Observing these we have set up a destination to meet all your needs at one place so you don&apos;t have to surf around looking
                            for your work to be completed.
                        </p>
                        <p>
                            At Czar we know what&apos;s important as a student in the ongoing cirriculum in the institutions around the world.
                            We here focus on all round development of a student and focus on getting their hands on best practises which are required in the
                            industry nowadays.
                        </p>
                    </div>
                </div>
            </section >


            <section className="text-gray-700 body-font">
                <div className="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row">

                    <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 md:items-start md:text-left px-6 	"
                        data-aos="fade-right" data-aos-duration="1500">
                        <h1
                            className="mb-8 text-2xl font-bold tracking-tighter text-center text-gray-800 lg:text-left lg:text-2xl title-font">
                            Get everything you need
                        </h1>
                        <p className="mb-8 text-base leading-relaxed text-center text-gray-700 lg:text-left lg:text-1xl">
                            Looking for something other than what we offer, like a home decor, site building, app development,
                            budget PC build, content writers, bussiness consultant or anything?
                            You name them we have it. Yes you read it right, we have got everything covered.
                        </p>
                        <p className="mb-8 text-base leading-relaxed text-center text-gray-700 lg:text-left lg:text-1xl">
                            Czar has great Partners like the <b>Bytecode</b>,<b> Abhiwyakti</b> and <b>BD Goenka and
                                Associates</b> which are in Partnership with Czar to provide
                            you with the best services.
                        </p>

                    </div>

                    <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0" data-aos="flip-left"
                        data-aos-duration="1500">
                        <img className="object-cover object-center rounded sm:" alt="hero" src="/user.svg" />
                    </div>

                </div>
            </section >
        </>
    )
}

export default WhyUs