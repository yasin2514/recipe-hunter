import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ChefBanner = () => {
    const chef = useLoaderData();
    const { id, chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes, description } = chef;
    return (
        <div className='banner-4 flex items-center px-10' >

            <div className=' w-4/5 py-10  flex justify-center'>
                <img src={chefPicture} alt="chef image" className='object-cover bg-gray-900 rounded-full  border-black' />
            </div>
            <div className=" w-full flex flex-col gap-2 font-medium text-black">
                <h2 className="text-4xl font-bold">{chefName}</h2>
                <p>Years of experience: {yearsOfExperience} years</p>
                <p>Total recipes: {numberOfRecipes}</p>
                <p>{likes} Likes</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ChefBanner;