import React, { useContext } from 'react';
import NavigationBar from '../components/shared/header/NavigationBar';
import Footer from '../components/shared/footer/Footer';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProviders';
import Loading from '../components/Loading';

const LoginLayout = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <>
            <div className='shadow shadow-slate-500'>
                <NavigationBar></NavigationBar>
            </div>
            <div className='max-w-6xl mx-auto mb-20 mt-16 px-5 lg:px-0'>
                <Outlet></Outlet>
            </div>
            <div className=''>
                <Footer></Footer>
            </div>
        </>
    );
};

export default LoginLayout;