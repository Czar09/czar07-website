import React from "react";

type Props = {};

function Banner({}: Props) {
  return (
    <>
      <div className="h-screen relative z-1 bg-[url(https://images.clickfunnels.com/3b/091f96e56447aa94781f17f7dc039b/Background-Header.png)] bg-no-repeat bg-cover">
        <div className=" lg:p-20 px-4 pt-10  mx-auto ">
          <div className="flex  w-full ">
            <div className="lg:px-20 w-full lg:w-[55%]">
              <h2
                className="text-xl md:text-2xl  font-bold tracking-widest text-white uppercase  "
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                World-Class The organization for everything
              </h2>
              <h6 className="text-purple-400 text-xl md:text-3xl pt-2 font-bold tracking-widest  ">
                Discover our digital education and service platform! Immerse
                yourself in our ocean of wisdom and acquire the expertise.
              </h6>
              <h6 className="text-lg md:text-xl pt-4  tracking-widest text-white ">
                Stop wasting time and money on faulty and ineffective ad
                campaigns.
              </h6>
              <h6 className="text-lg md:text-xl pt-7  tracking-widest text-white ">
              It's time to make your ad-budget count, scale your business and blow up your sales.
              </h6>
              <button className="px-10 rounded-full py-4 bg-purple-600 text-white mt-4 font-bold">Speak To Our Team Today <br />
              </button>
            </div>
            <div className="px-20 w-[45%] hidden lg:inline-block">
              <img
                className="w-full object-cover "
                src="https://images.clickfunnels.com/8e/b13d8a33794820aa0b95a879c4aceb/Wizard-Illustration.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
