import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImg from '../assets/error-2.png';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='md:flex text-center my-32 md:my-0 items-center justify-center gap-10 h-[100vh]'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-2xl font-medium'>Oops!!!</h1>
                <p className='font-medium'>Sorry, an unexpected error has occurred.</p>
                <p className='text-5xl font-bold text-red-500'>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
            <div className=''>
                <img src={errorImg} alt="no image" />
                <Link className='link link-hover text-primary' to={'/home'}>Back To Home Page</Link>
            </div>
        </div>
    );
};

export default ErrorPage;