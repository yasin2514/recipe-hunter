import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav className='flex items-center'>
            <div className='flex-shrink-0'>
                <h1 className='text-[2.5rem] text-orange-500 font-bold'>The Chef Point</h1>
            </div>
            <div className='flex w-full justify-around text-xl font-semibold text-black'>
                <div className='flex gap-10 '>
                    <NavLink className={({ isActive }) => isActive ? "text-orange-500" : "text-dark"} to={'/'}>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-orange-500" : "text-dark"} to={'/blog'}>Blog</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-orange-500" : "text-dark"} to={'/about'}>About</NavLink>
                </div>
                <div className='flex gap-6'>
                    <img src="" alt="no image" />
                    <NavLink className={({ isActive }) => isActive ? "text-orange-500" : "text-dark"} to={'./login'}>Login</NavLink>

                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;