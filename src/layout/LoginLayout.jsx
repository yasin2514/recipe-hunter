import React from 'react';
import NavigationBar from '../components/shared/header/NavigationBar';
import Footer from '../components/shared/footer/Footer';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className='max-w-6xl mx-auto  my-20'>
                <Outlet></Outlet>
            </div>
            <div className='mt-[calc(100vh_-_484px)]'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default LoginLayout;