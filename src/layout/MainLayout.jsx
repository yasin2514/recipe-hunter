import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/shared/header/Header';
import Footer from '../components/shared/footer/Footer';
import { AuthContext } from '../contexts/AuthProviders';
import Loading from '../components/Loading';

const MainLayout = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <Header></Header>
            <div className='max-w-6xl mx-auto  my-20'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;