import React from 'react';

const RecipeCard = ({ recipe }) => {
    const { id, name, ingredients, cookingMethod, image, rating } = recipe;
    return (
        <div className="card card-side shadow-lg shadow-gray-400 my-10">
            <figure className='border flex-shrink-0 w-52'><img src={image} alt="recipe image" className='h-full object-cover' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>CookingMethod: {cookingMethod}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-sm">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;