import * as React from "react";
import Wave from "./Wave";

function Head() {
    return (
        <>
        <div className="flex justify-center items-center px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-20 bg-indigo-700 relative">
            <div className="mt-4 mb-6 w-full max-w-[1155px] md:max-w-full">
                <div className="flex flex-col md:flex-row md:gap-5">
                    <div className="flex flex-col w-full md:w-1/2">
                        <div className="flex flex-col mt-2.5 text-2xl text-white md:mt-10">
                            <div className="text-3xl font-bold">
                                Unlock Endless Opportunities
                            </div>
                            <div className="mt-3 font-light">
                                Discover a world of opportunities with Internships, projects and lot more..
                            </div>
                            <div className="mt-6 font-semibold text-amber-300">
                                Join a vibrant community that paves the way to success.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-6 md:mt-0 w-full md:w-1/2 md:ml-5">
                        <div className="grow">
                            <div className="flex flex-col md:flex-row md:gap-5">
                                <div className="flex flex-col w-full md:w-1/2">
                                    <div className="flex flex-col grow text-3xl text-white md:mt-6">
                                        <div className="items-start px-4 pt-6 pb-16 whitespace-nowrap bg-red-500 rounded-md transition duration-300 hover:bg-red-600 cursor-pointer">
                                            Learn
                                        </div>
                                        <div className="items-start px-4 pt-6 pb-16 mt-5 whitespace-nowrap rounded-md border-4 border-black border-solid shadow-md bg-zinc-300 transition duration-300 hover:bg-zinc-400 cursor-pointer">
                                            Challenge
                                        </div>
                                        <div className="justify-center p-4 mt-12 text-xl bg-lime-400 rounded-md transition duration-300 hover:bg-lime-500 text-center cursor-pointer  w-1/2">
                                            Join us
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-6 md:mt-0 w-full md:w-1/2 md:ml-5">
                                    <div className="flex flex-col grow text-white md:mt-6">
                                        <div className="flex flex-col px-3 py-6 bg-indigo-600 rounded-md border-black border-solid shadow-md border-[3px] transition duration-300 hover:bg-indigo-700 cursor-pointer">
                                            <div className="text-xl">AI Resume</div>
                                            <div className="self-end mt-20 text-xl">
                                                New
                                            </div>
                                        </div>
                                        <div className="items-start px-5 pt-7 pb-20 mt-7 text-xl whitespace-nowrap bg-lime-400 rounded-md transition duration-300 hover:bg-lime-500 cursor-pointer">
                                            Jobs
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "ocean" >
                <div className = "wave" > </div>  
                <div className = "wave" > </div>  
                <div className = "wave" > </div>  
            </div> 
        </div>

        
        
        </>
        
    );
}

export default Head;
