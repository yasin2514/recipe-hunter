import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-black text-gray-300 py-16 '>
            <div className='max-w-[1300px] mx-auto px-3 md:px-5'>
                <div className="lg:grid grid-cols-[1.3fr_3fr]  gap-20">
                    <div className='flex flex-col gap-1'>
                        <h3 className="text-white text-[2rem] font-medium">The Chef Point</h3>
                        <p className='text-[1.2rem] text-gray-300'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    </div>
                    <div className='grid mt-6 lg:mt-0 lg:place-content-start grid-cols-2 lg:grid-cols-4 gap-10  '>
                        <div className='flex flex-col gap-1'>
                            <h4 className="text-White text-[1.4rem] font-medium">Company</h4>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h4 className="text-White text-[1.4rem] font-medium">Services</h4>
                            <a className="link link-hover">Recipe</a>
                            <a className="link link-hover">Food</a>
                            <a className="link link-hover">Menu</a>
                            <a className="link link-hover">Table Book</a>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h4 className="text-White text-[1.4rem] font-medium">Legal</h4>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h4 className="text-White text-[1.4rem] font-medium">Contact</h4>
                            <a className="link link-hover">524 USA,NY/c</a>
                            <a className="link link-hover">2544-441-441</a>
                        </div>
                    </div>
                </div>
                <hr className='my-8 border-gray-700' />
                <div className='flex justify-between'>
                    <small>&copy;2023 The chef point. All Rights Reserved</small>
                    <small>Develop By Yasin Khan Rabbi</small>

                </div>
            </div>
        </footer>
    );
};

export default Footer;