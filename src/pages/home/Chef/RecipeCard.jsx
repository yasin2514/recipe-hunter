import React from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const RecipeCard = ({ recipe }) => {
    const { id, name, ingredients, cookingMethod, image, rating } = recipe;
    return (
        <div className="card card-side shadow-lg shadow-gray-400 my-10">
            <figure className='border flex-shrink-0 w-52'><img src={image} alt="recipe image" className='h-full object-cover' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p ><span className='font-medium'>Ingredients:</span>
                    {
                        ingredients.map(item => (
                            <span> {item},</span>
                        ))
                    }
                </p>
                <p><span className='font-medium'>CookingMethod</span>: {cookingMethod}</p>
                <p className='flex gap-1'>
                    <span className='font-medium'>Ratings: </span>
                    <Rating style={{ maxWidth: 100 }}
                        value={rating} readOnly />
                    <span>{rating}</span>
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-sm">Favorite </button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;