import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";

const Dishes = () => {
    const [recipes, setRecipes] = useState();
    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-side-yasin2514.vercel.app/recipe')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div>
            <div className='mb-14'>
                <h2 className='text-4xl font-bold text-center text-black'>SPECIAL  <span className='text-sky-500'>DISHES </span>TODAY</h2>
                <p className='text-green-600 font-medium text-center mt-3'>LET'S DISCOVER FOOD</p>
            </div>
            <Marquee speed={100}>
                <div className='flex items-center justify-center'>
                    {
                        recipes?.map(recipe => {
                            return (
                                <div className='flex mx-10 flex-col items-center' key={recipe.id}>

                                    <img src={recipe.image} alt={recipe.name} className='rounded-full w-36' />
                                    <h3 className='text-2xl mt-3 font-medium text-black'>{recipe.name}</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default Dishes;