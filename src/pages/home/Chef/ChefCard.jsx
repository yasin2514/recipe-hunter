import React from 'react';
import { Link } from 'react-router-dom';
import { HiThumbUp } from "react-icons/hi";
import LazyLoad from 'react-lazy-load';

const ChefCard = ({ chef }) => {
    const { chefName, id, chefPicture, yearsOfExperience, numberOfRecipes, likes } = chef;
    return (
        <div className="card md:card-side bg-gray-50 shadow-md shadow-slate-400">
            <figure className='w-full'>
                <LazyLoad threshold={0.60}>
                    <img src={chefPicture} alt="chef image" />
                </LazyLoad>
            </figure>
            <div className="flex flex-col items-center gap-2 justify-center md:items-start py-5 lg:card-body w-full">
                <h2 className="card-title">{chefName}</h2>
                <p>Years of experience: {yearsOfExperience} years</p>
                <p>Total recipes: {numberOfRecipes}</p>
                <span className='flex text-blue-600'><HiThumbUp className='text-2xl'></HiThumbUp> {likes} </span>
                <div className="card-actions">
                    <Link className="btn btn-sm btn-primary" to={`/chef/${id}`}>View Recipes</Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;
