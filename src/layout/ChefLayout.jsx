import React from 'react';
import NavigationBar from '../components/shared/header/NavigationBar';
import Footer from '../components/shared/footer/Footer';
import { Outlet } from 'react-router-dom';
import ChefDetails from '../pages/home/Chef/ChefDetails';
import ChefBanner from '../pages/home/Chef/ChefBanner';

const ChefLayout = () => {
    return (
        <>
            <div className='shadow shadow-slate-500 mb-[2px]'>
                <NavigationBar></NavigationBar>
            </div>
            <ChefBanner></ChefBanner>
            <div className='max-w-6xl mx-auto mb-20 mt-16 grid grid-cols-[3fr,_1fr] gap-10'>
                <>
                    <ChefDetails></ChefDetails>
                </>
                <div className='border'>
                    right side
                </div>

            </div>
            <div className=''>
                <Footer></Footer>
            </div>
        </>
    );
};

export default ChefLayout;