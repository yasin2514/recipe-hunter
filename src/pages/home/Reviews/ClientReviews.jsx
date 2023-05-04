import React from 'react';
import reviews from '../../../assets/reviews.jpg';
import client1 from '../../../assets/client-1.png';
import client2 from '../../../assets/client-2.png';
import { HiStar } from "react-icons/hi";

const ClientReviews = () => {
    return (
        <>
            <div className='mb-14'>
                <h2 className='text-4xl font-bold text-center text-black'><span className='text-sky-600'>CLIENT </span>REVIEWS</h2>
                <p className='text-green-600 font-medium text-center mt-3'>What Client Say</p>
            </div>
            <div className='lg:flex'>
                <div className='w-full'>
                    <img src={reviews} alt="clients image" className='h-full' />
                </div>
                <div className='flex flex-col bg-gray-50 justify-center gap-10 py-20'>

                    {/* client one  */}

                    <div className='flex flex-wrap items-center gap-5 px-10 bg-gray-50'>
                        <div className='w-52'>
                            <img src={client1} alt="client image" className='object-cover rounded-full border border-black' />
                        </div>
                        <div>
                            <span className='flex flex-wrap items-center justify-between my-5'>
                                <h2 className='text-2xl font-semibold'>Dain Rase</h2>
                                <span className='flex'>
                                    <HiStar className='text-orange-400'></HiStar>
                                    <HiStar className='text-orange-400'></HiStar>
                                    <HiStar className='text-orange-400'></HiStar>
                                    <HiStar className='text-orange-400'></HiStar>
                                    <HiStar className='text-orange-400'></HiStar>
                                </span>
                            </span>
                            <p>The Chef Point is a must-visit restaurant! The food is amazing, and the service is top-notch. The atmosphere is cozy, and the staff is friendly.</p>
                        </div>
                    </div>

                    {/* client two */}

                    <div className='flex flex-wrap items-center gap-5 px-10 '>
                        <div className='w-52'>
                            <img src={client2} alt="client image" className='object-cover rounded-full border border-black' />
                        </div>
                        <div>
                            <span className='flex flex-wrap items-center justify-between my-5'>
                                <h2 className='text-2xl font-semibold'>Drew Rasen</h2>
                                <span className='flex'>
                                    <HiStar className='text-orange-400'></HiStar>
                                    <HiStar className='text-orange-400'></HiStar>
                                    <HiStar className='text-orange-400'></HiStar>
                                    <HiStar className='text-orange-400'></HiStar>
                                    <HiStar className='text-orange-400'></HiStar>
                                </span>
                            </span>
                            <p>I highly recommend this restaurant to anyone looking for a delicious and memorable dining experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClientReviews;