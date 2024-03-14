const Header =() => {
    return(
    <nav class="flex items-center justify-between p-4 bg-white shadow-md">
        <div class="font-bold text-2xl text-blue-500">MyFuse.In</div>
        <ul class="flex space-x-4">
            <li><a href="#" class="hover:text-gray-700">Home</a></li>
            <li><a href="#" class="hover:text-gray-700 relative">Jobs
                <ul class="absolute hidden text-gray-700 bg-white mt-2 rounded-md shadow-lg">
                <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Job 1</a></li>
                <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Job 2</a></li>
                <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">Job 3</a></li>
                </ul>
            </a></li>
            <li><a href="#" class="hover:text-gray-700">Signin</a></li>
            <li><a href="#" class="hover:text-gray-700">About us</a></li>
            <li><a href="#" class="hover:text-gray-700">Blogs</a></li>
            <li><a href="#" class="hover:text-gray-700">Contact</a></li>
        </ul>
</nav>
    )
}

export default Header;