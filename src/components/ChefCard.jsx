import React from 'react';

const ChefCard = ({ chef }) => {
    const { chefName, id, chefPicture, yearsOfExperience, numberOfRecipes, likes } = chef;
    return (
        <div className="card card-side bg-base-100 shadow-md shadow-slate-400">
            <figure className='w-full'><img src={chefPicture} alt="chef image" /></figure>
            <div className="card-body w-full">
                <h2 className="card-title">{chefName}</h2>
                <p>Years of experience: {yearsOfExperience} years</p>
                <p>Total recipes: {numberOfRecipes}</p>
                <p className='text-sky-500'>{likes} Likes</p>
                <div className="card-actions">
                    <button className="btn btn-sm btn-primary">View Recipes</button>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;