import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FiAlignRight, FiScissors } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav class="relative bg-white shadow dark:bg-gray-800">
            <div class="max-w-6xl xl:px-0 md:px-11 px-5 py-3 mx-auto md:flex">
                <div class="flex items-center justify-between w-ful">
                    <Link to='/'
                        className=' font-bold flex items-center'
                    >
                        <img src={logo}
                            className='md:h-20 md:w-20 h-16 w-16 rounded-full'
                        />
                        <h3
                            className='logo md:-ml-2 text-3xl md:text-4xl md:w-44'
                        >MyShop</h3>
                    </Link>

                    <div class="flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" class="text-gray-500 hover:text-gray-600 text-3xl">
                            {
                                isOpen ?
                                    <FiScissors />
                                    :
                                    <FiAlignRight />
                            }
                        </button>
                    </div>
                </div>

                <div class={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
                    <div class="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
                        <a href="#" class="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">Home</a>
                        <a href="#" class="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">About</a>
                        <a href="#" class="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2">Contact</a>
                    </div>

                    <div class="relative mt-4 md:mt-0">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>

                        <input type="text" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;