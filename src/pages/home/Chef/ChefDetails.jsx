import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const ChefDetails = () => {
    const { id } = useParams();
    const [recipes, setRecipes] = useState();

    useEffect(() => {
        fetch(`https://chef-recipe-hunter-server-side-yasin2514.vercel.app/recipe/categories/${id}`)
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div>
            <h3 className='text-3xl font-bold text-center text-blue-600'>Total Recipes: {recipes?.length}</h3>
            <div>
                {
                    recipes && recipes.map(recipe => <RecipeCard
                        key={recipe?.id}
                        recipe={recipe}
                    ></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default ChefDetails;