import React from 'react';
import NavigationBar from '../components/shared/header/NavigationBar';
import Footer from '../components/shared/footer/Footer';
import { Outlet } from 'react-router-dom';
import ChefDetails from '../pages/home/Chef/ChefDetails';
import ChefBanner from '../pages/home/Chef/ChefBanner';
import RecipeLeft from '../components/RecipeLeftSide/RecipeLeft';

const ChefLayout = () => {
    return (
        <>
            <div className='shadow shadow-slate-500 mb-[2px]'>
                <NavigationBar></NavigationBar>
            </div>
            <ChefBanner></ChefBanner>
            <div className='w-full max-w-6xl mx-auto mb-20 mt-16 grid px-5 lg:px-0  lg:grid-cols-[3fr,_1fr] gap-10'>
                <ChefDetails></ChefDetails>
                <div className='border shadow bg-gray-50 rounded-lg my-[75px] px-4 py-6'>
                    <RecipeLeft></RecipeLeft>
                </div>

            </div>
            <Footer></Footer>
        </>
    );
};

export default ChefLayout;