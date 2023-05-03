import React from 'react';
import { Link } from 'react-router-dom';


const ChefCard = ({ chef }) => {
    const { chefName, id, chefPicture, yearsOfExperience, numberOfRecipes, likes } = chef;
    return (
        <div className="card card-side bg-base-100 shadow-md shadow-slate-400">
            <figure className='w-full'><img src={chefPicture} alt="chef image" /></figure>
            <div className="card-body w-full">
                <h2 className="card-title">{chefName}</h2>
                <p>Years of experience: {yearsOfExperience} years</p>
                <p>Total recipes: {numberOfRecipes}</p>
                <p className='text-blue-600'>{likes} Likes</p>
                <div className="card-actions">
                    <Link className="btn btn-sm btn-primary" to={`/chef/${id}`}>View Recipes</Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;
