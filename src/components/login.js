const Login = () => {
    return(
            <div className="bg-blue-900 p-10 shadow-lg h-700 relative">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2">
                    <h1 className="text-5xl font-bold text-white mb-6 font-['Poppins']">Unlock Endless Opportunities</h1>
                    <p className="text-xl text-gray-300 mb-6 font-['Poppins']">Discover a world of opportunities with Internships, projects and lot more..</p>
                    <div classNameName="mt-6">
                        <div className="flex items-center font-['Poppins']">
                        <div className="text-xl font-bold text-yellow-400 mr-2 my-2 font-['Poppins']">Join a vibrant community that paves the way to success.</div>
                        </div>
                    </div>
                    </div>
                    <div className="lg:w-1/2 mt-8 lg:mt-0">
                        {/* <img src="../success.jpg"></img> */}
                    </div>
                </div>
                <div className="mt-8 text-center m-8">
                    <button className="bg-lime-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg font-['Poppins']">Join us</button>
                </div>
                <div className="ocean">
                    <div className="wave"></div>
                    <div className="wave"></div>
                <div className="wave"></div>
            </div>
        </div>
    )
}

export default Login;


