const Login = () => {
    return(
        <div className="bg-blue-900 p-8 rounded-lg shadow-lg m-4">
            <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2">
                <h1 className="text-5xl font-bold text-white mb-6 font-['Poppins']">Unlock Endless Opportunities</h1>
                <p className="text-xl text-gray-300 mb-6 font-['Poppins']">Discover a world of opportunities with Internships, projects and lot more..</p>
                <form className="w-full max-w-md">
                    <div className="flex items-center border-b-2 border-teal-500 py-2">
                    {/* <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Insert email address"/>
                    <button className="flex-shrink-0 bg-lime-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded-lg font-['Poppins']" type="button" >Sign Up</button> */}
                    </div>
                </form>
                <div classNameName="mt-6">
                    <div className="flex items-center font-['Poppins']">
                    <div className="text-xl font-bold text-yellow-400 mr-2 my-2 font-['Poppins']">Join a vibrant community that paves the way to success.</div>
                    </div>
                </div>
                </div>
                <div className="lg:w-1/2 mt-8 lg:mt-0">
                    <img className="w-full rounded-lg" src="./images/success.png" ></img>
                </div>
            </div>
            <div className="mt-8 text-center">
                <button className="bg-lime-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg font-['Poppins']">Join us</button>
            </div>
        </div>
    
    )
}

export default Login;