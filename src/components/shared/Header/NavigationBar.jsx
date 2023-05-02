import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiBars3CenterLeft, HiXMark } from "react-icons/hi2";
import { AuthContext } from '../../../contexts/AuthProviders';

const NavigationBar = () => {
    const [open, setOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <nav className={`flex justify-between items-center py-5 max-w-[1300px] px-1 md:px-5 mx-auto lg:bg-transparent ${open ? "bg-pink-100" : "bg-transparent"}`}>
            <div className='w-1/2'>
                <Link to={'/main'} className='font-bold text-3xl sm:text-4xl '>The Chef Point</Link>
            </div>
            <span className='lg:hidden text-4xl font-extrabold' onClick={() => setOpen(!open)}>
                {
                    open ?
                        <HiXMark></HiXMark> :
                        <HiBars3CenterLeft ></HiBars3CenterLeft>
                }
            </span>
            <div className={`justify-between lg:m-0 absolute lg:flex lg:static items-center w-full text-xl lg:bg-transparent text-dark font-medium ${open ? "inset-x-0 top-0 px-5 py-2 lg:p-0 mt-16 bg-pink-100" : "-mt-64 bg-transparent"}`}>

                <div className={`flex lg:flex-row lg:gap-16   ${open ? "flex-col gap-2 mb-5 lg:m-0 " : ""}`}>

                    <NavLink className={({ isActive }) => isActive ? "text-orange-500" : ''} to={'/main'}>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-orange-500" : ''} to={'/blog'}>Blog</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "text-orange-500" : ''} to={'/about'}>About</NavLink>

                </div>
                <div className='lg:flex items-center gap-6'>
                    {
                        user ?
                            <>
                                <img src={user?.photoURL} title={user?.displayName} className='w-10 h-10 rounded-full' alt="profile image" />
                                <Link to={'/login'} onClick={handleLogOut}>Logout</Link>
                            </> :
                            <>
                                <NavLink className={({ isActive }) => isActive ? "text-orange-500" : ''} to={'/login'}>Login</NavLink>
                            </>
                    }
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;