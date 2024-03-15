const Head =() => {
    return(
    <nav class="flex items-center justify-between p-6 bg-blue-900 shadow-md font-['Poppins']">
        <div class="font-bold text-2xl text-white font-['Poppins']">MyFuse<span className="text-red-900">.</span>In</div>
        <ul class="flex space-x-4">
            <li><a href="#" class="hover:text-gray-700 font-['Poppins']">Home</a></li>
            <li><a href="#" class="hover:text-gray-700 relative font-['Poppins']">Jobs
                <ul class="absolute hidden text-gray-700 bg-white mt-2 rounded-md shadow-lg font-['Poppins']">
                <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 font-['Poppins']">Job 1</a></li>
                <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 font-['Poppins']">Job 2</a></li>
                <li><a href="#" class="block px-4 py-2 hover:bg-gray-100 font-['Poppins']">Job 3</a></li>
                </ul>
            </a></li>
            <li><a href="#" class="hover:text-gray-700 font-['Poppins']">Signin</a></li>
            <li><a href="#" class="hover:text-gray-700 font-['Poppins']">About us</a></li>
            <li><a href="#" class="hover:text-gray-700 font-['Poppins']">Blogs</a></li>
            <li><a href="#" class="hover:text-gray-700 font-['Poppins']">Contact</a></li>
        </ul>
</nav>
    )
}


import React, { useState } from 'react';

const Header = () => {
    const [jobsDropdownVisible, setJobsDropdownVisible] = useState(false);
    const [blogsDropdownVisible, setBlogsDropdownVisible] = useState(false);

    const toggleJobsDropdown = () => {
        setJobsDropdownVisible(!jobsDropdownVisible);
    };

    const toggleBlogsDropdown = () => {
        setBlogsDropdownVisible(!blogsDropdownVisible);
    };

    return (
        <div className="bg-gray-900">
            <div className="container mx-auto flex items-center justify-between py-4">
                <div className="text-white text-2xl">MyFuse.In</div>
                <ul className="flex items-center space-x-4">
                    <li><a href="#" className="text-white hover:bg-gray-800 px-4 py-2 rounded">Home</a></li>
                    <li className="relative" onClick={toggleJobsDropdown}>
                        <a href="#" className="text-white hover:bg-gray-800 px-4 py-2 rounded">Jobs</a>
                        <div className={`absolute ${jobsDropdownVisible ? 'block' : 'hidden'} bg-gray-900 text-white rounded mt-2`} onClick={(e) => e.stopPropagation()}>
                            <a href="#" className="block px-4 py-2">Job 1</a>
                            <a href="#" className="block px-4 py-2">Job 2</a>
                            <a href="#" className="block px-4 py-2">Job 3</a>
                        </div>
                    </li>
                    <li><a href="#" className="text-white hover:bg-gray-800 px-4 py-2 rounded">Sign In</a></li>
                    <li><a href="#" className="text-white hover:bg-gray-800 px-4 py-2 rounded">About Us</a></li>
                    <li className="relative" onClick={toggleBlogsDropdown}>
                        <a href="#" className="text-white hover:bg-gray-800 px-4 py-2 rounded">Blogs</a>
                        <div className={`absolute ${blogsDropdownVisible ? 'block' : 'hidden'} bg-gray-900 text-white rounded mt-2`} onClick={(e) => e.stopPropagation()}>
                            <a href="#" className="block px-4 py-2">Blog 1</a>
                            <a href="#" className="block px-4 py-2">Blog 2</a>
                            <a href="#" className="block px-4 py-2">Blog 3</a>
                        </div>
                    </li>
                    <li><a href="#" className="text-white hover:bg-gray-800 px-4 py-2 rounded">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;

