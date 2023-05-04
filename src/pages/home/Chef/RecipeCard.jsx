import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LazyLoad from 'react-lazy-load';


const RecipeCard = ({ recipe }) => {
    const { id, name, ingredients, cookingMethod, image, rating } = recipe;
    const [hide, setHide] = useState(false);

    const handleToast = () => {
        setHide(true);
        toast.success('Successfully Added👌', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

    }
    return (
        <div className="card pt-10 md:pt-0 md:card-side  shadow shadow-gray-300 my-10">
            <figure className='flex-shrink-0  md:w-52'>
                <LazyLoad threshold={0.60}>
                    <img src={image} alt="recipe image" className='h-full object-cover rounded-lg md:rounded-none' />
                </LazyLoad>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div ><span className='font-medium'>Ingredients:</span>
                    {
                        ingredients.map((item, i) => {
                            return <span key={i}> {item},</span>
                        })
                    }
                </div>
                <p><span className='font-medium'>CookingMethod</span>: {cookingMethod}</p>
                <span className='flex gap-1'>
                    <span className='font-medium'>Ratings: </span>
                    <Rating style={{ maxWidth: 100 }}
                        value={rating} readOnly />
                    <span>{rating}</span>
                </span>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-sm" onClick={handleToast} disabled={hide}>Favorite </button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;

