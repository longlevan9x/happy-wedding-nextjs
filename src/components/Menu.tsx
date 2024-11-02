// src/Menu.js
import React, { useState } from 'react';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed w-screen h-16 bg-transparent text-white z-20">
            <nav className="container mx-auto flex justify-between items-center p-5">
                <div className="text-lg font-bold">Wedding</div>
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="cursor-pointer hover:bg-gray-700 px-3 py-2 rounded">Home</a>
                    <a href="#" className="cursor-pointer hover:bg-gray-700 px-3 py-2 rounded">Story</a>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </nav>

            {isOpen && (
                <div className="md:hidden">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Home</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-700">Story</a>
                </div>
            )}
        </div>
    );
};

export default Menu;
