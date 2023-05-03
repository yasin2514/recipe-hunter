import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './Chef/ChefCard';


const Home = () => {
    const chefs = useLoaderData();

    return (
        <>
            <section className='mb-24'>
                <div>
                    <h2 className='text-4xl font-bold text-center text-black'>OUR <span className='text-sky-500'>WORLD</span> CLASS TOP <span className='text-sky-500'>CHEF'S</span></h2>
                    <p className='text-green-600 font-medium text-center mt-3'>Expert and Professional</p>
                </div>
                <div className='grid grid-cols-2 gap-10 mt-16'>
                    {
                        chefs.map(person => <ChefCard
                            key={person.id}
                            chef={person}
                        ></ChefCard>)
                    }
                </div>
            </section>
        </>
    );
};

export default Home;