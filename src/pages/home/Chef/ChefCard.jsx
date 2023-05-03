import React from 'react';
import { Link } from 'react-router-dom';
import { HiThumbUp } from "react-icons/hi";


const ChefCard = ({ chef }) => {
    const { chefName, id, chefPicture, yearsOfExperience, numberOfRecipes, likes } = chef;
    return (
        <div className="card card-side bg-gray-50 shadow-md shadow-slate-400">
            <figure className='w-full'><img src={chefPicture} alt="chef image" /></figure>
            <div className="card-body w-full">
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
