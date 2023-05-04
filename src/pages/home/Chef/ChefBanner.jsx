import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { HiThumbUp } from "react-icons/hi";
import LazyLoad from 'react-lazy-load';

const ChefBanner = () => {
    const chef = useLoaderData();
    const { id, chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes, description } = chef;
    return (
        <div className='banner-4 md:flex md:gap-10 items-center px-10 pb-10 md:pb-0' >
            <div className='lg:w-4/5 py-10  flex justify-center items-center'>
                <LazyLoad threshold={0.60}>
                    <img src={chefPicture} alt="chef image" className='object-cover  lg:w-full bg-gray-900 rounded-full  border-black' />
                </LazyLoad>
            </div>
            <div className=" w-full flex flex-col gap-2 font-medium text-black">
                <h2 className="text-4xl font-bold">{chefName}</h2>
                <p>Years of experience: {yearsOfExperience} years</p>
                <p>Total recipes: {numberOfRecipes}</p>
                <p>{description}</p>
                <span className='flex text-blue-700 '><HiThumbUp className='text-2xl'></HiThumbUp> {likes} </span>
            </div>
        </div>
    );
};

export default ChefBanner;