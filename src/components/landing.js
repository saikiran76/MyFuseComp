import * as React from "react";
import s from "../assets/s.png"
import { Slide } from "react-awesome-reveal";

function Landing() {
  const handleButtonHover = (event) => {
    event.currentTarget.classList.add("hover");
  };

  const handleButtonLeave = (event) => {
    event.currentTarget.classList.remove("hover");
  };

  return (
    <div
      className="flex flex-col justify-center bg-neutral-200"
      style={{ fontFamily: "Poppins" }}
    >
      <div
        className="flex flex-col px-16 pb-16 w-full bg-gradient-to-br from-purple-900 to-black max-md:px-5 max-md:max-w-full"
        style={{ marginTop: "-56px" }}
      >
        <div className="px-px max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-56 text-7xl font-bold text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                <div className="mt-12 text-2xl max-md:mt-10 min-md:mt-10 max-md:max-w-full pt-8 md:pt-0">
                  Discover a world of opportunities with Internships, projects and
                  lot more..
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow items-end p-20 text-5xl font-bold text-white min-h-[673px] max-md:px-5 max-md:max-w-full max-md:text-4xl rounded-md">
                <img
                  loading="lazy"
                  src={s}
                  className="object-cover absolute inset-0 w-full h-full top-5"
                />
                <div className="relative mt-10 max-md:text-4xl">300+</div>
                <div className="relative mt-4 mr-12 text-base text-gray-800 max-md:mr-2.5">
                  Jobs
                </div>
                <div className="relative mt-80 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                  2.5K+
                </div>
                <div className="relative mt-4 text-base text-gray-800 max-md:max-w-full">
                  Active Students
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-0.5 mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow justify-center text-base text-white aspect-[1.3] fill-[linear-gradient(180deg,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0.00)_100%)] max-md:mt-6">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/41ab3652a3e9169e7692c39ba18c30222807a68cdf77307b83456f0c399d7e54?apiKey=3bfc69a1ccff4bb880a1c9a355262cca&"
                className="object-cover absolute inset-0 size-full"
                />
                <Slide direction="up" triggerOnce delay={50}>
                <div className="flex overflow-hidden relative flex-col px-6 py-7 w-full aspect-[1.3] stroke-[1px] stroke-white stroke-opacity-90 max-md:px-5">
                  <div className="relative mt-7 text-xl font-bold">Learn</div>
                  <div className="relative mt-6">
                    Lorem ipsum dolor sit amet,
                  </div>
                  <div className="relative mt-2.5">
                    consectetur adipiscing
                  </div>
                  <div className="relative mt-2.5 max-md:mr-2">
                    elit. Cursus imperdiet sed
                  </div>
                  <div className="relative mt-2.5">id elementum.</div></div>
                  </Slide>
              </div>
              
            </div>
            

          
              <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              
                <div className="flex overflow-hidden relative flex-col grow justify-center text-base text-white aspect-[1.3] fill-[linear-gradient(180deg,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0.00)_100%)] max-md:mt-6">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/41ab3652a3e9169e7692c39ba18c30222807a68cdf77307b83456f0c399d7e54?apiKey=3bfc69a1ccff4bb880a1c9a355262cca&"
                  className="object-cover absolute inset-0 size-full"
                  />
                  <Slide direction="up" triggerOnce delay={100}>
                  <div className="flex overflow-hidden relative flex-col px-6 py-7 w-full aspect-[1.3] stroke-[1px] stroke-white stroke-opacity-90 max-md:px-5">
                
                    <div className="relative mt-7 text-xl font-bold">Challenge</div>
                    <div className="relative mt-6">
                      Lorem ipsum dolor sit amet,
                    </div>
                    <div className="relative mt-2.5">
                      consectetur adipiscing
                    </div>
                    <div className="relative mt-2.5 max-md:mr-2">
                      elit. Cursus imperdiet sed
                    </div>
                    <div className="relative mt-2.5">id elementum.</div></div>
                    </Slide>
                    
                </div>
                
                
              
              </div>
              
  
              
            

            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow justify-center text-base text-white aspect-[1.3] fill-[linear-gradient(180deg,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0.00)_100%)] max-md:mt-6">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/41ab3652a3e9169e7692c39ba18c30222807a68cdf77307b83456f0c399d7e54?apiKey=3bfc69a1ccff4bb880a1c9a355262cca&"
                className="object-cover absolute inset-0 size-full"
                />
                <Slide direction="up" triggerOnce delay={150}>
                <div className="flex overflow-hidden relative flex-col px-6 py-7 w-full aspect-[1.3] stroke-[1px] stroke-white stroke-opacity-90 max-md:px-5">
              
                  <div className="relative mt-7 text-xl font-bold">Jobs</div>
                  <div className="relative mt-6">
                    Lorem ipsum dolor sit amet,
                  </div>
                  <div className="relative mt-2.5">
                    consectetur adipiscing
                  </div>
                  <div className="relative mt-2.5 max-md:mr-2">
                    elit. Cursus imperdiet sed
                  </div>
                  <div className="relative mt-2.5">id elementum.</div></div>
                  </Slide>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow justify-center text-base text-white aspect-[1.3] fill-[linear-gradient(180deg,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0.00)_100%)] max-md:mt-6">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/378053001538492a3230394ee3a50047f0dccab38975788784845d7bad4647a5?apiKey=3bfc69a1ccff4bb880a1c9a355262cca&"
                  className="object-cover absolute inset-0 size-full"
                />
                <Slide direction="up" triggerOnce delay={200}>
                <div className="flex overflow-hidden relative flex-col px-6 py-7 w-full aspect-[1.3] stroke-[1px] stroke-white stroke-opacity-90 max-md:px-5">
                  
                  
                  <div className="relative mt-7 text-xl font-bold">
                    AI Resume
                  </div>
                  <div className="relative mt-6">
                    Lorem ipsum dolor sit amet,
                  </div>
                  <div className="relative mt-2.5">
                    consectetur adipiscing
                  </div>
                  <div className="relative mt-2.5 max-md:mr-2">
                    elit. Cursus imperdiet sed
                  </div>
                  <div className="relative mt-2.5">id elementum.</div>
                </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;